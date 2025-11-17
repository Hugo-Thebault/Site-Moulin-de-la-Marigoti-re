import logoImage from "../assets/images/Logo.gif";

export default function Logo({ className = "h-12" }) {
  return <img src={logoImage} alt="Logo Traiteur" className={className} />;
}
