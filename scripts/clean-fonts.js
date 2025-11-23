import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontsDir = path.join(__dirname, "../src/assets/fonts");

// Fichiers à garder (ceux utilisés dans le CSS)
const filesToKeep = [
  "Cormorant-SC-400.woff2",
  "Cormorant-SC-600.woff2",
  "Cormorant-SC-700.woff2",
  "Cormorant-Infant-400.woff2",
  "Cormorant-Infant-600.woff2",
  "Cormorant-Infant-700.woff2",
  "Inter-400.woff2",
  "Inter-500.woff2",
  "Inter-600.woff2",
];

console.log("🧹 Nettoyage des polices...\n");

try {
  const files = fs.readdirSync(fontsDir);
  let deletedCount = 0;
  let keptCount = 0;

  for (const file of files) {
    const filePath = path.join(fontsDir, file);

    if (filesToKeep.includes(file)) {
      console.log(`✅ Conservé: ${file}`);
      keptCount++;
    } else {
      fs.unlinkSync(filePath);
      console.log(`❌ Supprimé: ${file}`);
      deletedCount++;
    }
  }

  console.log(`\n✨ Nettoyage terminé !`);
  console.log(`📊 Résumé:`);
  console.log(`   - ${keptCount} fichiers conservés`);
  console.log(`   - ${deletedCount} fichiers supprimés`);
  console.log(`\n📁 Fichiers restants dans: ${fontsDir}`);
} catch (error) {
  console.error("❌ Erreur:", error.message);
}
