import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { SUPPORTED_LANGUAGES, getDefaultLanguage } from '@/context/withStaticPathsAndProps';

interface RedirectPageProps {
  supportedLanguages: string[];
  defaultLanguage: string;
}

const RedirectPage: React.FC<RedirectPageProps> = ({ supportedLanguages, defaultLanguage }) => {
  const router = useRouter();

  useEffect(() => {
    const getPreferredLanguage = () => {
      // Определяем язык пользователя
      const browserLanguage = navigator.language.split('-')[0];

      // Если язык поддерживается, возвращаем его, иначе — язык по умолчанию
      return supportedLanguages.includes(browserLanguage) ? browserLanguage : defaultLanguage;
    };

    // Перенаправляем пользователя на предпочитаемый язык
    const preferredLanguage = getPreferredLanguage();

    const saveLang = localStorage.getItem('lang') || preferredLanguage;

    localStorage.setItem('lang', saveLang);
    router.replace(`/${saveLang}`);
  }, [router, supportedLanguages, defaultLanguage]);

  return null; // Эта страница ничего не отображает
};

export const getStaticProps: GetStaticProps = async () => {
  const supportedLanguages = SUPPORTED_LANGUAGES; // Динамически получаем поддерживаемые языки
  const defaultLanguage = getDefaultLanguage(); // Используем функцию для получения языка по умолчанию

  return {
    props: {
      supportedLanguages,
      defaultLanguage,
    },
  };
};

export default RedirectPage;
