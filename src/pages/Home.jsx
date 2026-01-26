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
        description="Traiteur événementiel à Thiberville (Eure) : mariages, réceptions, anniversaires, séminaires. Cuisine de saison, produits locaux. Devis sur mesure."
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
