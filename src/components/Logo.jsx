import logoImage from "../assets/images/Logo.sm.webp";

export default function Logo({ className = "h-12" }) {
  return (
    <img
      src={logoImage}
      alt="Logo Moulin de la Marigotière - Traiteur"
      className={className}
      width={128}
      height={117}
    />
  );
}
