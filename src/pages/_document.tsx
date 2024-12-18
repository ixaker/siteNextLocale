import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { getDefaultLanguage } from '@/context/withStaticPathsAndProps';
// import Script from 'next/script';

class MyDocument extends Document<{ lang: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    // Используем функцию для получения языка
    const lang = getDefaultLanguage(ctx.query.lang as string | undefined);

    return { ...initialProps, lang };
  }

  render() {
    const { lang } = this.props;

    return (
      <Html lang={lang}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e31837" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
          <meta property="og:type" content="website" />
          {/* Facebook Pixel */}
          {/* <Script src="https://connect.facebook.net/en_US/fbevents.js" strategy="afterInteractive" />
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
          </Script> */}
          {/* Google Analytics (gtag.js) */}
          {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2RGZ7ETLKW" strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2RGZ7ETLKW');
      `}
          </Script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
