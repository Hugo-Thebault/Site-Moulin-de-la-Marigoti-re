import { Helmet } from "react-helmet-async";
import defaultOgImage from "../assets/images/Logo.gif";

/**
 * Composant SEO pour gérer les meta tags
 */
export default function SEO({
  title = "Moulin de la Marigotière - Traiteur Thiberville",
  description = "Traiteur événementiel à Thiberville. François Duperrey, maître restaurateur, vous propose des menus raffinés pour mariages, réceptions, séminaires. Produits locaux et cuisine de saison.",
  keywords = "traiteur, Thiberville, mariage, réception, François Duperrey, maître restaurateur, Eure, Normandie, buffet, cocktail, séminaire",
  image,
  url,
}) {
  const fullTitle = title.includes("Moulin")
    ? title
    : `${title} | Moulin de la Marigotière`;

  const siteUrl = import.meta.env.VITE_SITE_URL;

  const resolvedUrl =
    url ||
    (typeof window !== "undefined" && window.location
      ? window.location.href
      : siteUrl || "");

  let canonicalUrl = resolvedUrl;
  try {
    const parsed = new URL(resolvedUrl);
    parsed.hash = "";
    parsed.search = "";
    canonicalUrl = parsed.toString();
  } catch {
    // ignore invalid URL
  }

  const resolvedImage = image || defaultOgImage;
  let absoluteImage = resolvedImage;
  try {
    if (siteUrl) {
      absoluteImage = new URL(resolvedImage, siteUrl).toString();
    }
  } catch {
    // ignore invalid URL
  }

  // Structured Data (JSON-LD) pour le SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Moulin de la Marigotière - Traiteur de Thiberville",
    image: absoluteImage,
    "@id": canonicalUrl,
    url: canonicalUrl,
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
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

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
      <link rel="canonical" href={canonicalUrl} />
      <html lang="fr" />
    </Helmet>
  );
}
