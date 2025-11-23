import photoPlat from "@/assets/images/photo-plat.webp";
import photoPlat2 from "@/assets/images/photo-plat-2.webp";
import photoPlat3 from "@/assets/images/photo-plat-3.webp";
import photoPlat4 from "@/assets/images/photo-plat-4.webp";

// Source unique pour tous les menus
export const menusData = [
  {
    id: "reception",
    title: "Réception",
    subtitle: "(mariage/anniversaire)",
    description:
      "Des menus raffinés et personnalisés pour faire de votre réception un moment inoubliable. Notre maître restaurateur François Duperrey met tout son savoir-faire à votre service pour créer une expérience culinaire qui marquera les esprits de vos invités.",
    image: photoPlat,
    link: "/menus/reception",
  },
  {
    id: "brunch",
    title: "Brunch",
    description:
      "Un moment convivial et gourmand pour vos événements en matinée. Notre brunch allie des saveurs sucrées et salées avec des produits frais et de saison pour satisfaire tous les palais.",
    image: photoPlat2,
    link: "/menus/brunch",
  },
  {
    id: "dinatoire",
    title: "Dinatoire",
    description:
      "Des bouchées raffinées et créatives pour vos cocktails dînatoires. Impressionnez vos invités avec nos créations culinaires élégantes et savoureuses, servies tout au long de la soirée.",
    image: photoPlat3,
    link: "/menus/dinatoire",
  },
  {
    id: "buffet-froid",
    title: "Buffet froid",
    description:
      "Une sélection de produits frais et de qualité pour vos événements. Nos buffets froids allient élégance et saveurs pour tous vos rassemblements. Salades composées, terrines maison, charcuteries fines et desserts gourmands.",
    image: photoPlat4,
    link: "/menus/buffet-froid",
  },
  {
    id: "menu-39",
    title: "Notre menu à 39€",
    description:
      "Une formule complète et accessible pour vos événements. Un menu équilibré avec entrée, plat et dessert, préparé avec le même soin et la même qualité que toutes nos prestations.",
    image: photoPlat,
    link: "/menus/menu-39",
  },
];

// Helper pour obtenir un menu par ID
export const getMenuById = (id) => {
  return menusData.find((menu) => menu.id === id);
};

// Pour la navigation
export const menuNavigationItems = menusData.map((menu) => ({
  id: menu.id,
  title: menu.title,
  link: menu.link,
}));
