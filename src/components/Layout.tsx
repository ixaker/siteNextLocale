import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
  translations: { [key: string]: string };
  lang: string;
}

const Layout: React.FC<LayoutProps> = ({ children, translations, lang }) => {
  return (
    <>
      <Header translations={translations} lang={lang} />
      <main className="bg-bgImg h-screen w-screen bg-no-repeat bg-cover absolute top-0 pt-40">
        <div className="pt-20 text-[white]">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
