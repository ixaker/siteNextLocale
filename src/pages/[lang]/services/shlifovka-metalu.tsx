import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import CapitalBlock from '@/components/ui/capital-block/CapitalBlock';
import langUk from '../../../../locales/uk.json';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import FeatureBlock from '@/components/ui/feature-block/FeatureBlock';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import ListBenefits from '@/components/ui/list-benefits/ListBenefits';
import ServiceBlock from '@/components/ui/service-block/ServiceBlock';
import Paragraph from '@/components/ui/typography/Paragraph';

const Page: React.FC<PageProps> = ({ translations }) => {
  const translationsPage = translations?.shlifovkaMetaluPage || langUk.shlifovkaMetaluPage;
  const theme = useTheme();
  const listPeculiarities = translationsPage.listPeculiarities;
  const orderBenefits = translations.orderBenefits.listOrderBenefits;
  const listServices = translationsPage.listServices;

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;
  return (
    <section style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <BackCover>
        <CapitalBlock
          title={translationsPage.title}
          description={translationsPage.description}
          srcImg="/assets/shlifovka-metalu.jpg"
          txtButton={translations.btnSend}
        />
      </BackCover>
      <ServiceBlock
        btnText={translations.btnSend}
        heading={translationsPage.servicesTitle}
        imgSrc="/assets/shlifovka-metalu2.png"
        list={listServices}
      />
      <div className="px-4">
        <ListBenefits heading={translations.orderBenefits.orderBenefitsTitle} orderBenefits={orderBenefits} />
        <FeatureBlock listPeculiarities={listPeculiarities} title={translationsPage.peculiaritiesTitle} />
      </div>
      <div className="px-4 pt-[30px]">
        <Paragraph text={translationsPage.question} alignment="center" />
        <Paragraph text={translationsPage.answer} alignment="center" />
      </div>
      <CalculationSection textBtn={translations.btnSend} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
