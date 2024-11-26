import '../styles/globals.scss'; // Подключение глобальных стилей
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { CssBaseline } from '@mui/material';
import { LanguageProvider } from '../context/LanguageContext';
import { ThemeProvider } from '@/context/theme-context/ThemeContext';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch = () => Promise.resolve();
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <LanguageProvider>
        <ThemeProvider>
          <CssBaseline /> {/* Базовые стили MUI */}
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default MyApp;
