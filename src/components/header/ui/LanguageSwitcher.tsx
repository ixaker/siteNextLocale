import { useLanguage } from '../../../context/LanguageContext';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        className="xs:text-xs sm:text-sm md:text-md lg:text-lg"
        onClick={() => setLang('en')}
        disabled={lang === 'en'}
      >
        EN
      </button>
      <button
        className="xs:text-xs sm:text-sm md:text-md lg:text-lg"
        onClick={() => setLang('uk')}
        disabled={lang === 'uk'}
      >
        UK
      </button>
    </div>
  );
};

export default LanguageSwitcher;
