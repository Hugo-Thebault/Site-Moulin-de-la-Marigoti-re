import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, "../src/assets/images");

/**
 * Redimensionne les images volumineuses (> 500 KB)
 * Limite: 1920px de largeur max
 */
async function resizeImage(inputPath) {
  const stat = fs.statSync(inputPath);
  const sizeKB = stat.size / 1024;

  // Redimensionner uniquement si > 500 KB
  if (sizeKB > 500) {
    const metadata = await sharp(inputPath).metadata();

    // Si l'image est déjà petite, ignorer
    if (metadata.width <= 1920) {
      console.log(`⏭️  ${path.basename(inputPath)} - Déjà à la bonne taille`);
      return;
    }

    const tempPath = inputPath + ".temp";

    await sharp(inputPath)
      .resize(1920, null, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .toFile(tempPath);

    // Remplacer l'original
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);

    const newSize = (fs.statSync(inputPath).size / 1024).toFixed(2);
    const reduction = ((1 - newSize / sizeKB) * 100).toFixed(1);

    console.log(
      `✅ ${path.basename(inputPath)} - ${sizeKB.toFixed(
        0
      )} KB → ${newSize} KB (-${reduction}%)`
    );
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
        await resizeImage(filePath);
      }
    }
  }
}

console.log("📐 Redimensionnement des images volumineuses...\n");
console.log("Limite: 1920px de largeur max\n");

processDirectory(imagesDir)
  .then(() => {
    console.log("\n✨ Redimensionnement terminé !");
    console.log("💡 Relance maintenant: npm run optimize-images");
  })
  .catch((error) => {
    console.error("❌ Erreur:", error);
  });
