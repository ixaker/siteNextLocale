import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import { ContactComponentsProps, HomeComponentProps, ProductComponentProps, ServicesComponentProps } from '@/context/withStaticPathsAndProps';
import Script from 'next/script';

const DynamicHead: React.FC<ServicesComponentProps | ProductComponentProps | HomeComponentProps | ContactComponentsProps> = (componentProps) => {
  const pageData = componentProps.translationsPage;

  const [fullUrl, setFullUrl] = useState('');
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    setFullUrl(window.location.href);

    const checkConsent = () => {
      const consent = localStorage.getItem('userAgreementAccepted') === 'true';
      setHasConsent(consent);
      return consent;
    };

    const intervalId = setInterval(() => {
      if (checkConsent()) {
        clearInterval(intervalId);
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [fullUrl]);

  return (
    <>
      <NextSeo
        title={pageData.title}
        description={pageData.description}
        canonical={fullUrl}
        openGraph={{
          type: 'website',
          url: fullUrl,
          title: pageData.title,
          description: pageData.description,
          images: [
            {
              url: pageData.srcImg,
              width: 200,
              height: 200,
              alt: 'Image for Open Graph',
            },
          ],
          site_name: 'QPART',
          locale: componentProps.translations.locale,
        }}
        additionalMetaTags={[
          { name: 'keywords', content: pageData.title },
          { name: 'robots', content: 'index, follow' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        ]}
        additionalLinkTags={[
          { rel: 'canonical', href: fullUrl },
          ...componentProps.supportedLanguages.map((lang) => ({
            rel: 'alternate',
            hrefLang: lang,
            href: `https://cnc.qpart.com.ua/${lang}/`,
          })),
          { rel: 'alternate', hrefLang: 'x-default', href: 'https://cnc.qpart.com.ua' },
          { rel: 'manifest', href: `/manifest_${componentProps.lang}.json` },
        ]}
      />

      {hasConsent && (
        <>
          <Script src="https://connect.facebook.net/en_US/fbevents.js" strategy="afterInteractive" />
          <Script id="fbq-init" strategy="afterInteractive">
            {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '8670227466421134');
                    fbq('track', 'PageView');
                `}
          </Script>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2RGZ7ETLKW" strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2RGZ7ETLKW');
      `}
          </Script>
        </>
      )}
    </>
  );
};

export default DynamicHead;
