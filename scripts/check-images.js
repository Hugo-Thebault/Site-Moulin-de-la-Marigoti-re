import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, "../src/assets/images");

/**
 * Analyse les images pour vérifier leur optimisation
 */
function analyzeImages(dir, results = { total: 0, sizes: [], formats: {} }) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      analyzeImages(filePath, results);
    } else {
      const ext = path.extname(file).toLowerCase();
      if ([".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext)) {
        results.total++;
        const sizeKB = (stat.size / 1024).toFixed(2);
        results.sizes.push({ file, sizeKB: parseFloat(sizeKB), ext });
        results.formats[ext] = (results.formats[ext] || 0) + 1;
      }
    }
  }

  return results;
}

console.log("📊 Analyse des images...\n");

const results = analyzeImages(imagesDir);

console.log(`📁 Nombre total d'images : ${results.total}\n`);

console.log("📋 Formats utilisés :");
Object.entries(results.formats).forEach(([format, count]) => {
  console.log(`   ${format} : ${count} fichiers`);
});

console.log("\n⚠️  Images volumineuses (> 300 KB) :");
const largeImages = results.sizes.filter((img) => img.sizeKB > 300);
if (largeImages.length === 0) {
  console.log("   ✅ Aucune image volumineuse");
} else {
  largeImages.sort((a, b) => b.sizeKB - a.sizeKB);
  largeImages.forEach((img) => {
    console.log(`   ⚠️  ${img.file} - ${img.sizeKB} KB`);
  });
}

console.log("\n💡 Recommandations :");

// Vérifier les formats
const jpgCount = results.formats[".jpg"] || 0;
const jpegCount = results.formats[".jpeg"] || 0;
const pngCount = results.formats[".png"] || 0;
const webpCount = results.formats[".webp"] || 0;

if (jpgCount + jpegCount + pngCount > webpCount) {
  console.log("   📌 Convertir plus d'images en WebP (meilleure compression)");
  console.log("      Commande : npm run convert-to-webp");
}

if (largeImages.length > 0) {
  console.log("   📌 Compresser les images volumineuses");
  console.log("      Commande : npm run optimize-images");
}

// Taille moyenne
const avgSize = (
  results.sizes.reduce((sum, img) => sum + img.sizeKB, 0) / results.total
).toFixed(2);
console.log(`\n📊 Taille moyenne par image : ${avgSize} KB`);

if (avgSize > 150) {
  console.log("   ⚠️  La taille moyenne est élevée, envisagez une compression");
} else if (avgSize < 100) {
  console.log("   ✅ Excellente optimisation !");
} else {
  console.log("   ✅ Bonne optimisation");
}

console.log("\n✨ Analyse terminée !");
