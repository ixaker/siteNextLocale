import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import langUk from '../../../../locales/uk.json';
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
  const translationsPage =
    translations?.zapchastynyDlyaSilhosptekhnikyPage || langUk.zapchastynyDlyaSilhosptekhnikyPage;
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  const listServices = translationsPage.listServices;
  const orderBenefits = translations.orderBenefits.listOrderBenefits;
  const listPeculiarities = translationsPage.listPeculiarities;

  const [fullUrl, setFullUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, [fullUrl]);

  return (
    <section style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead
        supportedLanguages={supportedLanguages}
        title={translationsPage.title}
        description={translationsPage.descriptionTop}
        keywords={translationsPage.title}
        canonical={fullUrl}
        imgOg="/assets/zapchastyny-dlya-silhosptekhniky.jpeg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover bgImg="/assets/zapchastyny-dlya-silhosptekhniky.jpeg">
        <InformationBlock
          title={translationsPage.title}
          descriptionTop={translationsPage.descriptionTop}
          descriptionBottom={translationsPage.descriptionBottom}
          translations={translations}
          srcImg="/assets/zapchastyny-dlya-silhosptekhniky.jpeg"
          lang={lang}
        />
      </BackCover>

      <ServiceBlock
        translations={translations}
        lang={lang}
        btnText={translations.btnSend}
        heading={translationsPage.servicesTitle}
        imgSrc="/assets/zapchastyny-dlya-silhosptekhniky2.jpeg"
        list={listServices}
      />

      <ListBenefits heading={translations.orderBenefits.orderBenefitsTitle} orderBenefits={orderBenefits} />
      <div className="px-4">
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
