import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, "../src/assets/images");

/**
 * Convertit toutes les images JPG/JPEG/PNG en WebP
 * WebP offre une meilleure compression que JPEG/PNG
 */
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 }) // effort 6 = bon compromis qualité/vitesse
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const reduction = ((1 - webpSize / originalSize) * 100).toFixed(1);

    console.log(
      `✅ ${path.basename(inputPath)} → ${path.basename(
        outputPath
      )} (-${reduction}%)`
    );
  } catch (error) {
    console.error(`❌ Erreur sur ${path.basename(inputPath)}:`, error.message);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const inputPath = path.join(dir, file);
    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      await processDirectory(inputPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

        // Ne convertit que si le WebP n'existe pas déjà
        if (!fs.existsSync(outputPath)) {
          await convertToWebP(inputPath, outputPath);
        }
      }
    }
  }
}

console.log("🚀 Conversion en WebP...\n");
processDirectory(imagesDir)
  .then(() => {
    console.log("\n✨ Conversion terminée !");
    console.log(
      "💡 Les fichiers WebP sont maintenant disponibles à côté des originaux"
    );
    console.log("💡 WebP offre ~25-35% de compression en plus que JPEG");
  })
  .catch((error) => {
    console.error("❌ Erreur:", error);
  });
