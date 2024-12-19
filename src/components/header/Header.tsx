import React from 'react';
import MenuComponent from './ui/Menu';
import LanguageSwitcher from './ui/LanguageSwitcher';
import HeaderLogo from './ui/HeaderLogo';
import ThemeToggleButton from './ui/ThemeToggleButton';
import { PageProps } from '@/context/withStaticPathsAndProps';

const Header: React.FC<PageProps> = (restProps) => {
  return (
    <header className="relative z-20">
      <div className="flex justify-between items-center flex-wrap p-3 bg-inherit w-full absolute">
        <HeaderLogo {...restProps} />
        <div className="flex gap-10 items-center">
          <div className="flex gap-7 items-center">
            <LanguageSwitcher supportLangs={restProps.supportedLanguages} currentLang={restProps.lang} />
            <ThemeToggleButton />
          </div>
        </div>

        <div className="flex justify-end items-center w-full mt-[30px] mr-[10px] ">
          <MenuComponent
            translations={restProps.translations}
            lang={restProps.lang}
            supportedLanguages={restProps.supportedLanguages}
            defaultLanguage={restProps.defaultLanguage}
            version={restProps.version}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
