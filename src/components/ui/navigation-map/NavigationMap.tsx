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

  const trackEvent = (label: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', `Переход на страницу: ${label}`, { event_category: 'Button', event_label: label });
    }
  };

  return (
    <ul className="hidden lg:flex flex-col justify-around">
      {translationsMenuService.map((item, index) => {
        const isActive = router.asPath === `/${lang}/${item.href}/`;

        return (
          <Link
            onClick={() => trackEvent(item.title)}
            href={`/${lang}/${item.href}`}
            key={index}
            className={`ease-in-out group w-fit pl-2 pr-6 py-2 rounded-r-[20px] ${isActive ? 'bg-activeColor' : 'bg-[rgba(255,255,255,0.12)] backdrop-blur-2xl'}`}
          >
            <span
              className={`text-white font-bold transition-all duration-300 ease-in-out text-[12px] text-nowrap flex items-center transform group-hover:translate-x-2 group-hover:text-[white] ${
                isActive ? 'text-highlightColor' : 'group-hover:text-activeColor'
              }`}
            >
              <ArrowForwardIosIcon className="text-[white] group-hover:text-[#c43c1e] transition-all duration-300 ease-in-out" />
              {item.title}
            </span>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavigationMap;
