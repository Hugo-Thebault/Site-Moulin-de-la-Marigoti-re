/**
 * Composant pour afficher une galerie d'images responsive
 */
export default function ImageGallery({
  images,
  columns = 3,
  onImageClick = null,
}) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => onImageClick && onImageClick(index)}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
