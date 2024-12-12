import * as Common from '@/context/commonImports';
import { withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';

const Page: React.FC<Common.PageProps> = ({ ...restProps }) => {
  const translationsPage = restProps.translations.porizkaNaVerstati;
  const componentProps: Common.ServicesComponentProps = { ...restProps, translationsPage };

  return (
    <>
      <Common.DynamicHead {...componentProps} />
      <Common.InformationBlock {...componentProps} />
      <Common.InfoCardList {...componentProps} />
      <Common.Paragraph style="mt-10 px-4" alignment="center" text={translationsPage.callToAction} />
      <Common.CalculationSection {...componentProps} />
    </>
  );
};

export const getStaticPaths: Common.GetStaticPaths = withStaticPaths;
export const getStaticProps: Common.GetStaticProps = withStaticProps;

export default Page;
