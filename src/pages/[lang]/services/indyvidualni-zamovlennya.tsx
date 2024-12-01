import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import CapitalBlock from '@/components/ui/capital-block/CapitalBlock';
import { useTheme } from '@mui/material';
import langUk from '../../../../locales/uk.json';
import { darkTheme, lightTheme } from '@/theme';
import FeatureBlock from '@/components/ui/feature-block/FeatureBlock';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import ListBenefits from '@/components/ui/list-benefits/ListBenefits';
import ServiceBlock from '@/components/ui/service-block/ServiceBlock';
import Paragraph from '@/components/ui/typography/Paragraph';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.indyvidualniZamovlennya || langUk.indyvidualniZamovlennya;
  const theme = useTheme();
  const listPeculiarities = translationsPage.listPeculiarities;
  const orderBenefits = translations.orderBenefits.listOrderBenefits;

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const listServices = translationsPage.listServices;
  const secondaryColor = currentTheme.palette.secondary.main;

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
        imgOg="/assets/indyvidualni-zamovlennya.jpg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover>
        <CapitalBlock
          title={translationsPage.title}
          description={translationsPage.description}
          srcImg="/assets/indyvidualni-zamovlennya.jpg"
          txtButton={translations.btnSend}
          translations={translations}
          lang={lang}
        />
      </BackCover>
      <ServiceBlock
        btnText={translations.btnSend}
        heading={translationsPage.servicesTitle}
        imgSrc="/assets/indyvidualni-zamovlennya22.jpg"
        list={listServices}
        lang={lang}
        translations={translations}
      />
      <ListBenefits heading={translations.orderBenefits.orderBenefitsTitle} orderBenefits={orderBenefits} />
      <div className="px-4">
        <FeatureBlock listPeculiarities={listPeculiarities} title={translationsPage.peculiaritiesTitle} />
      </div>
      <div className="px-4 pt-[30px]">
        <Paragraph text={translationsPage.question} alignment="center" />
        <Paragraph text={translationsPage.answer} alignment="center" />
      </div>
      <CalculationSection lang={lang} translations={translations} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
