import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="pt-20 text-[white]">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
