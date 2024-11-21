import React from 'react';
import Menu from './ui/Menu';
import LanguageSwitcher from './ui/LanguageSwitcher';
import HeaderLogo from './ui/HeaderLogo';
import ThemeToggleButton from './ui/ThemeToggleButton';

const Header: React.FC = () => {
  return (
    <header className="relative z-20">
      {/* Верхняя панель */}
      <div className="flex justify-between items-center flex-wrap p-3 bg-inherit absolute top-0 w-full">
        {/* Логотип */}
        <HeaderLogo />

        {/* Меню: скрывается на маленьких экранах */}
        <div className="hidden sm:block">
          <Menu />
        </div>

        {/* Переключатели */}
        <div className="flex gap-7 items-center">
          <LanguageSwitcher />
          <ThemeToggleButton />
        </div>

        <div className="flex justify-center items-center w-full mt-4 sm:hidden ">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
