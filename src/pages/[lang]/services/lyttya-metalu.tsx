import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import CapitalBlock from '@/components/ui/capital-block/CapitalBlock';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import langUk from '../../../../locales/uk.json';
import ServiceBlock from '@/components/ui/service-block/ServiceBlock';
import ListBenefits from '@/components/ui/list-benefits/ListBenefits';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import FeatureBlock from '@/components/ui/feature-block/FeatureBlock';
import DynamicHead from '@/components/shared/DynamicHead';
import Paragraph from '@/components/ui/typography/Paragraph';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.lyttyaMetaluPage || langUk.lyttyaMetaluPage;
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;
  const listServices = translationsPage.listServices;
  const orderBenefits = translations.orderBenefits.listOrderBenefits;
  const listPeculiarities = translationsPage.listPeculiarities;
  const listServicesContinuation = translationsPage.listServicesContinuation;

  const [fullUrl, setFullUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, [fullUrl]);
  return (
    <div style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead
        title={translationsPage.title}
        description={translationsPage.description}
        keywords={translationsPage.title}
        canonical={fullUrl}
        imgOg="/assets/metal-casting.jpg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover>
        <CapitalBlock
          translations={translations}
          lang={lang}
          title={translationsPage.title}
          description={translationsPage.description}
          srcImg="/assets/metal-casting.jpg"
          txtButton={translations.btnSend}
        />
      </BackCover>
      <ServiceBlock
        translations={translations}
        lang={lang}
        btnText={translations.btnSend}
        heading={translationsPage.servicesTitle}
        imgSrc="/assets/lyttya-metalu2.jpg"
        list={listServices}
      />
      <div className="px-4">
        <FeatureBlock listPeculiarities={listServicesContinuation} />
      </div>
      <ListBenefits heading={translations.orderBenefits.orderBenefitsTitle} orderBenefits={orderBenefits} />
      <div className="px-4">
        <FeatureBlock listPeculiarities={listPeculiarities} title={translationsPage.peculiaritiesTitle} />
      </div>
      <div className="px-4 pt-[30px]">
        <Paragraph text={translationsPage.callToActionTop} alignment="center" />
        <Paragraph text={translationsPage.callToActionBottom} alignment="center" />
      </div>
      <CalculationSection translations={translations} lang={lang} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
