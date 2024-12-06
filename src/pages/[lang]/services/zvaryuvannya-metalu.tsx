import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import { useTheme } from '@mui/material';
import langUk from '../../../../locales/uk.json';
import { darkTheme, lightTheme } from '@/theme';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import InformationBlock from '@/components/ui/information-block/InformationBlock';
import InfoCard from '@/components/ui/info-card/InfoCard';
import Paragraph from '@/components/ui/typography/Paragraph';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.zvaryuvannyaMetaluPage || langUk.zvaryuvannyaMetaluPage;
  const theme = useTheme();

  const translationsMenuService = translations.menu[0]?.subMenu;
  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;
  const [fullUrl, setFullUrl] = useState('');
  const list = [
    { description: 'Полуавтоматичну зварку' },
    { description: 'Аргонове зварювання' },
    {
      description: 'Лазерне зварювання',
    },
    { description: 'Електродугове зварювання' },
    { description: 'Контактну зварку' },
  ];
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, [fullUrl]);
  return (
    <div style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead
        title={translationsPage.title}
        description={translationsPage.description}
        keywords={translationsPage.title}
        canonical={fullUrl}
        imgOg="/assets/zvaryuvannya-metalu.jpg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover>
        <InformationBlock
          title="Зварювання"
          descriptionTop="Ми надаємо широкий спектр зварювальних послуг, використовуючи найсучасніше обладнання та інноваційні технології. Наші зварювальні роботи відрізняються високою якістю та точністю, що дозволяє нам виконувати проекти будь-якої складності."
          descriptionBottom="Потрібна зварка? Ми готові взятися за ваше завдання будь-якої складності. "
          translations={translations}
          srcImg="/assets/zvaryuvannya-metalu.jpg"
          lang={lang}
          translationsMenuService={translationsMenuService || []}
        />
      </BackCover>

      <div className="sm:px-4 mt-6">
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/zvaryuvannya-metalu2.jpg"
          title="Наш парк обладнання включає"
          list={list}
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/zvaryuvannya-metalu3.jpg"
          title="Висока точність і якість"
          descriptionCard="Наші технології забезпечують міцні та надійні зварні шви, навіть для складних металів і конструкцій"
        />
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/zvaryuvannya-metalu4.jpg"
          title="Швидке виконання замовлень"
          descriptionCard="Завдяки досвідченій команді та високотехнологічному обладнанню, ми виконуємо замовлення оперативно і з високою точністю"
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/zvaryuvannya-metalu5.jpg"
          title="Комплексний підхід"
          descriptionCard="Ми надаємо повний цикл зварювальних послуг, щоб ви отримали готову деталь без необхідності звертатися до інших підрядників"
        />
      </div>

      <div className="px-4 mt-10">
        <Paragraph
          alignment="center"
          text="Залиште заявку прямо зараз і переконайтеся у наших можливостях!"
        />
      </div>

      <CalculationSection translations={translations} lang={lang} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
