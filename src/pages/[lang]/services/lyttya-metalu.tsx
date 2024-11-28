import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import CustomContainer from '@/components/ui/container/CustomContainer';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import langUk from '../../../../locales/uk.json';
import ServiceBlock from '@/components/ui/service-block/ServiceBlock';
import ListBenefits from '@/components/ui/list-benefits/ListBenefits';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';

const Page: React.FC<PageProps> = ({ translations }) => {
  const translationsPage = translations?.lyttyaMetalu || langUk.lyttyaMetaluPage;
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const listServices = translationsPage.listServices;
  const orderBenefits = translations.orderBenefits.listOrderBenefits;
  return (
    <div style={{ backgroundColor: bgColor }}>
      <BackCover>
        <CustomContainer
          title={translationsPage.title}
          description={translationsPage.description}
          srcImg="/assets/metal-casting.jpg"
          txtButton={translations.btnSend}
        />
      </BackCover>
      <ServiceBlock
        btnText={translations.btnSend}
        heading={translationsPage.servicesTitle}
        imgSrc="/assets/lyttya-metalu2.jpg"
        list={listServices}
      />
      <ListBenefits heading={translations.orderBenefits.orderBenefitsTitle} orderBenefits={orderBenefits} />
      <CalculationSection textBtn={translations.btnSend} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
