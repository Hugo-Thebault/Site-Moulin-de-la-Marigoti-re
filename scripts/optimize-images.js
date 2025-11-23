import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, "../src/assets/images");
const outputDir = path.join(__dirname, "../src/assets/images-optimized");

// Créer le dossier de sortie
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  const ext = path.extname(inputPath).toLowerCase();

  try {
    if (ext === ".png") {
      await sharp(inputPath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(outputPath);
    } else if (ext === ".jpg" || ext === ".jpeg") {
      await sharp(inputPath)
        .jpeg({ quality: 80, progressive: true })
        .toFile(outputPath);
    } else if (ext === ".webp") {
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
    } else if (ext === ".gif") {
      // Pour les GIF, juste copier (ou convertir en WebP si possible)
      fs.copyFileSync(inputPath, outputPath);
    }

    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)} - Réduit de ${reduction}%`);
  } catch (error) {
    console.error(`❌ Erreur sur ${path.basename(inputPath)}:`, error.message);
  }
}

async function processDirectory(dir, outDir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const inputPath = path.join(dir, file);
    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      const newOutDir = path.join(outDir, file);
      if (!fs.existsSync(newOutDir)) {
        fs.mkdirSync(newOutDir, { recursive: true });
      }
      await processDirectory(inputPath, newOutDir);
    } else {
      const ext = path.extname(file).toLowerCase();
      if ([".png", ".jpg", ".jpeg", ".webp", ".gif"].includes(ext)) {
        const outputPath = path.join(outDir, file);
        await optimizeImage(inputPath, outputPath);
      }
    }
  }
}

console.log("🚀 Début de l'optimisation des images...\n");
processDirectory(imagesDir, outputDir)
  .then(() => {
    console.log("\n✨ Optimisation terminée !");
    console.log(`📁 Images optimisées dans: ${outputDir}`);
    console.log(
      "\n💡 Remplace les images originales par celles optimisées si satisfait"
    );
  })
  .catch((error) => {
    console.error("❌ Erreur:", error);
  });
