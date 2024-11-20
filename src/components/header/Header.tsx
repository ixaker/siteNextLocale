import React from 'react';
import Menu from './ui/Menu';
import LanguageSwitcher from './ui/LanguageSwitcher';
import HeaderLogo from './ui/HeaderLogo';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center flex-wrap p-3 bg-inherit absolute top-0 w-full">
      <HeaderLogo />
      <Menu />
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
