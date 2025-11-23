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
