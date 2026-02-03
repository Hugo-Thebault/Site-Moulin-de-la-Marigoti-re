import photoPlat from "@/assets/images/photo-plat.webp";
import photoPlat2 from "@/assets/images/photo-plat-2.webp";
import photoPlat3 from "@/assets/images/photo-plat-3.webp";
import photoPlat4 from "@/assets/images/photo-plat-4.webp";
import leafIcon from "@/assets/images/leaf-icon.webp";

// Prefer the new JPEG if present, otherwise fallback to the existing WebP.
// Using a glob keeps the build safe even if one of the files is missing.
const chefCandidates = import.meta.glob(
  "../assets/images/photo-chef.{jpeg,jpg,webp,png}",
  { eager: true, import: "default" }
);

const photoChef =
  chefCandidates["../assets/images/photo-chef.jpeg"] ||
  chefCandidates["../assets/images/photo-chef.jpg"] ||
  chefCandidates["../assets/images/photo-chef.webp"] ||
  chefCandidates["../assets/images/photo-chef.png"];

// Images communes réutilisées dans le projet
export const commonImages = {
  photoPlat,
  photoPlat2,
  photoPlat3,
  photoPlat4,
  photoChef,
  leafIcon,
};

// Galeries par défaut pour les pages menus
export const defaultMenuGallery = [
  photoPlat,
  photoPlat2,
  photoPlat3,
  photoPlat4,
  photoPlat,
  photoPlat2,
];

export const receptionGallery = [
  photoPlat,
  photoPlat2,
  photoPlat3,
  photoPlat4,
  photoPlat,
  photoPlat2,
];

export const brunchGallery = [
  photoPlat2,
  photoPlat3,
  photoPlat4,
  photoPlat,
  photoPlat2,
  photoPlat3,
];

export const dinatoireGallery = [
  photoPlat3,
  photoPlat4,
  photoPlat,
  photoPlat2,
  photoPlat3,
  photoPlat4,
];

export const buffetFroidGallery = [
  photoPlat2,
  photoPlat3,
  photoPlat4,
  photoPlat,
  photoPlat2,
  photoPlat3,
];

export const menu39Gallery = [
  photoPlat,
  photoPlat3,
  photoPlat2,
  photoPlat4,
  photoPlat,
  photoPlat3,
];
