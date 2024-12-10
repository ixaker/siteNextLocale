import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
const HeaderLogo = () => {
  const router = useRouter();
  const { asPath } = router;
  const currentLang = asPath.split('/')[1];

  return (
    <Link href={`/${currentLang}`}>
      <Image
        src="/logo.png"
        alt="Логотип сайта"
        width={120}
        height={40}
        className="w-[100px] h-auto md:w-[120px] lg:w-[150px] xl:w-[220px]"
        priority
      />
    </Link>
  );
};

export default HeaderLogo;
