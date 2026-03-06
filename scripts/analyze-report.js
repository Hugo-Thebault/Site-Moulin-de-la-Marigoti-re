import fs from "fs";

const html = fs.readFileSync("lighthouse-report.html", "utf8");
const match = html.match(/__LIGHTHOUSE_JSON__ = (.+?);<\/script>/s);
if (!match) {
  console.log("No JSON data found in report");
  process.exit(1);
}
const data = JSON.parse(match[1]);
const c = data.categories;

console.log("=== SCORES ===");
console.log("Performance:", c.performance.score * 100);
console.log("Accessibility:", c.accessibility.score * 100);
console.log("Best Practices:", c["best-practices"].score * 100);
console.log("SEO:", c.seo.score * 100);

console.log("\n=== METRICS ===");
const metricIds = [
  "first-contentful-paint",
  "largest-contentful-paint",
  "total-blocking-time",
  "cumulative-layout-shift",
  "speed-index",
  "interactive",
];
metricIds.forEach((id) => {
  const a = data.audits[id];
  if (a)
    console.log(
      `${a.title}: ${a.displayValue} (score: ${Math.round(a.score * 100)})`
    );
});

console.log("\n=== OPPORTUNITIES (savings > 0ms) ===");
Object.values(data.audits)
  .filter(
    (a) =>
      a.details &&
      a.details.type === "opportunity" &&
      a.details.overallSavingsMs > 0
  )
  .sort((a, b) => b.details.overallSavingsMs - a.details.overallSavingsMs)
  .forEach((a) => {
    console.log(`\n${a.title} — ${a.details.overallSavingsMs}ms savings`);
    if (a.details.items) {
      a.details.items.slice(0, 5).forEach((item) => {
        const url = item.url ? item.url.split("/").pop() : "";
        const wasted = item.wastedBytes
          ? ` (${Math.round(item.wastedBytes / 1024)}KB wasted)`
          : "";
        console.log(`  → ${url}${wasted}`);
      });
    }
  });

console.log("\n=== PROPERLY SIZE IMAGES ===");
const sizeAudit = data.audits["uses-responsive-images"];
if (sizeAudit) {
  console.log("Score:", sizeAudit.score);
  if (sizeAudit.details && sizeAudit.details.items) {
    sizeAudit.details.items.forEach((item) => {
      const url = item.url ? item.url.split("/").pop() : "";
      const wasted = item.wastedBytes
        ? Math.round(item.wastedBytes / 1024)
        : 0;
      console.log(`  → ${url} wasted=${wasted}KB`);
    });
  }
}

console.log("\n=== UNSIZED IMAGES ===");
const unsizedAudit = data.audits["unsized-images"];
if (unsizedAudit) {
  console.log("Score:", unsizedAudit.score);
  if (unsizedAudit.details && unsizedAudit.details.items) {
    unsizedAudit.details.items.forEach((item) => {
      const snippet = item.node ? item.node.snippet : "";
      console.log(`  → ${snippet}`);
    });
  }
}

console.log("\n=== ACCESSIBILITY ISSUES ===");
c.accessibility.auditRefs
  .filter((r) => {
    const a = data.audits[r.id];
    return a && a.score !== null && a.score < 1;
  })
  .forEach((r) => {
    const a = data.audits[r.id];
    console.log(`[${Math.round(a.score * 100)}] ${a.title}`);
  });

console.log("\n=== RENDER-BLOCKING ===");
const blockAudit = data.audits["render-blocking-resources"];
if (blockAudit && blockAudit.details && blockAudit.details.items) {
  blockAudit.details.items.forEach((item) => {
    console.log(`  → ${item.url ? item.url.split("/").pop() : ""}`);
  });
}
