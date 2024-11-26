import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import CustomButton from '@/components/ui/button/CustomButton';
import langUk from '../../../locales/uk.json';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.contactPage || langUk.menu;

  const [fullUrl, setFullUrl] = useState('');
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const primaryColor = currentTheme.palette.primary.main;
  const secondaryColor = currentTheme.palette.secondary.main;

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
                  <img style={{ fill: 'red' }} className="w-[60px] p-3" src={item.icon} alt={item.title} />
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
