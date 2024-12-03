import { Link } from '@mui/material';
import { NavigationMenu } from '../../../../locales/types';

interface NavigationMapProps {
  translationsMenuService: NavigationMenu[];
  lang: string;
}

const NavigationMap: React.FC<NavigationMapProps> = ({ lang, translationsMenuService = [] }) => {
  return (
    <ul className="bg-[rgba(26,25,25,0.56)] px-4 pb-4 pt-2 h-fit hidden lg:block">
      {translationsMenuService.map((item, index) => (
        <li className="mt-2" key={index}>
          <Link
            className="text-white font-bold hover:text-activeColor transition-all duration-300 ease-in-out text-[20px] text-nowrap no-underline"
            href={`/${lang}/${item.href}`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMap;
