import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import CapitalBlock from '@/components/ui/capital-block/CapitalBlock';
import { useTheme } from '@mui/material';
import langUk from '../../../../locales/uk.json';
import { darkTheme, lightTheme } from '@/theme';
import ServiceBlock from '@/components/ui/service-block/ServiceBlock';
import ListBenefits from '@/components/ui/list-benefits/ListBenefits';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';

const Page: React.FC<PageProps> = ({ translations }) => {
  const translationsPage = translations?.zvaryuvannyaMetaluPage || langUk.zvaryuvannyaMetaluPage;
  const theme = useTheme();
  const orderBenefits = translations.orderBenefits.listOrderBenefits;

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const listServices = translationsPage.listServices;
  const secondaryColor = currentTheme.palette.secondary.main;
  return (
    <div style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <BackCover>
        <CapitalBlock
          title={translationsPage.title}
          description={translationsPage.description}
          srcImg="/assets/zvaryuvannya-metalu.webp"
          txtButton={translations.btnSend}
        />
      </BackCover>
      <ListBenefits heading={translations.orderBenefits.orderBenefitsTitle} orderBenefits={orderBenefits} />
      <ServiceBlock
        btnText={translations.btnSend}
        heading={translationsPage.servicesTitle}
        imgSrc="/assets/zvaryuvannya-metalu2.jpg"
        list={listServices}
      />
      <CalculationSection textBtn={translations.btnSend} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
