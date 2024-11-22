import React from 'react';
import { useTheme } from '@mui/material/styles'; // Импортируем useTheme из Material-UI
import Header from './header/Header';
import Footer from './footer/Footer';
import CustomButton from './ui/button/CustomButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { darkTheme, lightTheme } from '@/theme';

interface LayoutProps {
  children: React.ReactNode;
  translations: { [key: string]: string };
  lang: string;
}

const Layout: React.FC<LayoutProps> = ({ children, translations, lang }) => {
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const primaryColor = currentTheme.palette.primary.main;
  const secondaryColor = currentTheme.palette.secondary.main;

  return (
    <>
      <Header translations={translations} lang={lang} />
      <main className="bg-bgImg h-screen w-screen bg-no-repeat bg-cover absolute top-0 pt-40">
        <div className="pt-20 text-[white]">{children}</div>
        <div className="absolute right-5 bottom-7 flex flex-col gap-2 items-center">
          <CustomButton
            style={{
              background: primaryColor,
            }}
            variant="communication-button"
          >
            <EmailIcon style={{ color: secondaryColor }} sx={{ fontSize: '60px' }} />
          </CustomButton>
          <CustomButton
            style={{
              background: primaryColor,
            }}
            variant="communication-button"
          >
            <PhoneIcon style={{ color: secondaryColor }} sx={{ fontSize: '60px' }} />
          </CustomButton>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
