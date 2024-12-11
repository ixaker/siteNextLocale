import * as Common from '@/context/commonImports';
import { withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';

const Page: React.FC<Common.PageProps> = ({ translations, lang, supportedLanguages }) => {
  const translationsPage = translations.zvaryuvannyaMetaluPage;
  const theme = Common.useTheme();
  const [fullUrl, setFullUrl] = Common.useState('');
  Common.useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, [fullUrl]);

  const componentProps: Common.ServicesComponentProps = { translations, lang, supportedLanguages, translationsPage, fullUrl };
  const currentTheme = theme.palette.mode === 'dark' ? Common.darkTheme : Common.lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  return (
    <section style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <Common.DynamicHead {...componentProps} />
      <Common.InformationBlock {...componentProps} />
      <Common.InfoCardList {...componentProps} />
      <Common.Paragraph style="mt-10 px-4" alignment="center" text={translationsPage.callToAction} />
      <Common.CalculationSection translations={translations} lang={lang} />
    </section>
  );
};

export const getStaticPaths: Common.GetStaticPaths = withStaticPaths;
export const getStaticProps: Common.GetStaticProps = withStaticProps;

export default Page;
