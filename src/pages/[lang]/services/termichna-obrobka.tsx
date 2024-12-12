import * as Common from '@/context/commonImports';
import { withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';

const Page: React.FC<Common.PageProps> = ({ translations, lang, supportedLanguages }) => {
  const translationsPage = translations.termichnaObrobkaPage;
  const [fullUrl, setFullUrl] = Common.useState('');
  Common.useEffect(() => {
    setFullUrl(window.location.href);
  }, [fullUrl]);

  const componentProps: Common.ServicesComponentProps = { translations, lang, supportedLanguages, translationsPage, fullUrl };

  return (
    <>
      <Common.DynamicHead {...componentProps} />
      <Common.InformationBlock {...componentProps} />
      <Common.InfoCardList {...componentProps} />
      <Common.Paragraph style="mt-10 px-4" alignment="center" text={translationsPage.callToAction} />
      <Common.CalculationSection translations={translations} lang={lang} />
    </>
  );
};

export const getStaticPaths: Common.GetStaticPaths = withStaticPaths;
export const getStaticProps: Common.GetStaticProps = withStaticProps;

export default Page;
