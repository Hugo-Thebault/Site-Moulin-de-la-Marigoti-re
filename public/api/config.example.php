<?php
/**
 * Configuration Mailjet — NE PAS COMMITTER CE FICHIER
 * Copier config.example.php vers config.php et remplir les valeurs
 */
return [
    // Clés API Mailjet (https://app.mailjet.com/account/apikeys)
    'MJ_APIKEY_PUBLIC'  => 'VOTRE_CLE_PUBLIQUE_ICI',
    'MJ_APIKEY_PRIVATE' => 'VOTRE_CLE_PRIVEE_ICI',

    // Expéditeur (doit être vérifié dans Mailjet)
    'FROM_EMAIL' => 'francoisduperreysite@gmail.com',
    'FROM_NAME'  => 'Moulin de la Marigotière - Site Web',

    // Destinataire des demandes de contact
    'TO_EMAIL' => 'contact.moulin.marigotiere@gmail.com',
    'TO_NAME'  => 'Moulin de la Marigotière',

    // Sécurité
    'ALLOWED_ORIGINS' => [
        'https://www.moulin-marigotiere.fr',
        'https://moulin-marigotiere.fr',
        'http://localhost:5173',
        'http://localhost:4173',
    ],
];
