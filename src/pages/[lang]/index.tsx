import { GetStaticPaths, GetStaticProps } from 'next';
import CustomButton from '@/components/ui/button/CustomButton';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import Card from '@/components/ui/card/Card';
import langUk from '../../../locales/uk.json';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';

const Home: React.FC<PageProps> = ({ translations, lang }) => {
  const [fullUrl, setFullUrl] = useState('');
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const primaryColor = currentTheme.palette.primary.main;
  const secondaryColor = currentTheme.palette.secondary.main;
  const translationsPage = translations?.homePage || langUk.menu;
  const cardData = translations?.cardData || langUk.menu;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, []);

  return (
    <div style={{ backgroundColor: secondaryColor }}>
      <DynamicHead
        title={translationsPage.meta.title}
        description={translationsPage.meta.description}
        keywords={translationsPage.meta.keywords}
        canonical={fullUrl}
        imgOg={translationsPage.meta.imgOg}
        lang={lang}
        localeOg={translations.locale}
      />
      <div className="bg-bgImg min-h-screen bg-no-repeat bg-cover shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)]">
        <div className="pl-4 pr-4 flex flex-col justify-center items-center h-screen md:items-start">
          <div>
            <h1 className="text-[20px] text-center w-full sm:text-start sm:text-[40px] md:text-[55px] lg:text-[70px] font-semibold">
              {translationsPage.topTitle}
              <br />
              {translationsPage.bottomTitle}
            </h1>
          </div>
          <p className="text-center text-[12px] sm:text-start sm:text-[20px] text-[#f9f7dc] pt-5">
            {translationsPage.description}
          </p>
          <CustomButton variant="send-btn">{translationsPage.btnSend}</CustomButton>
        </div>
      </div>
      <section className="pl-4 pr-4 pt-[30px] md:pt-[70px]">
        <ul className="flex flex-wrap justify-center gap-[10px] lg: xl:justify-between">
          {cardData.map((item, index) => (
            <li key={index}>
              <Card href={`/${lang}/${item.href}`} srcImg={item.img} title={item.title} />
            </li>
          ))}
        </ul>
        <div className="mt-[50px] pb-[50px]">
          <p style={{ color: primaryColor }} className="text-center text-[25px]	font-thin	">
            {translationsPage.aboutCompany}
          </p>
          <h2 style={{ color: primaryColor }} className="text-center text-[60px] font-bold	">
            {translationsPage.h2}
          </h2>
          <div className="mt-[20px] flex justify-between flex-wrap md:flex-nowrap">
            <div className="w-[100%] flex flex-col justify-around">
              <h3 className="text-[33px] font-semibold" style={{ color: primaryColor }}>
                {translationsPage.h3}
              </h3>
              <p className="text-[28px] w-[90%] mt-10" style={{ color: primaryColor }}>
                {translationsPage.descriptionCompany}
              </p>
            </div>
            <div>
              <img
                src="https://help.apple.com/assets/66D88DE3E5F0552382017794/66D88DE8D6E7FDA43A0B3C1E/ru_RU/eb514f0bfdbef1ea2c58eeb6bc104469.png"
                alt="Laptop"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
