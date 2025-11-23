import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import fs from "fs";

async function runLighthouse() {
  // Détecter automatiquement le port (4173 pour preview, 5173 pour dev)
  const url =
    process.env.VITE_PORT === "4173"
      ? "http://localhost:4173"
      : "http://localhost:5173";

  console.log(`🔍 Test Lighthouse sur: ${url}\n`);

  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const options = {
    logLevel: "info",
    output: "html",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    port: chrome.port,
  };

  try {
    const runnerResult = await lighthouse(url, options);

    // Sauvegarder le rapport
    const reportHtml = runnerResult.report;
    fs.writeFileSync("lighthouse-report.html", reportHtml);

    // Afficher les scores
    console.log("\n📊 Scores Lighthouse:\n");
    console.log(
      `Performance: ${runnerResult.lhr.categories.performance.score * 100}/100`
    );
    console.log(
      `Accessibility: ${
        runnerResult.lhr.categories.accessibility.score * 100
      }/100`
    );
    console.log(
      `Best Practices: ${
        runnerResult.lhr.categories["best-practices"].score * 100
      }/100`
    );
    console.log(`SEO: ${runnerResult.lhr.categories.seo.score * 100}/100`);
    console.log(
      "\n📄 Rapport complet sauvegardé dans: lighthouse-report.html\n"
    );
  } catch (error) {
    console.error("❌ Erreur lors du test Lighthouse:", error.message);
    console.log(
      "\n💡 Assure-toi que le serveur est bien lancé sur le port",
      url.split(":")[2]
    );
  } finally {
    await chrome.kill();
  }
}

runLighthouse().catch(console.error);
