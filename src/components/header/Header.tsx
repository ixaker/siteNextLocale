import React from 'react';
import Menu from './ui/Menu';
import LanguageSwitcher from './ui/LanguageSwitcher';
import HeaderLogo from './ui/HeaderLogo';

const Header: React.FC = () => {
  return (
    <header>
      <div className="hidden sm:flex sm:justify-between sm:items-center sm:flex-wrap sm:p-3 sm:bg-inherit sm:absolute sm:top-0 sm:w-full">
        <HeaderLogo />
        <Menu />
        <LanguageSwitcher />
      </div>
      <div className="absolute w-full flex justify-between p-3 sm:hidden">
        <div>
          <div>
            <HeaderLogo />
          </div>
          <div className="flex justify-center">
            <Menu />
          </div>
        </div>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
