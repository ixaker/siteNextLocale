import { PageProps } from '@/context/withStaticPathsAndProps';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';
import langUk from '../../../locales/uk.json';

const socialList = [
  {
    icon: '/icons/facebook.svg',
    name: 'facebook',
    href: 'https://www.facebook.com/profile.php?id=61568292527269',
  },
  {
    icon: '/icons/inst.svg',
    name: 'instagram',
    href: 'https://www.instagram.com/qpart.ua/profilecard/?igsh=MXdsa202NTVoMDQ4bA==',
  },
  {
    icon: '/icons/in.svg',
    name: 'linkedin',
    href: 'https://www.linkedin.com/company/105055423/admin/dashboard/',
  },
];

const Footer: React.FC<PageProps> = ({ translations }) => {
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const primaryColor = currentTheme.palette.primary.main;
  const secondaryColor = currentTheme.palette.secondary.main;

  const translationsPage = translations?.footer || langUk.menu;

  return (
    <footer
      className="border-t border-gray-700 shadow-md shadow-gray-900 pt-4"
      style={{ backgroundColor: secondaryColor }}
    >
      <nav>
        <div className="flex items-center justify-center text-[20px]">
          <span style={{ color: primaryColor }}>{translationsPage.join}</span>
        </div>
        <div className="flex justify-center gap-4 mt-[20px] pb-[50px]">
          {socialList.map((item, index) => (
            <a target="_blank" href={item.href}>
              <img className="w-[50px]" key={index} src={item.icon} alt={item.name} />
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
