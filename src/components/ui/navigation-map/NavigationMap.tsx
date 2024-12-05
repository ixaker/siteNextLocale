import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavigationMenu } from '../../../../locales/types';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface NavigationMapProps {
  translationsMenuService: NavigationMenu[];
  lang: string;
}

const NavigationMap: React.FC<NavigationMapProps> = ({ lang, translationsMenuService = [] }) => {
  const router = useRouter();

  console.log(router.asPath);

  return (
    <ul className="hidden lg:flex flex-col justify-around">
      {translationsMenuService.map((item, index) => {
        const isActive = router.asPath === `/${lang}/${item.href}/`;

        return (
          <li
            key={index}
            className={`ease-in-out w-fit pl-2 pr-6 py-2 rounded-r-[20px] ${
              isActive ? 'bg-activeColor' : '!bg-[rgba(26,25,25,0.56)]'
            }`}
          >
            <Link
              className={`text-white font-bold transition-all duration-300 ease-in-out text-[12px] text-nowrap flex items-center transform hover:translate-x-2 ${
                isActive ? 'text-highlightColor' : 'hover:text-activeColor'
              }`}
              href={`/${lang}/${item.href}`}
            >
              <ArrowForwardIosIcon />
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationMap;
