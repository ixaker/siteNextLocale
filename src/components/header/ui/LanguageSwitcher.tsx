import CustomButton from '@/components/ui/button/CustomButton';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface LanguageSwitcherProps {
  currentLang: string; // Текущий язык
  supportLangs?: string[];
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, supportLangs = [] }) => {
  const router = useRouter();
  const { asPath } = router;
  const [displayLanguages, setDisplayLanguages] = useState<string[]>([]);

  useEffect(() => {
    const defaultLanguages = ['de', 'en', 'uk'];
    const browserLang = navigator.language.split('-')[0];

    const languages = [...defaultLanguages];
    if (!defaultLanguages.includes(browserLang) && browserLang !== 'ru' && supportLangs.includes(browserLang)) {
      languages.push(browserLang);
    }

    setDisplayLanguages(languages);
  }, [supportLangs]);

  const switchLanguage = (newLang: string) => {
    const newPath = asPath.replace(/^\/[a-z]{2}/, `/${newLang}`);

    router.push(newPath);
    localStorage.setItem('lang', newLang);
    if (typeof window.gtag === 'function') {
      window.gtag('event', `Переключил язык на:${newLang}`, { event_category: 'Button', event_label: 'Language Switcher' });
    }
  };

  return (
    <div className="flex gap-3">
      {displayLanguages.map((lang) => (
        <CustomButton
          key={lang}
          ariaLabel={`Switch to ${lang}`}
          variant="leng-btn"
          className={`${currentLang === lang ? 'text-activeColor text-[white]' : ''}`}
          onClick={() => switchLanguage(lang)}
        >
          {lang?.toUpperCase()}
        </CustomButton>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
