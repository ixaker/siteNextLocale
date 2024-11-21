import React from 'react';
import Menu from './ui/Menu';
import LanguageSwitcher from './ui/LanguageSwitcher';
import HeaderLogo from './ui/HeaderLogo';
import CustomButton from '../ui/button/CustomButton';

const Header: React.FC = () => {
  return (
    <header className="relative z-20">
      <div className="hidden sm:flex sm:justify-between sm:items-center sm:flex-wrap sm:p-3 sm:bg-inherit sm:absolute sm:top-0 sm:w-full">
        <HeaderLogo />
        <Menu />
        <LanguageSwitcher />
      </div>
      <div className="absolute w-full flex justify-between items-center p-3 sm:hidden">
        <div>
          <div>
            <HeaderLogo />
          </div>
          <div className="absolute flex justify-center w-full">
            <Menu />
          </div>
        </div>
        <div>
          <div>
            <LanguageSwitcher />
            {/* <CustomButton
              onClick={toggleTheme}
              variant="button-themes"
              className="absolute top-7 right-[100px]"
            >
              {themeMode === 'light' ? <LightModeIcon /> : <ModeNightIcon />}
            </CustomButton> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
