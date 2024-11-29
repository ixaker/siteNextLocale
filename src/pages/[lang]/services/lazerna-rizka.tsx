import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';
import BackCover from '@/components/ui/back-cover/BackCover';
import CapitalBlock from '@/components/ui/capital-block/CapitalBlock';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import Paragraph from '@/components/ui/typography/Paragraph';
import FeatureBlock from '@/components/ui/feature-block/FeatureBlock';
import ListBenefits from '@/components/ui/list-benefits/ListBenefits';
import ServiceBlock from '@/components/ui/service-block/ServiceBlock';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.lazernaRizkaPage || langUk.lazernaRizkaPage;
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  const orderBenefits = translations.orderBenefits.listOrderBenefits;
  const listPeculiarities = translationsPage.listPeculiarities;
  const listServices = translationsPage.listServices;

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
        imgOg="/assets/lazerna-rizka-01.jpg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover>
        <CapitalBlock
          title={translationsPage.title}
          description={translationsPage.description}
          srcImg="/assets/lazerna-rizka-01.jpg"
          txtButton={translations.btnSend}
        />
      </BackCover>

      <section className="mt-5">
        <ServiceBlock
          btnText={translations.btnSend}
          heading={translationsPage.servicesTitle}
          imgSrc="/assets/lazerna-rizka-02.webp"
          list={listServices}
        />
        <ListBenefits heading={translations.orderBenefits.orderBenefitsTitle} orderBenefits={orderBenefits} />
        <div className="px-4 pt-5">
          <Paragraph text={translationsPage.descriptionBenefits} alignment="center" />
          <FeatureBlock listPeculiarities={listPeculiarities} title={translationsPage.peculiaritiesTitle} />
        </div>
        <div className="px-4 pt-[30px]">
          <Paragraph text={translationsPage.descriptionDifferences} alignment="center" />
        </div>
        <CalculationSection textBtn={translations.btnSend} />
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
