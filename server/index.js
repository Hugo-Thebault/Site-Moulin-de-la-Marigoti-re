import express from "express";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { createInMemoryRateLimiter } from "./rateLimit.js";
import { validateContactPayload } from "./validateContact.js";
import { sendContactEmailWithMailjet } from "./mailjet.js";

dotenv.config();

const app = express();

// If behind a reverse proxy (common on hosts), allow Express to read X-Forwarded-For.
app.set("trust proxy", 1);

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "blob:", "https:"],
      fontSrc: ["'self'"],
      connectSrc: ["'self'", "https://www.google-analytics.com", "https://www.googletagmanager.com", "https://analytics.google.com"],
      frameSrc: ["'self'", "https://www.google.com"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      frameAncestors: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));
app.use(compression());
app.use(express.json({ limit: "32kb" }));

const rateLimit = createInMemoryRateLimiter({
  windowMs: 10 * 60 * 1000,
  max: 5,
});

const corsOrigin = process.env.CORS_ORIGIN?.trim();
if (corsOrigin) {
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", corsOrigin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") return res.status(204).end();
    next();
  });
}

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  try {
    const ip = req.ip || req.socket?.remoteAddress || "unknown";
    const limited = rateLimit(ip);
    if (limited.blocked) {
      return res.status(429).json({
        ok: false,
        error: "Trop de demandes. Réessayez dans quelques minutes.",
      });
    }

    const validation = validateContactPayload(req.body);
    if (!validation.ok) {
      return res.status(400).json({ ok: false, error: validation.error });
    }

    // Free anti-spam: honeypot + minimum time-to-submit.
    if (validation.data.website) {
      return res.status(200).json({ ok: true });
    }
    if (validation.data.formStartedAt) {
      const elapsedMs = Date.now() - validation.data.formStartedAt;
      if (elapsedMs < 2500) {
        return res.status(200).json({ ok: true });
      }
    }

    const {
      name,
      email,
      phone,
      address,
      message,
      eventDate,
      guests,
      service,
    } = validation.data;

    const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
    const toName = process.env.CONTACT_TO_NAME?.trim() || "Moulin de la Marigotière";
    const fromEmail = process.env.MAIL_FROM_EMAIL?.trim();
    const fromName = process.env.MAIL_FROM_NAME?.trim() || "Site web";

    if (!toEmail || !fromEmail) {
      return res.status(500).json({
        ok: false,
        error:
          "Le service d'email n'est pas configuré (CONTACT_TO_EMAIL / MAIL_FROM_EMAIL).",
      });
    }

    const subjectPrefix = process.env.CONTACT_SUBJECT_PREFIX?.trim() || "Nouveau message";
    const subject = `${subjectPrefix} — ${name}`;

    const textLines = [
      "Nouvelle demande via le site.",
      "",
      `Nom: ${name}`,
      `Email: ${email}`,
      `Téléphone: ${phone}`,
      address ? `Adresse: ${address}` : null,
      service ? `Prestation: ${service}` : null,
      guests ? `Convives: ${guests}` : null,
      eventDate ? `Date: ${eventDate}` : null,
      "",
      "Message:",
      message,
    ].filter(Boolean);

    const text = textLines.join("\n");

    await sendContactEmailWithMailjet({
      apiKey: process.env.MAILJET_API_KEY,
      apiSecret: process.env.MAILJET_API_SECRET,
      from: { email: fromEmail, name: fromName },
      to: { email: toEmail, name: toName },
      cc: { email, name },
      replyTo: { email, name },
      subject,
      text,
    });

    return res.json({ ok: true });
  } catch (error) {
    console.error("/api/contact error:", error);
    return res
      .status(500)
      .json({ ok: false, error: "Erreur serveur lors de l'envoi." });
  }
});

// Optional: serve the built SPA if dist/ exists (useful on OVH Node hosting/VPS).
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, "../dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
