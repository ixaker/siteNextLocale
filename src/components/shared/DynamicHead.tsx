import Head from 'next/head';
import React from 'react';

interface DynamicHeadProps {
  title: string;
  description: string;
  keywords: string;
  lang: string; // Язык страницы
  canonical: string;
  //   alternate: string
  imgOg: string;
  localeOg: string;
}

const DynamicHead: React.FC<DynamicHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  imgOg,
  lang,
  localeOg,
}) => {
  return (
    <Head>
      {' '}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonical} />
      {/* <link rel="alternate" hrefLang="en" href="https://example.com/en" /> */}
      <link rel="manifest" href={`/manifest_${lang}.json`} />
      {/* <!-- Open Graph Tags --> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://site.qpart.com.ua/" />
      <meta property="og:image" content={imgOg} />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="og:locale" content={localeOg} />
      {/* <!-- Twitter Cards --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgOg} />
      <meta property="og:site_name" content="QPART" />
      {/* <!-- Facebook Specific Tags --> */}
      <meta property="fb:app_id" content="1234567890" />
      {/* <!-- JSON-LD Структурированные данные --> */}
      {/* <script type="application/ld+json">
    {
      '@context': "https://schema.org",
      "@type": "Organization",
      "name": "Название вашей компании по металлообработке",
      "url": "https://example.com",
      "logo": "https://example.com/logo.png",
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+1-800-555-5555",
        "contactType": "Customer Service",
        "availableLanguage": ["Ukrainian", "English"]
      }]
    }
    </script> */}
    </Head>
  );
};

export default DynamicHead;
