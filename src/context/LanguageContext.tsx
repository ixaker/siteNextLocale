import React, { createContext, useContext, useState } from 'react';

type LanguageContextType = {
  lang: string;
  changeLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  let localLang: string | null = null;
  if (typeof window !== 'undefined' && window.localStorage) {
    localLang = localStorage.getItem('lang');
  }

  const [lang, setLang] = useState(localLang || 'uk');

  const changeLanguage = (newLang: string) => {
    setLang(newLang);
  };
  return <LanguageContext.Provider value={{ lang, changeLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    if (typeof window === 'undefined') {
      // Возвращаем заглушку на сервере
      return { lang: 'uk', changeLanguage: () => {} };
    }
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
