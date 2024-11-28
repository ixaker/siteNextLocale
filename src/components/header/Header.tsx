import React from 'react';
import Menu from './ui/Menu';
import LanguageSwitcher from './ui/LanguageSwitcher';
import HeaderLogo from './ui/HeaderLogo';
import ThemeToggleButton from './ui/ThemeToggleButton';
import { PageProps } from '@/context/withStaticPathsAndProps';

const Header: React.FC<PageProps> = ({ translations, lang, supportedLanguages, defaultLanguage }) => {
  return (
    <header className="relative z-20">
      <div className="flex justify-between items-center flex-wrap p-3 bg-inherit absolute top-0 w-full">
        <HeaderLogo />
        <div className="flex gap-10 items-center">
          {/* <div className="hidden md:block">
            <Menu
              translations={translations}
              lang={lang}
              supportedLanguages={supportedLanguages}
              defaultLanguage={defaultLanguage}
            />
          </div> */}
          <div className="flex gap-7 items-center">
            <LanguageSwitcher supportedLanguages={supportedLanguages} currentLang={lang} />
            <ThemeToggleButton />
          </div>
        </div>

        <div className="flex justify-end items-center w-full mt-[30px] mr-[10px] ">
          <Menu
            translations={translations}
            lang={lang}
            supportedLanguages={supportedLanguages}
            defaultLanguage={defaultLanguage}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
