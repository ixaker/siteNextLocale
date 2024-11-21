import CustomButton from '@/components/ui/button/CustomButton';
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
    <div className="flex gap-3">
      <CustomButton variant="leng-btn" onClick={() => switchLanguage('en')}>
        EN
      </CustomButton>
      <CustomButton variant="leng-btn" onClick={() => switchLanguage('uk')}>
        UK
      </CustomButton>
    </div>
  );
};

export default LanguageSwitcher;
