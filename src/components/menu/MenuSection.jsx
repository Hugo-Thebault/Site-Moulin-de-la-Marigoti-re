import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import MenuItem from "./MenuItem";

/**
 * Composant pour afficher une section de menu (Entrées, Plats, etc.)
 */
export default function MenuSection({
  title,
  items = [],
  note = null,
  className = "",
}) {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <Card>
        <SectionTitle color="primary" centered={false} className="mb-6">
          {title}
        </SectionTitle>

        <div className="font-inter text-base md:text-lg space-y-3 text-base-content">
          {items.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              isVegetarian={item.vegetarian}
              description={item.description}
            />
          ))}
        </div>

        {note && (
          <div className="mt-6 pt-6 border-t border-base-300">
            <p className="font-inter text-base text-base-content/70 italic">
              {note}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
