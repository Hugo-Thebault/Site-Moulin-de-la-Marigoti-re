import croixAuxLiardsImg from "@/assets/images/croix-au-liard.webp";
import lorangerieImg from "@/assets/images/lorangerie.webp";
import jonqueretImg from "@/assets/images/jonqueret.webp";
import petiteHayeImg from "@/assets/images/petite-haye.webp";
import chateauCarsixImg from "@/assets/images/chateau-de-carsix.webp";
import chateauChapelleImg from "@/assets/images/chateau-de-la-chapelle.webp";
import milleEmotionsImg from "@/assets/images/mille-et-une-emotion.webp";
import paulaImg from "@/assets/images/paula.webp";
import locaImage from "@/assets/images/loca.webp";

// Source unique de vérité pour tous les partenaires
export const partnersFullData = [
  // Location de vaisselle
  {
    id: 1,
    name: "Loca Reception",
    description:
      "Location de vaisselle et nappage pour tous vos événements. Situé à Berville-la-Campagne.",
    phone: "02 32 30 05 88",
    location: "Berville-la-Campagne",
    image: locaImage,
    url: null,
    category: "vaisselle",
  },
  // Salles de réception
  {
    id: 2,
    name: "Château de La Chapelle",
    description:
      "Château situé à La Neuve-Lyre offrant un cadre exceptionnel et élégant pour vos réceptions.",
    location: "La Neuve-Lyre",
    image: chateauChapelleImg,
    url: "https://chateaudelachapelle.com/",
    category: "salles",
  },
  {
    id: 3,
    name: "Domaine La Croix aux Liards",
    description:
      "Domaine de charme situé à Notre-Dame-d'Estrées pour des événements mémorables.",
    location: "Notre-Dame-d'Estrées",
    image: croixAuxLiardsImg,
    url: "https://www.lacroixauxliards.com/",
    category: "salles",
  },
  {
    id: 4,
    name: "L'Orangerie",
    description:
      "Magnifique orangerie située au Château de Beaumesnil, cadre idéal pour vos célébrations.",
    location: "Beaumesnil",
    image: lorangerieImg,
    url: "https://www.mariages.net/chateau-mariage/lorangerie-chateau-de-beaumesnil--e107144",
    category: "salles",
  },
  {
    id: 5,
    name: "Salle des Jonquerets de Livet",
    description:
      "Salle de réception municipale située à Livet, parfaite pour accueillir vos invités dans un cadre convivial.",
    location: "Livet (Mesnil-en-Ouche)",
    image: jonqueretImg,
    url: "https://www.mesnil-en-ouche.fr/notre-territoire/location-des-salles-des-fetes/jonquerets-de-livet/",
    category: "salles",
  },
  {
    id: 6,
    name: "Domaine de la Petite Haye",
    description:
      "Domaine champêtre offrant un cadre authentique et verdoyant pour vos événements.",
    image: petiteHayeImg,
    url: "https://www.petite-haye.com/",
    category: "salles",
  },
  {
    id: 7,
    name: "Château de Carsix",
    description:
      "Château historique situé à Carsix, lieu prestigieux pour vos réceptions dans un cadre d'exception.",
    location: "Carsix",
    image: chateauCarsixImg,
    url: "https://chateaudecarsix.com/",
    category: "salles",
  },
  // Wedding planners
  {
    id: 8,
    name: "Mille et une émotions",
    description:
      "Wedding planner professionnel pour organiser votre mariage de rêve avec attention aux moindres détails.",
    image: milleEmotionsImg,
    url: "https://www.facebook.com/milleetuneemotions",
    category: "wedding",
  },
  {
    id: 9,
    name: "Paula Événements",
    description:
      "Organisation d'événements sur mesure avec créativité et professionnalisme pour faire de votre jour un moment unique.",
    image: paulaImg,
    url: "https://paula-evenements.com/",
    category: "wedding",
  },
];

// Helpers pour filtrer par catégorie
export const getPartnersByCategory = (category) => {
  return partnersFullData.filter((partner) => partner.category === category);
};

// Pour le carousel (format simplifié)
export const partnersCarousel = partnersFullData.map((partner) => ({
  id: partner.id,
  name: partner.name,
  image: partner.image,
  url: partner.url,
}));

// Catégories
export const partnerCategories = [
  { id: "salles", title: "Salles de réception" },
  { id: "wedding", title: "Wedding planner" },
  { id: "vaisselle", title: "Location de vaisselle" },
];
