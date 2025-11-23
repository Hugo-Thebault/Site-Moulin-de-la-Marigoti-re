import { Helmet } from "react-helmet-async";

/**
 * Composant SEO pour gérer les meta tags
 */
export default function SEO({
  title = "Moulin de la Marigotière - Traiteur Thiberville",
  description = "Traiteur événementiel à Thiberville. François Duperrey, maître restaurateur, vous propose des menus raffinés pour mariages, réceptions, séminaires. Produits locaux et cuisine de saison.",
  keywords = "traiteur, Thiberville, mariage, réception, François Duperrey, maître restaurateur, Eure, Normandie, buffet, cocktail, séminaire",
  image = "/src/assets/images/Logo.gif",
  url = "https://votre-site.fr",
}) {
  const fullTitle = title.includes("Moulin")
    ? title
    : `${title} | Moulin de la Marigotière`;

  // Structured Data (JSON-LD) pour le SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Moulin de la Marigotière - Traiteur de Thiberville",
    image: image,
    "@id": url,
    url: url,
    telephone: "+33-XX-XX-XX-XX-XX",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "203 Rue des Métiers",
      addressLocality: "Thiberville",
      postalCode: "27230",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.14361735574991,
      longitude: 0.4512997314945483,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    servesCuisine: "French",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
  };

  return (
    <Helmet>
      {/* Meta tags de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Meta tags supplémentaires */}
      <meta name="robots" content="index, follow" />
      <meta
        name="author"
        content="François Duperrey - Traiteur de Thiberville"
      />
      <link rel="canonical" href={url} />
      <html lang="fr" />
    </Helmet>
  );
}
