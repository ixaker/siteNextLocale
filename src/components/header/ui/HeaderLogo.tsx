import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Импорт компонента Image

const HeaderLogo = () => {
  const router = useRouter();
  const { asPath } = router;
  const currentLang = asPath.split('/')[1];

  return (
    <Link href={`/${currentLang}`}>
      <Image
        src="/logo.png"
        alt="Логотип сайта"
        width={120} // Указываем точную ширину
        height={40} // Указываем точную высоту
        className="w-[120px] h-auto sm:w-[130px] md:w-[160px] lg:w-[200px]"
        priority // Указываем, что это изображение важно для загрузки
      />
    </Link>
  );
};

export default HeaderLogo;
