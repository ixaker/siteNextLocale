import CardList from '@/components/ui/card-list/CardList';
import { withStaticProps, withStaticPaths } from '../../../context/withStaticPathsAndProps';
import * as Common from '@/context/commonImports';

const Page: React.FC<Common.PageProps> = (restProps) => {
  const translationsPage = restProps.translations.zaliznychniZapchastynyPage;
  const componentProps: Common.ProductComponentProps = { ...restProps, translationsPage };

  return (
    <>
      <Common.DynamicHead {...componentProps} />
      <Common.InformationBlock {...componentProps} />
      <Common.ServiceBlock {...componentProps} />
      <Common.ListBenefits {...componentProps} />
      {/* <Common.FeatureBlock {...componentProps} /> */}
      <CardList {...componentProps} />
      <Common.Paragraph style="px-4 pt-[30px]" text={translationsPage.question} alignment="center" />
      <Common.Paragraph style="px-4 pt-[30px]" text={translationsPage.answer} alignment="center" />
      <Common.CalculationSection {...componentProps} />
    </>
  );
};

export const getStaticPaths: Common.GetStaticPaths = withStaticPaths;
export const getStaticProps: Common.GetStaticProps = withStaticProps;

export default Page;
