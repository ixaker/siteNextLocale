import CustomButton from '@/components/ui/button/CustomButton';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { asPath } = router;
  const currentLang = asPath.split('/')[1];

  const switchLanguage = (newLang: string) => {
    const newPath = asPath.replace(/^\/[a-z]{2}/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-3">
      <CustomButton
        ariaLabel="English language"
        variant="leng-btn"
        className={`${currentLang === 'en' ? 'text-activeColor text-[white]' : ''}`}
        onClick={() => switchLanguage('en')}
      >
        EN
      </CustomButton>
      <CustomButton
        ariaLabel="Українська мова"
        variant="leng-btn"
        className={`${currentLang === 'uk' ? 'text-activeColor text-[white]' : ''}`}
        onClick={() => switchLanguage('uk')}
      >
        UK
      </CustomButton>
    </div>
  );
};

export default LanguageSwitcher;
