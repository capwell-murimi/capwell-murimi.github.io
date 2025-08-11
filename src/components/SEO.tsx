import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object;
}

const SEO = ({ title, description, canonical, jsonLd }: SEOProps) => {
  const href = canonical || (typeof window !== 'undefined' ? window.location.href : '/');
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={href} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
