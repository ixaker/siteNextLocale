import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import langUk from '../../../locales/uk.json';
import RoomIcon from '@mui/icons-material/Room';
import CustomButton from '@/components/ui/button/CustomButton';
import langUk from '../../../locales/uk.json';
import Image from 'next/image'; // Импортируем Image

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.contactPage || langUk.menu;

  const [fullUrl, setFullUrl] = useState('');
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;
  const primaryColor = currentTheme.palette.primary.main;

  const contactsData = [
    { title: translationsPage.address, description: translationsPage.descriptionAddress, icon: RoomIcon },
    { title: translationsPage.email, description: translationsPage.descriptionEmail, icon: EmailIcon },
    { title: translationsPage.phone, description: translationsPage.descriptionPhone, icon: PhoneIcon },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, []);

  return (
    <>
      <DynamicHead
        title={translationsPage.meta.title}
        description={translationsPage.meta.description}
        keywords={translationsPage.meta.keywords}
        canonical={fullUrl}
        imgOg={translationsPage.meta.imgOg}
        lang={lang}
        localeOg={translations.locale}
      />
      <section className="bg-bgImg min-h-screen bg-no-repeat bg-cover shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)]">
        <div
          style={{ backgroundColor: secondaryColor, color: primaryColor }}
          className="absolute w-full top-[120px]"
        >
          <h1 className="text-center font-bold text-[23px]">{translationsPage.title}</h1>
          <div>
            {translationsPage.contactList.map((item, index) => (
              <div key={index}>
                <CustomButton style={{ backgroundColor: primaryColor }} variant="communication-button">
                  <Image
                    className="w-[60px] p-3"
                    src={item.icon}
                    alt={item.title}
                    width={60} // Указываем ширину
                    height={60} // Указываем высоту
                  />
                </CustomButton>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
