import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { asPath } = router; // Получаем текущий путь

  const switchLanguage = (newLang: string) => {
    // Обновляем текущий маршрут, заменяя язык
    const newPath = asPath.replace(/^\/[a-z]{2}/, `/${newLang}`); // Заменяем текущий язык в URL
    router.push(newPath);
  };

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>EN</button>
      <button onClick={() => switchLanguage('uk')}>UK</button>
    </div>
  );
};

export default LanguageSwitcher;
