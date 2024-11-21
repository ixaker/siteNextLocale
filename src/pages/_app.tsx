import '../styles/globals.scss'; // Подключение глобальных стилей
import type { AppProps } from 'next/app';
import { LanguageProvider } from '../context/LanguageContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default MyApp;
