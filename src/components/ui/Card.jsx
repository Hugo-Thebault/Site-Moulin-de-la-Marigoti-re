/**
 * Composant Card réutilisable pour afficher du contenu dans une carte
 */
export default function Card({
  children,
  className = "",
  padding = "p-8",
  ...props
}) {
  return (
    <div
      className={`bg-base-200 rounded-lg shadow-lg ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
