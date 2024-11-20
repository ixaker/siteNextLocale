import React from 'react';
import Menu from './Menu';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
    return (
        <header>
            <LanguageSwitcher />
            <Menu />
        </header>
    );
};

export default Header;
