<?php
/**
 * API de contact — Envoi d'email via Mailjet (v3.1 Send API)
 * Moulin de la Marigotière
 *
 * Endpoint : POST /api/contact/
 * Body JSON : { name, email, phone, address?, message, website?, formStartedAt? }
 */

// ─── Configuration ────────────────────────────────────────────────────────────
$config = require __DIR__ . '/../config.php';

// ─── CORS ─────────────────────────────────────────────────────────────────────
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['ALLOWED_ORIGINS'], true)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: " . $config['ALLOWED_ORIGINS'][0]);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Méthode POST uniquement
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Méthode non autorisée']);
    exit;
}

// ─── Lecture du body ──────────────────────────────────────────────────────────
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Requête invalide']);
    exit;
}

// ─── Anti-spam ────────────────────────────────────────────────────────────────
// 1. Honeypot : si le champ "website" est rempli, c'est un bot
if (!empty($data['website'])) {
    // On renvoie un faux succès pour ne pas alerter le bot
    echo json_encode(['ok' => true]);
    exit;
}

// 2. Timing : si le formulaire a été rempli en moins de 3 secondes, suspect
if (!empty($data['formStartedAt'])) {
    $elapsed = (time() * 1000) - intval($data['formStartedAt']);
    if ($elapsed < 3000) {
        echo json_encode(['ok' => true]);
        exit;
    }
}

// ─── Validation ───────────────────────────────────────────────────────────────
$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$phone   = trim($data['phone'] ?? '');
$address = trim($data['address'] ?? '');
$message = trim($data['message'] ?? '');

$errors = [];
if ($name === '')    $errors[] = 'Le nom est requis';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Email invalide';
if ($phone === '')   $errors[] = 'Le téléphone est requis';
if ($message === '') $errors[] = 'Le message est requis';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => implode(', ', $errors)]);
    exit;
}

// ─── Échappement anti-XSS pour le HTML de l'email ────────────────────────────
$safeName    = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail   = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safePhone   = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeAddress = htmlspecialchars($address, ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// ─── Construction de l'email ──────────────────────────────────────────────────
$htmlBody = "
<div style=\"font-family: Georgia, serif; max-width: 600px; margin: 0 auto;\">
  <div style=\"background: linear-gradient(135deg, #9B1227, #7a0e1f); padding: 24px; border-radius: 8px 8px 0 0;\">
    <h1 style=\"color: white; margin: 0; font-size: 22px;\">Nouvelle demande de devis</h1>
    <p style=\"color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;\">Moulin de la Marigotière</p>
  </div>
  <div style=\"background: #ffffff; padding: 28px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;\">
    <table style=\"width: 100%; border-collapse: collapse;\">
      <tr><td style=\"padding: 10px 0; color: #9B1227; font-weight: bold; width: 120px; vertical-align: top;\">Nom</td><td style=\"padding: 10px 0; color: #333;\">$safeName</td></tr>
      <tr><td style=\"padding: 10px 0; color: #9B1227; font-weight: bold; vertical-align: top;\">Email</td><td style=\"padding: 10px 0;\"><a href=\"mailto:$safeEmail\" style=\"color: #9B1227;\">$safeEmail</a></td></tr>
      <tr><td style=\"padding: 10px 0; color: #9B1227; font-weight: bold; vertical-align: top;\">Téléphone</td><td style=\"padding: 10px 0;\"><a href=\"tel:$safePhone\" style=\"color: #9B1227;\">$safePhone</a></td></tr>"
. ($address ? "
      <tr><td style=\"padding: 10px 0; color: #9B1227; font-weight: bold; vertical-align: top;\">Adresse</td><td style=\"padding: 10px 0; color: #333;\">$safeAddress</td></tr>" : "")
. "
    </table>
    <hr style=\"border: none; border-top: 1px solid #e5e5e5; margin: 18px 0;\">
    <h3 style=\"color: #9B1227; margin: 0 0 10px; font-size: 16px;\">Message</h3>
    <p style=\"color: #333; line-height: 1.6; white-space: pre-wrap; margin: 0;\">$safeMessage</p>
  </div>
  <p style=\"text-align: center; color: #999; font-size: 12px; margin-top: 16px;\">
    Envoyé depuis le formulaire de contact du site web
  </p>
</div>";

$textBody = "NOUVELLE DEMANDE DE DEVIS\n"
    . "========================\n\n"
    . "Nom : $name\n"
    . "Email : $email\n"
    . "Téléphone : $phone\n"
    . ($address ? "Adresse : $address\n" : "")
    . "\nMessage :\n$message\n";

$clientHtmlBody = "
<div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">
    <h2 style=\"color:#9B1227;\">Copie de votre demande</h2>
    <p>Bonjour $safeName,</p>
    <p>Nous avons bien reçu votre demande de devis. Voici la copie de votre message :</p>
    <div style=\"background:#f8f8f8; border:1px solid #e5e5e5; padding:16px; border-radius:8px;\">
        <p style=\"margin:0 0 8px;\"><strong>Nom :</strong> $safeName</p>
        <p style=\"margin:0 0 8px;\"><strong>Email :</strong> $safeEmail</p>
        <p style=\"margin:0 0 8px;\"><strong>Téléphone :</strong> $safePhone</p>
        " . ($address ? "<p style=\"margin:0 0 8px;\"><strong>Adresse :</strong> $safeAddress</p>" : "") . "
        <p style=\"margin:0; white-space:pre-wrap;\"><strong>Message :</strong>\n$safeMessage</p>
    </div>
    <p style=\"margin-top:16px;\">Nous reviendrons vers vous dès que possible.</p>
    <p>Cordialement,<br/>Moulin de la Marigotière</p>
