import '../styles/globals.scss'; // Подключение глобальных стилей
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { CssBaseline } from '@mui/material';
import { LanguageProvider } from '../context/LanguageContext';
import { ThemeProvider } from '@/context/theme-context/ThemeContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <LanguageProvider>
        <ThemeProvider>
          <CssBaseline /> {/* Базовые стили MUI */}
          <Layout lang={pageProps.lang} translations={pageProps.translations}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default MyApp;
