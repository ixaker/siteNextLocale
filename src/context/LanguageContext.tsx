import React, { createContext, useContext, useEffect, useState } from 'react';

// Импорт переводов напрямую
import enTranslations from '../../locales/en.json';
import ukTranslations from '../../locales/uk.json';

type Translations = { [key: string]: string };

type LanguageContextType = {
  translations: Translations;
  lang: string;
  setLang: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// const supportedLanguages = ['en', 'uk'];
const defaultLanguage = 'en';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState(defaultLanguage);
  const [translations, setTranslations] =
    useState<Translations>(enTranslations); // По умолчанию English

  useEffect(() => {
    // Загрузка переводов при смене языка
    const loadTranslations = () => {
      switch (lang) {
        case 'uk':
          setTranslations(ukTranslations);
          break;
        case 'en':
        default:
          setTranslations(enTranslations);
          break;
      }
    };

    loadTranslations();
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ translations, lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
