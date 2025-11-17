import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import Location from "../components/Location";
import Partners from "../components/Partners";
import ContactCTA from "../components/ContactCTA";
import SpecialMenuBanner from "../components/SpecialMenuBanner";
import { specialMenuConfig } from "../config/specialMenuConfig";

export default function Home({ openModal }) {
  return (
    <main>
      {/* Bannière menus spéciaux - Activée/désactivée via config */}
      {specialMenuConfig.enabled && <SpecialMenuBanner />}

      <MenuSection />
      <Partners />
      <Hero />
      <Location />
      <ContactCTA openModal={openModal} />
    </main>
  );
}
