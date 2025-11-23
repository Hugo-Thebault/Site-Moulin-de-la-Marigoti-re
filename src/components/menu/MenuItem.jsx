import { VegetarianBadge } from "../ui/Badge";

/**
 * Composant pour afficher un item de menu
 */
export default function MenuItem({
  name,
  isVegetarian = false,
  description = null,
}) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-base-content/70 mt-1">•</span>
      <div className="flex items-center gap-2 flex-wrap">
        <span>{name}</span>
        {isVegetarian && <VegetarianBadge />}
      </div>
      {description && (
        <p className="text-sm text-base-content/70 mt-1">{description}</p>
      )}
    </div>
  );
}
