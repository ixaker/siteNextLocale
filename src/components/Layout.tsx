import React from 'react';
import { useTheme } from '@mui/material/styles';
import Header from './header/Header';
import Footer from './footer/Footer';
import { darkTheme, lightTheme } from '@/theme';
import CommunicationButton from './ui/button/CommunicationButton';
import { PageProps } from '@/context/withStaticPathsAndProps';

const Layout: React.FC<PageProps> = ({ children, ...restProps }) => {
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const primaryColor = currentTheme.palette.primary.main;
  const secondaryColor = currentTheme.palette.secondary.main;

  return (
    <>
      <Header {...restProps}/>
      <main>
        <div className=" text-white">{children}</div>
        <div>
          <CommunicationButton primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </div>
      </main>
      <Footer {...restProps}/>
    </>
  );
};

export default Layout;
