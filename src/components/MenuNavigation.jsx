import { Link } from "react-router-dom";
import { menuNavigationItems } from "../data/menusData";

export default function MenuNavigation({ currentMenu }) {
  return (
    <nav className="gradient-primary py-3 px-0 sticky top-0 z-40 shadow-md">
      <div className="container mx-auto">
        {/* Desktop : flex-wrap normal */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 px-6">
          {menuNavigationItems.map((menu) => (
            <Link
              key={menu.id}
              to={menu.link}
              className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 whitespace-nowrap ${
                currentMenu === menu.id
                  ? "bg-white text-[#9B1227] shadow-lg scale-105"
                  : "bg-transparent text-white border border-white hover:bg-white/10 hover:scale-105"
              }`}
            >
              {menu.title}
            </Link>
          ))}
        </div>

        {/* Mobile : scroll horizontal avec tactile */}
        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 px-6 py-1">
            {menuNavigationItems.map((menu) => (
              <Link
                key={menu.id}
                to={menu.link}
                className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  currentMenu === menu.id
                    ? "bg-white text-[#9B1227] shadow-lg scale-105"
                    : "bg-transparent text-white border border-white hover:bg-white/10"
                }`}
              >
                {menu.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
