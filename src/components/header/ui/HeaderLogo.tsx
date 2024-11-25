import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderLogo = () => {
  const router = useRouter();
  const { asPath } = router;
  const currentLang = asPath.split('/')[1];
  return (
    <Link href={`/${currentLang}`}>
      <img
        width="120px"
        height="40px"
        src="/logo.png"
        className="w-[120px] h-auto sm:w-[130px] md:w-[160px] lg:w-[200px]"
        alt="bg"
      ></img>
    </Link>
  );
};

export default HeaderLogo;
