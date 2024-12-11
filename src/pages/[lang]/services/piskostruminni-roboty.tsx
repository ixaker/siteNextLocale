import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps, ServicesComponentProps } from '../../../context/withStaticPathsAndProps';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import InformationBlock from '@/components/ui/information-block/InformationBlock';
import InfoCard from '@/components/ui/info-card/InfoCard';
import Paragraph from '@/components/ui/typography/Paragraph';

const Page: React.FC<PageProps> = ({ translations, lang, supportedLanguages }) => {
  const theme = useTheme();
  const [fullUrl, setFullUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, [fullUrl]);

  const translationsPage = translations.piskostruminniRoboty;
  const cardList = translationsPage.infoCard;
  const componentProps: ServicesComponentProps = { translations, lang, supportedLanguages, translationsPage, fullUrl };
  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  return (
    <section style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead {...componentProps} />
      <InformationBlock {...componentProps} />

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
        <Paragraph alignment="center" text={translationsPage.callToAction} />
      </div>

      <CalculationSection translations={translations} lang={lang} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
