import '../styles/globals.scss'; // Подключение глобальных стилей
import type { AppProps } from 'next/app';
import Layout from '../components/Layout'; // Импорт компонента Layout

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
