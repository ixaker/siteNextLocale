import '../styles/globals.scss'; // Подключение глобальных стилей
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { CssBaseline } from '@mui/material';
import { LanguageProvider } from '../context/LanguageContext';
import { ThemeProvider } from '@/context/theme-context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CssBaseline /> {/* Базовые стили MUI */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;
