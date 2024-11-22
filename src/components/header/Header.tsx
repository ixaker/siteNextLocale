import React from 'react';
import Menu from './ui/Menu';
import LanguageSwitcher from './ui/LanguageSwitcher';
import HeaderLogo from './ui/HeaderLogo';
import ThemeToggleButton from './ui/ThemeToggleButton';

interface HeaderProps {
  translations: { [key: string]: string };
  lang: string;
}

const Header: React.FC<HeaderProps> = ({ translations, lang }) => {
  return (
    <header className="relative z-20">
      <div className="flex justify-between items-center flex-wrap p-3 bg-inherit absolute top-0 w-full">
        <HeaderLogo />
        <div className="hidden sm:block">
          <Menu translations={translations} lang={lang} />
        </div>
        <div className="flex gap-7 items-center">
          <LanguageSwitcher />
          <ThemeToggleButton />
        </div>

        <div className="flex justify-center items-center w-full mt-4 sm:hidden ">
          <Menu translations={translations} lang={lang} />
        </div>
      </div>
    </header>
  );
};

export default Header;
