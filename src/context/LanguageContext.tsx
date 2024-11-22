import React, { createContext, useContext, useState } from 'react';

type LanguageContextType = {
  lang: string;
  changeLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState('uk'); // Язык по умолчанию

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
