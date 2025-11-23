import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontsDir = path.join(__dirname, "../src/assets/fonts");

// Créer le dossier fonts
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// URL Google Fonts CSS avec tous les poids nécessaires
const googleFontsUrl =
  "https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;400;500;600;700&family=Cormorant+Infant:wght@300;400;500;600;700&family=Inter:wght@400;500;600&display=swap";

async function fetchCSS(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          },
        },
        (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => resolve(data));
        }
      )
      .on("error", reject);
  });
}

async function downloadFontFile(url, outputPath, fileName) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);

    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Status ${res.statusCode}`));
          return;
        }

        res.pipe(file);

        file.on("finish", () => {
          file.close();
          const size = (fs.statSync(outputPath).size / 1024).toFixed(1);
          console.log(`  ✅ ${fileName} (${size} KB)`);
          resolve();
        });

        file.on("error", (err) => {
          fs.unlink(outputPath, () => {});
          reject(err);
        });
      })
      .on("error", (err) => {
        fs.unlink(outputPath, () => {});
        reject(err);
      });
  });
}

console.log("📥 Récupération des URLs depuis Google Fonts...\n");

(async () => {
  try {
    // Récupérer le CSS depuis Google Fonts
    const css = await fetchCSS(googleFontsUrl);

    // Extraire toutes les URLs woff2 (latin uniquement)
    const woff2Regex = /url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/g;
    const matches = [...css.matchAll(woff2Regex)];
    const woff2Urls = matches.map((m) => m[1]);

    console.log(`📦 ${woff2Urls.length} fichiers de polices trouvés\n`);

    // Mapping des URLs vers des noms de fichiers lisibles
    const fontNames = {
      cormorantsc: "Cormorant-SC",
      cormorantinfant: "Cormorant-Infant",
      inter: "Inter",
    };

    let fileIndex = 0;
    for (const url of woff2Urls) {
      // Déterminer le nom de la police et le poids depuis l'URL
      let fontFamily = "Unknown";
      let weight = "400";

      if (url.includes("cormorantsc")) {
        fontFamily = "Cormorant-SC";
      } else if (url.includes("cormorantinfant")) {
        fontFamily = "Cormorant-Infant";
      } else if (url.includes("inter")) {
        fontFamily = "Inter";
      }

      // Poids par ordre d'apparition (300, 400, 500, 600, 700 pour Cormorant, 400, 500, 600 pour Inter)
      const weights = fontFamily.includes("Inter")
        ? [400, 500, 600]
        : [300, 400, 500, 600, 700];
      const weightIndex = fileIndex % weights.length;
      weight = weights[weightIndex].toString();

      const fileName = `${fontFamily}-${weight}.woff2`;
      const outputPath = path.join(fontsDir, fileName);

      try {
        await downloadFontFile(url, outputPath, fileName);
        fileIndex++;
      } catch (error) {
        console.error(`  ❌ Erreur pour ${fileName}:`, error.message);
      }
    }

    console.log("\n✨ Téléchargement terminé !");
    console.log(`📁 Polices dans: ${fontsDir}`);

    // Vérifier les fichiers
    const files = fs.readdirSync(fontsDir);
    console.log(`\n✅ ${files.length} fichiers téléchargés`);

    if (files.length < 9) {
      console.log(
        "\n⚠️  Certains fichiers manquent. Utilise la solution manuelle si nécessaire."
      );
    }
  } catch (error) {
    console.error("\n❌ Erreur:", error.message);
    console.log("\n📝 Solution manuelle :");
    console.log("1. Va sur https://gwfh.mranftl.com/fonts");
    console.log(
      "2. Cherche et télécharge : Cormorant SC, Cormorant Infant, Inter"
    );
    console.log("3. Place les fichiers .woff2 dans src/assets/fonts/");
  }
})();
