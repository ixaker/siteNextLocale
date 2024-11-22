import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    const getPreferredLanguage = () => {
      // Языки, поддерживаемые приложением
      const supportedLanguages = ['en', 'uk'];

      // Определяем язык пользователя
      const browserLanguage = navigator.language.split('-')[0]; // Например, 'en-US' -> 'en'

      // Если язык поддерживается, возвращаем его, иначе — язык по умолчанию
      return supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en';
    };

    // Перенаправляем пользователя на предпочитаемый язык
    const preferredLanguage = getPreferredLanguage();

    router.replace(`/${preferredLanguage}`);
  }, [router]);

  return null; // Эта страница ничего не отображает
};

export default RedirectPage;
