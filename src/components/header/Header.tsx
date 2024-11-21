import React from 'react';
import Menu from './ui/Menu';
import LanguageSwitcher from './ui/LanguageSwitcher';
import HeaderLogo from './ui/HeaderLogo';
import ThemeToggleButton from './ui/ThemeToggleButton';

const Header: React.FC = () => {
  return (
    <header className="relative z-20">
      <div className="hidden sm:flex sm:justify-between sm:items-center sm:flex-wrap sm:p-3 sm:bg-inherit sm:absolute sm:top-0 sm:w-full">
        <HeaderLogo />
        <Menu />
        <div className="flex gap-7 items-center">
          <LanguageSwitcher />
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
