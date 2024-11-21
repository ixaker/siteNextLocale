import { useLanguage } from '../../../context/LanguageContext';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div>
      <button onClick={() => setLang('en')} disabled={lang === 'en'}>
        EN
      </button>
      <button onClick={() => setLang('uk')} disabled={lang === 'uk'}>
        UK
      </button>
    </div>
  );
};

export default LanguageSwitcher;
