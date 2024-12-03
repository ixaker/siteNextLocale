import Link from 'next/link';
import { NavigationMenu } from '../../../../locales/types';

interface NavigationMapProps {
  translationsMenuService: NavigationMenu[];
  lang: string;
}

// position: relative;
//     top: -152px;
//     left: -20px;

const NavigationMap: React.FC<NavigationMapProps> = ({ lang, translationsMenuService = [] }) => {
  return (
    <ul className="!bg-[rgba(26,25,25,0.56)] px-4 pb-4 pt-2 h-fit hidden lg:block relative top-[revert-layer] left-[0%] bottom-[110px] z-[99]">
      {translationsMenuService.map((item, index) => (
        <li className="mt-2" key={index}>
          <Link
            className=" text-white font-bold hover:text-activeColor transition-all duration-300 ease-in-out text-[15px] text-nowrap no-underline"
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
