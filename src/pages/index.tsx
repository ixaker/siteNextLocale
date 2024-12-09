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
      // Сначала проверяем язык в localStorage
      const localLang = localStorage.getItem('lang');
      if (localLang) {
        return localLang === 'ru' ? 'uk' : localLang;
      }

      const browserLanguage = navigator.language.split('-')[0];
      if (browserLanguage === 'ru') {
        return 'uk';
      }

      // Если язык поддерживается, возвращаем его, иначе — язык по умолчанию
      return supportedLanguages.includes(browserLanguage) ? browserLanguage : defaultLanguage;
    };

    const preferredLanguage = getPreferredLanguage();

    if (preferredLanguage !== 'ru') {
      localStorage.setItem('lang', preferredLanguage);
    }

    router.replace(`/${preferredLanguage}`);
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
