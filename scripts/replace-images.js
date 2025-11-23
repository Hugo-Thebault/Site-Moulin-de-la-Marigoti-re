import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const optimizedDir = path.join(__dirname, "../src/assets/images-optimized");
const originalDir = path.join(__dirname, "../src/assets/images");
const backupDir = path.join(__dirname, "../src/assets/images-backup");

// Créer un backup des originales
if (!fs.existsSync(backupDir)) {
  console.log("📦 Création du backup des images originales...");
  fs.cpSync(originalDir, backupDir, { recursive: true });
  console.log("✅ Backup créé dans: images-backup/\n");
}

// Remplacer les images
function replaceImages(optimizedPath, originalPath) {
  const files = fs.readdirSync(optimizedPath);

  for (const file of files) {
    const optimizedFilePath = path.join(optimizedPath, file);
    const originalFilePath = path.join(originalPath, file);
    const stat = fs.statSync(optimizedFilePath);

    if (stat.isDirectory()) {
      if (!fs.existsSync(originalFilePath)) {
        fs.mkdirSync(originalFilePath, { recursive: true });
      }
      replaceImages(optimizedFilePath, originalFilePath);
    } else {
      fs.copyFileSync(optimizedFilePath, originalFilePath);
      console.log(`✅ Remplacé: ${file}`);
    }
  }
}

console.log("🔄 Remplacement des images...\n");
replaceImages(optimizedDir, originalDir);

console.log("\n✨ Terminé !");
console.log("📁 Images originales sauvegardées dans: images-backup/");
console.log("📁 Images optimisées maintenant dans: images/");
console.log(
  "\n💡 Tu peux supprimer images-optimized/ et images-backup/ si satisfait"
);
