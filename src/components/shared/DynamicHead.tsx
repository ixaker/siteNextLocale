import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import { ContactComponentsProps, HomeComponentProps, ProductComponentProps, ServicesComponentProps } from '@/context/withStaticPathsAndProps';

const DynamicHead: React.FC<ServicesComponentProps | ProductComponentProps | HomeComponentProps | ContactComponentsProps> = (componentProps) => {
  const pageData = componentProps.translationsPage;

  const [fullUrl, setFullUrl] = useState('');
  const [hasConsent, setHasConsent] = useState(true);

  useEffect(() => {
    setFullUrl(window.location.href);

    const checkConsent = () => {
      const consent = localStorage.getItem('userAgreementAccepted') === 'true';
      setHasConsent(consent);
    };

    checkConsent();

    const handleStorageChange = () => {
      checkConsent();
    };

    window.addEventListener('storage', handleStorageChange);
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
      {/* Если есть согласие, загружаем Facebook Pixel и Google Analytics */}
      {hasConsent && (
        <>
          {/* Facebook Pixel */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
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
              `,
            }}
          />
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-2RGZ7ETLKW"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-2RGZ7ETLKW');
              `,
            }}
          />
        </>
      )}
    </>
  );
};

export default DynamicHead;
