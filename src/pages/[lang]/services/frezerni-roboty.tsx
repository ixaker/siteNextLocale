import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import { useTheme } from '@mui/material';
import langUk from '../../../../locales/uk.json';
import { darkTheme, lightTheme } from '@/theme';
import FeatureBlock from '@/components/ui/feature-block/FeatureBlock';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import ListBenefits from '@/components/ui/list-benefits/ListBenefits';
import ServiceBlock from '@/components/ui/service-block/ServiceBlock';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import Paragraph from '@/components/ui/typography/Paragraph';
import InformationBlock from '@/components/ui/information-block/InformationBlock';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.frezerniRoboty || langUk.frezerniRoboty;
  const theme = useTheme();
  const listPeculiarities = translationsPage.listPeculiarities;
  const orderBenefits = translations.orderBenefits.listOrderBenefits;

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const listServices = translationsPage.listServices;
  const secondaryColor = currentTheme.palette.secondary.main;
  const translationsMenuService = translations.menu[0]?.subMenu;

  const [fullUrl, setFullUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, [fullUrl]);
  return (
    <section style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead
        title={translationsPage.title}
        description={translationsPage.description}
        keywords={translationsPage.title}
        canonical={fullUrl}
        imgOg="/assets/frezerni-roboty-01.png"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover>
        <InformationBlock
          title="Фрезерна обробка на ЧПК"
          descriptionTop="Ми перетворюємо складні завдання на готові рішення. Завдяки широкому парку фрезерних оброблювальних центрів із ЧПК, сучасним технологіям і професійній команді, ми обробляємо деталі будь-якої складності та великих обсягів."
          descriptionBottom="Потрібен надійний партнер для роботи з великими серіями, складними формами чи важкими деталями? Ми готові до викликів."
          translations={translations}
          srcImg="/assets/frezerni-roboty-01.png"
          lang={lang}
          translationsMenuService={translationsMenuService || []}
        />
      </BackCover>
      <ServiceBlock
        translations={translations}
        lang={lang}
        btnText={translations.btnSend}
        heading={translationsPage.servicesTitle}
        imgSrc="/assets/frezerni-roboty2.jpg"
        list={listServices}
      />
      <ListBenefits heading={translations.orderBenefits.orderBenefitsTitle} orderBenefits={orderBenefits} />
      <div className="px-4">
        <FeatureBlock listPeculiarities={listPeculiarities} title={translationsPage.peculiaritiesTitle} />
      </div>
      <div className="px-4 pt-[30px]">
        <Paragraph text={translationsPage.callToAction} alignment="center" />
      </div>
      <CalculationSection translations={translations} lang={lang} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
