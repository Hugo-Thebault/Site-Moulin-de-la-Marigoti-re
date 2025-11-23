/**
 * Configuration des menus spéciaux temporaires
 *
 * Pour activer/désactiver :
 * - Mettre `enabled: true` pour afficher la bannière
 * - Mettre `enabled: false` pour la masquer
 *
 * Dispositions disponibles :
 * - layout: 1 → 3 portraits en haut + 2 paysages en bas (centrés)
 * - layout: 2 → 3 portraits seulement
 *
 * Images :
 * - Placer les images dans /src/assets/images/special-menus/
 * - Format A4 : portrait (ratio 1:1.414) ou paysage (ratio 1.414:1)
 */

export const specialMenuConfig = {
  // Activer/désactiver la bannière
  enabled: false, // Passer à true pour activer

  // Choix de disposition (1 ou 2)
  layout: 1,

  // Chemins des images (relatifs à /src/assets/images/special-menus/)
  images: {
    // 3 images portrait (obligatoires pour les deux layouts)
    portrait1: "MenuFete2025(1).png",
    portrait2: "MenuFete2025(2).png",
    portrait3: "MenuFete2025(3).png",

    // 2 images paysage (uniquement pour layout 1)
    landscape1: "CarteFete2025(1).png",
    landscape2: "CarteFete2025(2).png",
  },
};
