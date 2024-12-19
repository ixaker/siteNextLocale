import CustomButton from '@/components/ui/button/CustomButton';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface LanguageSwitcherProps {
  currentLang: string; // Текущий язык
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang }) => {
  const router = useRouter();
  const { asPath } = router;
  const [displayLanguages, setDisplayLanguages] = useState<string[]>([]);

  useEffect(() => {
    const defaultLanguages = ['de', 'en', 'uk'];
    const browserLang = navigator.language.split('-')[0];

    const languages = [...defaultLanguages];
    if (!defaultLanguages.includes(browserLang) && browserLang !== 'ru') {
      languages.push(browserLang);
    }

    setDisplayLanguages(languages);
  }, []);

  const switchLanguage = (newLang: string) => {
    const newPath = asPath.replace(/^\/[a-z]{2}/, `/${newLang}`);

    router.push(newPath);
    localStorage.setItem('lang', newLang);
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
