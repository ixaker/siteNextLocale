import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { getDefaultLanguage } from '@/context/withStaticPathsAndProps';

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
