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
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;
  const translationsPage = translations?.homePage || langUk.menu;
  const cardData = translations?.cardData || langUk.menu;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, []);

  return (
    <div style={{ backgroundColor: bgColor }}>
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
          <CustomButton className="mt-10" variant="send-btn">
            {translationsPage.btnSend}
          </CustomButton>
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
        <div className="mt-[50px] pb-[80px]">
          <p
            style={{ color: secondaryColor }}
            className="text-center	font-thin text-[15px] md:text-[20px] lg:text-[25px] '2xl:text-[30px]"
          >
            {translationsPage.aboutCompany}
          </p>
          <h2
            style={{ color: secondaryColor }}
            className="text-center font-bold text-[25px] md:text-[40px] lg:text-[50px] 2xl:text-[55px]"
          >
            {translationsPage.h2}
          </h2>
          <div className="mt-[20px] flex flex-col gap-5 lg:flex-row xl:justify-between md:mt-[50px]">
            <div className="flex flex-col justify-around gap-5 lg:w-[80%] xl:w-[70%] 2xl:w-[50%]">
              <h3
                className="font-semibold text-[12px] text-center md:text-[22px] lg:text-[25px] 2xl:text-[30px]"
                style={{ color: secondaryColor }}
              >
                {translationsPage.h3}
              </h3>
              <p
                className="text-center text-[12px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]"
                style={{ color: secondaryColor }}
              >
                {translationsPage.descriptionCompany}
              </p>
            </div>
            <div>
              <img className="w-full rounded-lg shadow-2xl" src="/assets/work.JPG" alt="Laptop" />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[50px]">
        <div className="bg-bgImgHomeBottom min-h-[200px] bg-cover bg-center flex items-center justify-center">
          <CustomButton variant="send-btn">{translationsPage.btnSend}</CustomButton>
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
