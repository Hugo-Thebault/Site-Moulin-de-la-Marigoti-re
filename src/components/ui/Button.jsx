/**
 * Composant Button réutilisable
 */
export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}) {
  const baseStyles =
    "font-inter font-medium rounded transition-all duration-300 hover:scale-105 hover:shadow-lg";

  const variants = {
    primary: "gradient-primary text-white",
    secondary: "bg-white text-[#9B1227] border-2 border-[#9B1227]",
    outline: "bg-transparent text-white border border-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
