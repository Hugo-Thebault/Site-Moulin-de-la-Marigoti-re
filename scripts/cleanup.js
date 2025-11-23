import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, "../src/assets");

const foldersToDelete = ["images-backup", "images-optimized"];

const filesToDelete = [
  // Supprimer les JPG si les WebP existent
  "images/photo-plat.jpg",
  "images/photo-chef.jpg",
  "images/chateau-de-carsix.jpg",
  "images/jonqueret.jpg",
  "images/loca.jpg",
  "images/mille-et-une-emotion.jpg",
  "images/paula.jpg",
  "images/petite-haye.jpg",
];

console.log("🧹 Nettoyage des fichiers temporaires...\n");

// Supprimer les dossiers temporaires
for (const folder of foldersToDelete) {
  const folderPath = path.join(assetsDir, folder);
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`✅ Dossier supprimé: ${folder}/`);
  }
}

// Supprimer les JPG/PNG si WebP existe
let savedSpace = 0;
for (const file of filesToDelete) {
  const filePath = path.join(assetsDir, file);
  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/, ".webp");

  if (fs.existsSync(filePath) && fs.existsSync(webpPath)) {
    const size = fs.statSync(filePath).size;
    fs.unlinkSync(filePath);
    savedSpace += size;
    console.log(`✅ Fichier supprimé: ${file} (WebP existe)`);
  }
}

// Supprimer les PNG des menus spéciaux si WebP existe
const specialMenusDir = path.join(assetsDir, "images/special-menus");
if (fs.existsSync(specialMenusDir)) {
  const files = fs.readdirSync(specialMenusDir);
  for (const file of files) {
    if (file.endsWith(".png")) {
      const pngPath = path.join(specialMenusDir, file);
      const webpPath = pngPath.replace(".png", ".webp");
      if (fs.existsSync(webpPath)) {
        const size = fs.statSync(pngPath).size;
        fs.unlinkSync(pngPath);
        savedSpace += size;
        console.log(`✅ Fichier supprimé: special-menus/${file} (WebP existe)`);
      }
    }
  }
}

console.log(`\n✨ Nettoyage terminé !`);
console.log(`💾 Espace libéré: ${(savedSpace / 1024 / 1024).toFixed(2)} MB`);
console.log("\n📊 Fichiers restants: Uniquement images WebP optimisées");
