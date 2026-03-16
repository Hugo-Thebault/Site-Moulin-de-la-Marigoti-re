// Images de la galerie — versions optimisées 800px WebP
import amuseBouche1 from "@/assets/images/Amusebouche1.gallery.webp";
import buffet1 from "@/assets/images/Buffet1.gallery.webp";
import buffet2 from "@/assets/images/Buffet2.gallery.webp";
import buffet3 from "@/assets/images/Buffet3.final.webp";
import buffet4 from "@/assets/images/Buffet4.gallery.webp";
import buffetPortrait from "@/assets/images/BuffetPortrait.gallery.webp";
import dinatoire1 from "@/assets/images/Dinatoire1.gallery.webp";
import dinatoire2 from "@/assets/images/Dinatoire2.gallery.webp";
import entree1 from "@/assets/images/Entree1.gallery.webp";
import entree2 from "@/assets/images/Entree2.gallery.webp";
import entree3 from "@/assets/images/Entree3.gallery.webp";
import entree4 from "@/assets/images/Entree4.gallery.webp";
import plat1 from "@/assets/images/Plat1.gallery.webp";
import plat2 from "@/assets/images/Plat2.gallery.webp";
import plat3 from "@/assets/images/Plat3.gallery.webp";
import photoPlat from "@/assets/images/photo-plat.gallery.webp";
import photoPlat2 from "@/assets/images/photo-plat-2.webp";
import photoPlat3 from "@/assets/images/photo-plat-3.webp";
import photoPlat4 from "@/assets/images/photo-plat-4.webp";

export const galleryCategories = [
  { id: "all", label: "Tout" },
  { id: "entrees", label: "Entrées" },
  { id: "plats", label: "Plats" },
  { id: "buffets", label: "Buffets" },
  { id: "dinatoires", label: "Dînatoires" },
];

export const galleryImages = [
  // Entrées
  {
    id: 1,
    src: entree1,
    alt: "Entrée gastronomique dressée avec soin",
    category: "entrees",
    orientation: "portrait",
  },
  {
    id: 2,
    src: entree2,
    alt: "Entrée raffinée aux saveurs de saison",
    category: "entrees",
    orientation: "portrait",
  },
  {
    id: 3,
    src: entree3,
    alt: "Assiette d'entrée élaborée par le chef",
    category: "entrees",
    orientation: "landscape",
  },
  {
    id: 4,
    src: entree4,
    alt: "Entrée festive pour réception",
    category: "entrees",
    orientation: "landscape",
  },
  {
    id: 5,
    src: amuseBouche1,
    alt: "Amuse-bouches raffinés pour cocktail",
    category: "entrees",
    orientation: "landscape",
  },

  // Plats
  {
    id: 6,
    src: plat1,
    alt: "Plat principal cuisiné avec des produits locaux",
    category: "plats",
    orientation: "landscape",
  },
  {
    id: 7,
    src: plat2,
    alt: "Assiette gastronomique dressée par le chef",
    category: "plats",
    orientation: "portrait",
  },
  {
    id: 8,
    src: plat3,
    alt: "Plat de saison de l'Odasiette",
    category: "plats",
    orientation: "landscape",
  },
  {
    id: 9,
    src: photoPlat,
    alt: "Création culinaire du chef François Duperrey",
    category: "plats",
    orientation: "landscape",
  },
  {
    id: 10,
    src: photoPlat2,
    alt: "Plat traiteur pour événement",
    category: "plats",
    orientation: "landscape",
  },
  {
    id: 11,
    src: photoPlat3,
    alt: "Assiette de saison raffinée",
    category: "plats",
    orientation: "landscape",
  },
  {
    id: 12,
    src: photoPlat4,
    alt: "Plat signature du traiteur",
    category: "plats",
    orientation: "landscape",
  },

  // Buffets
  {
    id: 13,
    src: buffet1,
    alt: "Buffet garni pour réception",
    category: "buffets",
    orientation: "landscape",
  },
  {
    id: 14,
    src: buffet2,
    alt: "Buffet froid traiteur dressé avec élégance",
    category: "buffets",
    orientation: "landscape",
  },
  {
    id: 15,
    src: buffet3,
    alt: "Buffet décoré pour mariage",
    category: "buffets",
    orientation: "landscape",
  },
  {
    id: 16,
    src: buffet4,
    alt: "Grand buffet pour événement festif",
    category: "buffets",
    orientation: "landscape",
  },
  {
    id: 17,
    src: buffetPortrait,
    alt: "Présentation soignée du buffet traiteur",
    category: "buffets",
    orientation: "landscape",
  },

  // Dînatoires
  {
    id: 18,
    src: dinatoire1,
    alt: "Bouchée dînatoire gourmande",
    category: "dinatoires",
    orientation: "landscape",
  },
  {
    id: 19,
    src: dinatoire2,
    alt: "Pièce cocktail dînatoire raffinée",
    category: "dinatoires",
    orientation: "landscape",
  },
];

// Images mises en avant dans le carrousel hero (les plus spectaculaires)
export const heroGalleryImages = [
  galleryImages[0], // Entrée portrait
  galleryImages[12], // Buffet 1
  galleryImages[8], // Photo plat
  galleryImages[17], // Dinatoire 1
  galleryImages[3], // Entrée 4
  galleryImages[15], // Buffet 4
  galleryImages[7], // Plat 3
];
