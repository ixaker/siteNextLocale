import CustomButton from '@/components/ui/button/CustomButton';
import { useRouter } from 'next/router';

interface LanguageSwitcherProps {
  supportedLanguages: string[]; // Список поддерживаемых языков
  currentLang: string; // Текущий язык
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ supportedLanguages = [], currentLang }) => {
  const router = useRouter();
  const { asPath } = router;

  supportedLanguages = supportedLanguages.filter((val) => val !== 'ru');

  const switchLanguage = (newLang: string) => {
    const newPath = asPath.replace(/^\/[a-z]{2}/, `/${newLang}`);
    router.push(newPath);
    localStorage.setItem('lang', newLang);
  };

  return (
    <div className="flex gap-3">
      {supportedLanguages.map((lang) => (
        <CustomButton
          key={lang}
          ariaLabel={`Switch to ${lang}`}
          variant="leng-btn"
          className={`${currentLang === lang ? 'text-activeColor text-[white]' : ''}`}
          onClick={() => switchLanguage(lang)}
        >
          {lang.toUpperCase()}
        </CustomButton>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
