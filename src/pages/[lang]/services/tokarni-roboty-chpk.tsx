import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import CapitalBlock from '@/components/ui/capital-block/CapitalBlock';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import langUk from '../../../../locales/uk.json';
import FeatureBlock from '@/components/ui/feature-block/FeatureBlock';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import ListBenefits from '@/components/ui/list-benefits/ListBenefits';
import ServiceBlock from '@/components/ui/service-block/ServiceBlock';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import Paragraph from '@/components/ui/typography/Paragraph';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.tokarniRobotyChpkPage || langUk.tokarniRobotyChpkPage;
  const theme = useTheme();
  const orderBenefits = translations.orderBenefits.listOrderBenefits;

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;
  const listPeculiarities = translationsPage.listPeculiarities;
  const listServices = translationsPage.listServices;

  const [fullUrl, setFullUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, [fullUrl]);

  return (
    <section style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead
        title={translationsPage.title}
        description={translationsPage.description}
        keywords={translationsPage.title}
        canonical={fullUrl}
        imgOg="/assets/tokarni-roboty-chpk.jpg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover>
        <CapitalBlock
          lang={lang}
          translations={translations}
          title={translationsPage.title}
          description={translationsPage.description}
          srcImg="/assets/tokarni-roboty-chpk2.jpg"
          txtButton={translations.btnSend}
        />
      </BackCover>
      <ServiceBlock
        lang={lang}
        translations={translations}
        btnText={translations.btnSend}
        heading={translationsPage.servicesTitle}
        imgSrc="/assets/tokarni-roboty-chpk.png"
        list={listServices}
      />
      <ListBenefits heading={translations.orderBenefits.orderBenefitsTitle} orderBenefits={orderBenefits} />
      <div className="px-4">
        <FeatureBlock listPeculiarities={listPeculiarities} title={translationsPage.peculiaritiesTitle} />
      </div>
      <div className="px-4 pt-[30px]">
        <Paragraph text={translationsPage.callToActionTop} alignment="center" />
        <Paragraph text={translationsPage.callToActionBottom} alignment="center" />
      </div>
      <CalculationSection translations={translations} lang={lang} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
