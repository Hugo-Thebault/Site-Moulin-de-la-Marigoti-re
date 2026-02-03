# Moulin de la Marigotière - Site Vitrine

Site web vitrine pour le traiteur **Moulin de la Marigotière** à Thiberville, géré par le chef François Duperrey.

## 🚀 Technologies utilisées

- **React 18** + **Vite 5**
- **Tailwind CSS 4** + **DaisyUI 5**
- **React Router 6** pour la navigation
- **Polices locales** (Cormorant SC, Cormorant Infant, Inter)

## 📦 Installation

```bash
# Cloner le dépôt
git clone [URL_DU_REPO]

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🎨 Structure du projet

```
src/
├── assets/
│   ├── images/          # Images du site
│   └── fonts/           # Polices locales
├── components/
│   ├── ui/              # Composants UI réutilisables
│   ├── menu/            # Composants spécifiques aux menus
│   ├── partners/        # Composants partenaires
│   └── ...              # Autres composants
├── data/                # Données centralisées
│   ├── partnersData.js
│   ├── menusData.js
│   └── imagesData.js
├── hooks/               # Hooks personnalisés
│   ├── useCarousel.js
│   ├── useDarkMode.js
│   ├── useModal.js
│   └── ...
├── pages/               # Pages de l'application
├── utils/               # Utilitaires
└── config/              # Configuration
```

## 🎯 Fonctionnalités

### ✅ Optimisations appliquées

**Phase 1 : Centralisation des données**

- Sources uniques pour partenaires, menus et images
- Réduction du code de ~300 lignes

**Phase 2 : Hooks personnalisés**

- `useCarousel` : Gestion des carousels
- `useDarkMode` : Gestion du thème
- `useModal` : Gestion des modals
- `useFadeTransition` : Transitions fade
- `useIntersectionObserver` : Détection viewport

**Phase 3 : Composants UI réutilisables**

- `Button`, `Card`, `Badge`, `SectionTitle`
- `MenuItem`, `MenuSection`, `PartnerCard`
- Réduction du code de ~60%

**Phase 4 : Optimisations avancées**

- Lazy loading des pages avec React.lazy
- React.memo sur composants lourds
- Code splitting automatique
- Compression terser en production
- Images optimisées (WebP, compression)
- Polices locales (pas de Google Fonts)

### ⚡ Performances

- **Temps de chargement** : ~1-1.5s (optimisé de 4-5s)
- **Images** : Compression ~50-70%
- **Bundle** : Code splitting + minification
- **Lazy loading** : Pages + images
- **Cache** : LocalStorage pour thème

## 🛠️ Commandes

```bash
# Développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Optimiser les images
npm run optimize-images
npm run replace-images

# Gérer les polices
npm run download-fonts
npm run clean-fonts
```

## 📈 Google Analytics (GA4) & cookies

Le tracking **GA4** est optionnel et **désactivé par défaut tant que l'utilisateur n'a pas accepté** les cookies (bandeau RGPD).

1) Copier `.env.example` en `.env.local`
2) Renseigner :

```bash
VITE_SITE_URL=https://votre-domaine.fr
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Le site enverra automatiquement des `page_view` à chaque changement de route (SPA).

## ✉️ Formulaire de contact (Mailjet)

Le formulaire "Demandez votre devis" envoie un email via une **API serveur** (`/api/contact`).

- L'email est envoyé au traiteur (destinataire) et le client est mis **en copie (CC)** pour suivre la conversation.
- Les clés Mailjet ne sont **jamais** exposées côté front.
- Anti-spam gratuit inclus : honeypot + délai minimum avant envoi.
- Rate limiting inclus : 5 envois / 10 min / IP (mémoire serveur).

### Développement local

Dans 2 terminaux :

```bash
# Terminal 1 (front)
npm run dev

# Terminal 2 (API)
npm run dev:api
```

Vite proxifie automatiquement `/api` vers `http://localhost:3001`.

### Production (OVH)

Deux options courantes :

1) **Même serveur Node** (recommandé si vous avez un VPS/Public Cloud/Node hosting OVH)
  - `npm run build`
  - `npm run start`
  - Le serveur [server/index.js](server/index.js) servira `dist/` si présent + l'API `/api/contact`.

2) **Front statique + API séparée** (API sur un autre domaine/sous-domaine)
  - Côté front : définir `VITE_CONTACT_API_BASE_URL=https://api.votre-domaine.fr`
  - Côté API : définir `CORS_ORIGIN=https://www.votre-domaine.fr`

### Variables d'environnement

Front (Vite) : voir `.env.example`.

API (Node) : voir `server/.env.example` (à configurer sur l'hébergement OVH) :

- `MAILJET_API_KEY`, `MAILJET_API_SECRET`
- `CONTACT_TO_EMAIL` (email du traiteur)
- `MAIL_FROM_EMAIL` (sender Mailjet validé, avec SPF/DKIM)

## 📝 Gestion des menus spéciaux

Pour activer/désactiver les menus spéciaux temporaires :

1. Éditer `src/config/specialMenuConfig.js`
2. Mettre `enabled: true` ou `false`
3. Placer les images dans `src/assets/images/special-menus/`
4. Choisir `layout: 1` (3 portraits + 2 paysages) ou `layout: 2` (3 portraits)

## 🎨 Thèmes

Le site supporte deux thèmes :

- **Light** (par défaut)
- **Dark**

La préférence est sauvegardée dans localStorage.

## 🔧 Personnalisation

### Ajouter un nouveau partenaire

Éditer `src/data/partnersData.js` :

```javascript
{
  id: 10,
  name: "Nouveau Partenaire",
  description: "Description...",
  image: partnerImage,
  url: "https://...",
  category: "salles" | "wedding" | "vaisselle",
}
```

### Ajouter un nouveau menu

Éditer `src/data/menusData.js` et créer la page correspondante dans `src/pages/`.

## 📊 Métriques de performance

**Avant optimisation :**

- Chargement initial : ~4-5s
- Images non compressées
- Google Fonts externes
- Pas de lazy loading

**Après optimisation :**

- Chargement initial : ~1-1.5s (-70%)
- Images compressées WebP
- Polices locales
- Lazy loading pages + images
- Code splitting

## 📧 Contact

Pour toute question concernant le site, contactez le Moulin de la Marigotière.

---

**Dernière mise à jour :** 2024
