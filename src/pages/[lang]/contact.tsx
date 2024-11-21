import { useLanguage } from '../../context/LanguageContext';

const Contact: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <>
      <h1>{translations['title']}</h1>
      <p>{translations['description']}</p>
      <ul>
        <li>
          <strong>{translations['phone']}:</strong> +380 (44) 123-4567
        </li>
        <li>
          <strong>{translations['email']}:</strong> info@mysite.com
        </li>
        <li>
          <strong>{translations['address']}:</strong> Киев, Украина
        </li>
      </ul>
      <p>{translations['footer']}</p>
    </>
  );
};

export default Contact;
