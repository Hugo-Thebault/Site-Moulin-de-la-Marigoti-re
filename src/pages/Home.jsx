import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import Location from "../components/Location";
import Partners from "../components/Partners";
import ContactCTA from "../components/ContactCTA";
import SpecialMenuBanner from "../components/SpecialMenuBanner";
import { specialMenuConfig } from "../config/specialMenuConfig";
import SEO from "../components/SEO";

export default function Home({ openModal }) {
  return (
    <>
      <SEO
        title="Moulin de la Marigotière - Traiteur événementiel Thiberville"
        description="Traiteur à Thiberville (27). François Duperrey, maître restaurateur, pour vos mariages, anniversaires, séminaires. Cuisine gastronomique avec produits locaux et de saison."
      />
      <main>
        {/* Bannière menus spéciaux - Activée/désactivée via config */}
        {specialMenuConfig.enabled && <SpecialMenuBanner />}

        <MenuSection />
        <Partners />
        <Hero />
        <Location />
        <ContactCTA openModal={openModal} />
      </main>
    </>
  );
}