</div>";

$clientTextBody = "COPIE DE VOTRE DEMANDE\n"
        . "=====================\n\n"
        . "Bonjour $name,\n\n"
        . "Nous avons bien reçu votre demande de devis.\n\n"
        . "Nom : $name\n"
        . "Email : $email\n"
        . "Téléphone : $phone\n"
        . ($address ? "Adresse : $address\n" : "")
        . "\nMessage :\n$message\n";

// ─── Envoi via Mailjet API v3.1 ──────────────────────────────────────────────
$payload = json_encode([
    'Messages' => [
        [
            'From' => [
                'Email' => $config['FROM_EMAIL'],
                'Name'  => $config['FROM_NAME'],
            ],
            'To' => [[
                'Email' => $config['TO_EMAIL'],
                'Name'  => $config['TO_NAME'],
            ]],
            'ReplyTo' => [
                'Email' => $email,
                'Name'  => $name,
            ],
            'Subject'  => "Demande de devis — $name",
            'TextPart' => $textBody,
            'HTMLPart' => $htmlBody,
        ],
        [
            'From' => [
                'Email' => $config['FROM_EMAIL'],
                'Name'  => $config['FROM_NAME'],
            ],
            'To' => [[
                'Email' => $email,
                'Name'  => $name,
            ]],
            'Subject'  => "Copie de votre demande — Moulin de la Marigotière",
            'TextPart' => $clientTextBody,
            'HTMLPart' => $clientHtmlBody,
        ],
    ],
]);

$ch = curl_init('https://api.mailjet.com/v3.1/send');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
    CURLOPT_USERPWD        => $config['MJ_APIKEY_PUBLIC'] . ':' . $config['MJ_APIKEY_PRIVATE'],
    CURLOPT_TIMEOUT        => 15,
]);

$response   = curl_exec($ch);
$httpCode   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError  = curl_error($ch);
curl_close($ch);

// ─── Réponse ──────────────────────────────────────────────────────────────────
if ($curlError) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Erreur de connexion au service d\'envoi']);
    exit;
}

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['ok' => true]);
} else {
    $mjResponse = json_decode($response, true);
    $errorMsg   = $mjResponse['Messages'][0]['Errors'][0]['ErrorMessage'] ?? 'Erreur lors de l\'envoi';

    // Log côté serveur uniquement (pas exposer les détails au client)
    error_log("Mailjet error ($httpCode): $response");

    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Impossible d\'envoyer votre message pour le moment. Réessayez plus tard.']);
}
