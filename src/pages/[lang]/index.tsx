import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps, HomeComponentProps } from '../../context/withStaticPathsAndProps';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import Card from '@/components/ui/card/Card';
import langUk from '../../../locales/uk.json';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';
import Image from 'next/image';
import Paragraph from '@/components/ui/typography/Paragraph';
import Heading from '@/components/ui/typography/Heading';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import ButtonSubmitDrawing from '@/components/ui/button/ButtonSubmitDrawing';
import BackCover from '@/components/ui/back-cover/BackCover';
import NavigationMap from '@/components/ui/navigation-map/NavigationMap';

const Home: React.FC<PageProps> = ({ translations, lang, supportedLanguages }) => {
  const [fullUrl, setFullUrl] = useState('');
  const theme = useTheme();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, [fullUrl]);

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;
  const translationsPage = translations.homePage;
  const cardData = translations?.cardData || langUk.cardData;
  const translationsMenuService = translations.menu[0]?.subMenu;

  const componentProps: HomeComponentProps = { translations, lang, supportedLanguages, translationsPage, fullUrl };

  return (
    <div style={{ backgroundColor: bgColor }}>
      <DynamicHead {...componentProps} />
      <BackCover>
        <div className="flex min-h-[inherit] pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px] pb-6 relative z-10">
          <NavigationMap lang={lang} translationsMenuService={translationsMenuService || []} />
          <div className="px-4 text-white w-full flex items-start justify-center">
            <div className="flex flex-col justify-center items-center lg:items-start">
              <div>
                <h1 className="text-[20px] text-center w-full sm:text-start sm:text-[40px] md:text-[55px] lg:text-[48px] xl:text-[70px] font-semibold">
                  {translationsPage.topTitle}
                  <br />
                  {translationsPage.bottomTitle}
                </h1>
              </div>
              <Paragraph text={translationsPage.description} style="text-center sm:text-start pt-5" />
              <ButtonSubmitDrawing lang={lang} translations={translations} className="mt-10" />
            </div>
          </div>
        </div>
      </BackCover>
      <section style={{ color: secondaryColor }} className="pl-4 pr-4 pt-[30px] md:pt-[70px]">
        <ul className="flex flex-wrap justify-center gap-[10px] lg: xl:justify-between">
          {cardData.map((item, index) => (
            <li key={index}>
              <Card href={`/${lang}/${item.href}`} srcImg={item.img} title={item.title} />
            </li>
          ))}
        </ul>
        <div className="mt-[50px] pb-[80px]">
          <div className="mt-[20px] flex flex-col gap-5 lg:flex-row xl:justify-between md:mt-[50px]">
            <div className="flex flex-col justify-center gap-5 lg:w-[80%] xl:w-[70%] 2xl:w-[50%]">
              <Heading level="h2" text={translationsPage.h2} alignment="center" />
              <Paragraph text={translationsPage.descriptionCompany} alignment="center" />
            </div>
            <div>
              {/* ?v=${new Date().getTime()} */}
              <Image className="w-full rounded-2xl shadow-2xl" src={`/assets/work.webp`} alt="Laptop" width={100} height={100} />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[50px]">
        <CalculationSection lang={lang} translations={translations} />
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
