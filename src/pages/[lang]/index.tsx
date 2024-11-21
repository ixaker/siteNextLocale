import { useLanguage } from '../../context/LanguageContext';

const Home: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div>
      <h1>{translations.welcome}</h1>
      <p>{translations.about}</p>
    </div>
  );
};

export default Home;
