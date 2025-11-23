import { commonImages } from "../../data/imagesData";

/**
 * Composant Badge pour afficher des badges (ex: Végétarien)
 */
export default function Badge({
  children,
  icon = null,
  variant = "success",
  className = "",
}) {
  const variants = {
    success: "bg-green-100 text-green-800",
    info: "bg-blue-100 text-blue-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${variants[variant]} ${className}`}
    >
      {icon && <img src={icon} alt="" className="w-3 h-3" />}
      {children}
    </span>
  );
}

/**
 * Badge végétarien pré-configuré
 */
export function VegetarianBadge() {
  return (
    <Badge icon={commonImages.leafIcon} variant="success">
      Végétarien
    </Badge>
  );
}
