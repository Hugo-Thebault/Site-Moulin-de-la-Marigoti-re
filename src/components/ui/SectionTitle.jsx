/**
 * Composant SectionTitle pour les titres de sections
 */
export default function SectionTitle({
  children,
  subtitle = null,
  centered = true,
  color = "primary",
  className = "",
}) {
  const colors = {
    primary: "text-[#9B1227]",
    white: "text-white",
    base: "text-base-content",
  };

  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-cormorant-sc ${colors[color]} mb-4`}
        style={{ fontVariant: "small-caps" }}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={`text-xl md:text-2xl lg:text-3xl font-cormorant-sc ${colors[color]}/70 mt-2`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
