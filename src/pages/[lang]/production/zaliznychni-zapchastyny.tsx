import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps, ProductComponentProps } from '../../../context/withStaticPathsAndProps';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import ServiceBlock from '@/components/ui/service-block/ServiceBlock';
import ListBenefits from '@/components/ui/list-benefits/ListBenefits';
import Paragraph from '@/components/ui/typography/Paragraph';
import FeatureBlock from '@/components/ui/feature-block/FeatureBlock';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import InformationBlock from '@/components/ui/information-block/InformationBlock';

const Page: React.FC<PageProps> = ({ translations, lang, supportedLanguages }) => {
  const translationsPage = translations.zaliznychniZapchastynyPage;
  const theme = useTheme();
  const [fullUrl, setFullUrl] = useState('');
  useEffect(() => {
    setFullUrl(window.location.href);
  }, [fullUrl]);

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;
  const componentProps: ProductComponentProps = { translations, lang, supportedLanguages, translationsPage, fullUrl };
  const listServices = translationsPage.listServices;
  const orderBenefits = translations.orderBenefits.listOrderBenefits;
  const listPeculiarities = translationsPage.listPeculiarities;

  return (
    <section style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead {...componentProps} />
      <InformationBlock {...componentProps} />

      <ServiceBlock
        translations={translations}
        lang={lang}
        btnText={translations.btnSend}
        heading={translationsPage.servicesTitle}
        imgSrc="/assets/zaliznychni-zapchastyny2.webp"
        list={listServices}
      />

      <ListBenefits heading={translations.orderBenefits.orderBenefitsTitle} orderBenefits={orderBenefits} />
      <div className="px-4 pt-5">
        <FeatureBlock listPeculiarities={listPeculiarities} title={translationsPage.peculiaritiesTitle} />
      </div>
      <div className="px-4 pt-[30px]">
        <Paragraph text={translationsPage.question} alignment="center" />
        <Paragraph text={translationsPage.answer} alignment="center" />
      </div>
      <CalculationSection translations={translations} lang={lang} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
