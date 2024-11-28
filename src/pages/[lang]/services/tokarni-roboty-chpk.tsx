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

const Page: React.FC<PageProps> = ({ translations }) => {
  const translationsPage = translations?.tokarniRobotyChpkPage || langUk.tokarniRobotyChpkPage;
  const theme = useTheme();
  const orderBenefits = translations.orderBenefits.listOrderBenefits;

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;
  const listPeculiarities = translationsPage.listPeculiarities;
  const listServices = translationsPage.listServices;

  return (
    <section style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <BackCover>
        <CapitalBlock
          title={translationsPage.title}
          description={translationsPage.description}
          srcImg="/assets/tokarni-roboty-chpk.jpg"
          txtButton={translations.btnSend}
        />
      </BackCover>
      <ServiceBlock
        btnText={translations.btnSend}
        heading={translationsPage.servicesTitle}
        imgSrc="/assets/tokarni-roboty-chpk2.jpg"
        list={listServices}
      />
      <ListBenefits heading={translations.orderBenefits.orderBenefitsTitle} orderBenefits={orderBenefits} />
      <div className="px-4">
        <FeatureBlock listPeculiarities={listPeculiarities} title={translationsPage.peculiaritiesTitle} />
      </div>
      <CalculationSection textBtn={translations.btnSend} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
