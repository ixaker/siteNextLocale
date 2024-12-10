import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import langUk from '../../../../locales/uk.json';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import DynamicHead from '@/components/shared/DynamicHead';
import InformationBlock from '@/components/ui/information-block/InformationBlock';
import InfoCard from '@/components/ui/info-card/InfoCard';
import Paragraph from '@/components/ui/typography/Paragraph';

const Page: React.FC<PageProps> = ({ translations, lang, supportedLanguages }) => {
  const translationsPage = translations?.lyttyaMetaluPage || langUk.lyttyaMetaluPage;
  const cardList = translationsPage.infoCard;
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  const [fullUrl, setFullUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, [fullUrl]);
  return (
    <div style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead
        supportedLanguages={supportedLanguages}
        title={translationsPage.title}
        description={translationsPage.descriptionTop}
        keywords={translationsPage.title}
        canonical={fullUrl}
        imgOg="/assets/lyttya-metalu.jpeg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover bgImg="/assets/lyttya-metalu.jpeg">
        <InformationBlock
          title={translationsPage.title}
          descriptionTop={translationsPage.descriptionTop}
          descriptionBottom={translationsPage.descriptionBottom}
          translations={translations}
          srcImg="/assets/lyttya-metalu.jpeg"
          lang={lang}
        />
      </BackCover>

      <div className="sm:px-4 mt-6">
        {cardList.map((item, index) => (
          <div key={index}>
            <InfoCard
              aligntText={index % 2 === 0 ? 'end' : 'start'}
              direction={index % 2 === 0 ? 'row-reverse' : 'row'}
              srcImg={item.image}
              title={item.title}
              descriptionCard={!item.list || item.list.length === 0 ? item.description : undefined}
              list={item.list}
            />
          </div>
        ))}
      </div>

      <div className="px-4 mt-10">
        <Paragraph alignment="center" text={translationsPage.callToActionGeneral || ''} />
        <Paragraph alignment="center" text={translationsPage.callToAction} />
      </div>

      <CalculationSection translations={translations} lang={lang} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
