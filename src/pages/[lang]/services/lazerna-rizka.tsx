import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';
import BackCover from '@/components/ui/back-cover/BackCover';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import InformationBlock from '@/components/ui/information-block/InformationBlock';
import InfoCard from '@/components/ui/info-card/InfoCard';
import Paragraph from '@/components/ui/typography/Paragraph';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.lazernaRizkaPage || langUk.lazernaRizkaPage;
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  const translationsMenuService = translations.menu[0]?.subMenu;

  const [fullUrl, setFullUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, [fullUrl]);

  const list = [
    { description: 'Високу точність і чистоту зрізу' },
    { description: 'Різання металів до 20 мм' },
    {
      description: 'Можливість обробки великих розмірів',
    },
  ];

  return (
    <div style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead
        title={translationsPage.title}
        description={translationsPage.description}
        keywords={translationsPage.title}
        canonical={fullUrl}
        imgOg="/assets/lazerna-rizka.jpg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover>
        <InformationBlock
          title="ЛАЗЕРНА РІЗКА З ЧПК"
          descriptionTop="Ми спеціалізуємося на високоточній лазерній порізці, використовуючи новітнє обладнання. Наші лазерні верстати з робочим полем 2000 мм х 6000 мм дозволяють різати матеріали товщиною до 20 мм з максимальним рівнем точності і чистоти зрізу."
          descriptionBottom="Лазерне різання металу будь-якої складності – ми готові виконати ваше замовлення!"
          translations={translations}
          srcImg="/assets/lazerna-rizka.jpg"
          lang={lang}
          translationsMenuService={translationsMenuService || []}
        />
      </BackCover>

      <div className="sm:px-4 mt-6">
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/lazerna-rizka2.jpg"
          title="Наші лазерні верстати забезпечують"
          list={list}
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/lazerna-rizka3.jpg"
          title="Точність та надійність"
          descriptionCard="Ми гарантуємо точність і акуратність різання, що дозволяє досягати ідеальних результатів навіть для складних геометрій"
        />
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/lazerna-rizka4.jpg"
          title="Швидке виконання замовлень"
          descriptionCard="Завдяки автоматизації процесу, ми виконуватимемо ваше замовлення в оптимальні строки без втрати якості"
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/lazerna-rizka5.jpg"
          title="Комплексний підхід"
          descriptionCard="Пропонуємо повний спектр послуг лазерної порізки, що дозволяє вам отримати готові деталі без необхідності додаткової обробки"
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
