import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';
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

const Home: React.FC<PageProps> = ({ translations, lang }) => {
  const [fullUrl, setFullUrl] = useState('');
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;
  const translationsPage = translations?.homePage || langUk.homePage;
  const cardData = translations?.cardData || langUk.cardData;

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
      <div className="bg-bgImg ax-h-[calc(100vh-120px)] bg-no-repeat bg-cover shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)]">
        <div className="pl-4 pr-4 flex flex-col justify-center items-center h-[calc(100vh-120px)] md:items-start">
          <div>
            <h1 className="text-[20px] text-center w-full sm:text-start sm:text-[40px] md:text-[55px] lg:text-[70px] font-semibold">
              {translationsPage.topTitle}
              <br />
              {translationsPage.bottomTitle}
            </h1>
          </div>
          <Paragraph text={translationsPage.description} style="text-center sm:text-start pt-5" />
          <ButtonSubmitDrawing text={translationsPage.btnSend} className="mt-10" />
        </div>
      </div>
      <section style={{ color: secondaryColor }} className="pl-4 pr-4 pt-[30px] md:pt-[70px]">
        <ul className="flex flex-wrap justify-center gap-[10px] lg: xl:justify-between">
          {cardData.map((item, index) => (
            <li key={index}>
              <Card href={`/${lang}/${item.href}`} srcImg={item.img} title={item.title} />
            </li>
          ))}
        </ul>
        <div className="mt-[50px] pb-[80px]">
          <Paragraph text={translationsPage.aboutCompany} alignment="center" />
          <Heading level="h2" text={translationsPage.h2} alignment="center" />
          <div className="mt-[20px] flex flex-col gap-5 lg:flex-row xl:justify-between md:mt-[50px]">
            <div className="flex flex-col justify-around gap-5 lg:w-[80%] xl:w-[70%] 2xl:w-[50%]">
              <Heading level="h2" text={translationsPage.h3} alignment="center" />
              <Paragraph text={translationsPage.descriptionCompany} alignment="center" />
            </div>
            <div>
              <Image
                className="w-full rounded-lg shadow-2xl"
                src="/assets/work.jpg"
                alt="Laptop"
                width={550}
                height={332}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[50px]">
        <CalculationSection textBtn={translations.btnSend} />
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
