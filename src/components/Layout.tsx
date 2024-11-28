import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import CommunicationButton from './ui/button/CommunicationButton';
import { PageProps } from '@/context/withStaticPathsAndProps';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Layout: React.FC<PageProps> = ({ children, ...restProps }) => {
  return (
    <>
      <Header {...restProps} />
      <main>
        <div className=" text-white">{children}</div>
        <div>
          <CommunicationButton
            email={
              <EmailIcon className="hover:!text-activeColor  transition-all duration-300 ease-in-out size-8 md:size-10 lg:size-12" />
            }
            phone={
              <PhoneIcon className="hover:!text-activeColor  transition-all duration-300 ease-in-out size-8 md:size-10 lg:size-12" />
            }
          />
        </div>
      </main>
      <Footer {...restProps} />
    </>
  );
};

export default Layout;
