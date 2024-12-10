import Head from 'next/head';
import React from 'react';

interface DynamicHeadProps {
  title: string;
  description: string;
  keywords: string;
  lang: string; // Язык страницы
  canonical: string;
  imgOg: string;
  localeOg: string;
  supportedLanguages: string[];
}

const DynamicHead: React.FC<DynamicHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  imgOg,
  lang,
  localeOg,
  supportedLanguages,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonical} />
      {supportedLanguages.map((item, index) => (
        <link key={index} rel="alternate" hrefLang={item} href={`https://site.qpart.com.ua/${item}/`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href="https://site.qpart.com.ua" />
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

      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary" />
      {/* <!-- Twitter Cards --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgOg} />
      <meta property="og:site_name" content="QPART" />
      <meta property="fb:app_id" content="1234567890" />

      <meta property="og:type" content="website" />
    </Head>
  );
};

export default DynamicHead;
