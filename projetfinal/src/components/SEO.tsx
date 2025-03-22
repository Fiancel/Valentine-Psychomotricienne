import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
  type?: string;
  keywords?: string;
}

export default function SEO({
  title = "Psychomotricienne à Lyon | Bilans psychométriques enfants et adolescents",
  description = "Cabinet de psychomotricité à Lyon spécialisé dans l'accompagnement des enfants et adolescents. Bilans psychométriques, suivi personnalisé et conseils aux parents pour un développement optimal.",
  canonicalUrl = "https://www.psychometrie.com",
  image = "/images/preview.jpg",
  type = "website",
  keywords = "psychomotricienne lyon, bilan psychométrique, développement enfant, psychomotricité, accompagnement enfants"
}: SEOProps) {
  const siteTitle = "Valentine Nicolas | Psychomotricienne à Lyon";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Balises meta de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Valentine Nicolas" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="fr" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Données structurées JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": siteTitle,
          "description": description,
          "image": image,
          "url": canonicalUrl,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "56b lotissement Létrat",
            "addressLocality": "Tignieu-Jameyzieu",
            "postalCode": "38230",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.7485",
            "longitude": "5.1695"
          },
          "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
          "telephone": "06 59 90 87 61",
          "email": "valentine.nicolas@psychomotricien.eu",
          "priceRange": "€€",
          "medicalSpecialty": "Psychomotricité",
          "availableService": [
            "Bilan psychométrique",
            "Accompagnement enfants",
            "Suivi psychomoteur"
          ]
        })}
      </script>
    </Helmet>
  );
}