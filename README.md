# Moulin de la Marigotière - Site Vitrine

Site web vitrine pour le traiteur **Moulin de la Marigotière** à Thiberville, géré par le chef François Duperrey.

## 🚀 Technologies utilisées

- **React** + **Vite**
- **Tailwind CSS** + **DaisyUI**
- **React Router** pour la navigation

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
│   └── images/
│       ├── special-menus/    # Images des menus spéciaux temporaires
│       └── ...               # Autres images
├── components/               # Composants React réutilisables
├── config/
│   └── specialMenuConfig.js  # Configuration des menus spéciaux
├── pages/                    # Pages de l'application
└── ...
```

## 🎯 Fonctionnalités

- ✅ Menu responsive avec navigation mobile
- ✅ Slider de menus avec animations
- ✅ Galerie de partenaires avec carousel infini
- ✅ Formulaire de contact modal
- ✅ Mode clair/sombre
- ✅ Section menus spéciaux temporaires (activable/désactivable)
- ✅ Lightbox pour les images
- ✅ Street View Google Maps

## 📝 Gestion des menus spéciaux

Pour activer/désactiver les menus spéciaux temporaires :

1. Éditer `src/config/specialMenuConfig.js`
2. Mettre `enabled: true` ou `false`
3. Placer les images dans `src/assets/images/special-menus/`
4. Mettre à jour les chemins d'images dans la config
5. Choisir `layout: 1` (3 portraits + 2 paysages) ou `layout: 2` (3 portraits)

## 🛠️ Commandes

```bash
# Développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📧 Contact

Pour toute question concernant le site, contactez le Moulin de la Marigotière.

---

**Dernière mise à jour :** 2024
