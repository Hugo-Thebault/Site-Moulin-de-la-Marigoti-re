import { Link } from "react-router-dom";

const menus = [
  { id: "reception", title: "Réception", link: "/menus/reception" },
  { id: "brunch", title: "Brunch", link: "/menus/brunch" },
  { id: "dinatoire", title: "Dinatoire", link: "/menus/dinatoire" },
  { id: "buffet-froid", title: "Buffet froid", link: "/menus/buffet-froid" },
  { id: "menu-39", title: "Notre menu à 39€", link: "/menus/menu-39" },
];

export default function MenuNavigation({ currentMenu }) {
  return (
    <nav className="gradient-primary py-1 px-6 sticky top-0 z-40 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {menus.map((menu) => (
            <Link
              key={menu.id}
              to={menu.link}
              className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 ${
                currentMenu === menu.id
                  ? "bg-white text-[#9B1227] shadow-lg scale-105"
                  : "bg-transparent text-white border border-white hover:bg-white/10 hover:scale-105"
              }`}
            >
              {menu.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
