import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import BackCover from '@/components/ui/back-cover/BackCover';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import InformationBlock from '@/components/ui/information-block/InformationBlock';
import InfoCard from '@/components/ui/info-card/InfoCard';
import Paragraph from '@/components/ui/typography/Paragraph';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.termichnaObrobkaPage || langUk.termichnaObrobkaPage;
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
    { description: 'Стандартні електричні печі для закалки та відпуску' },
    { description: 'Потужні газові печі для обробки деталей вагою до 100 т' },
    {
      description: 'Установки ТВЧ для закалки довгих валів',
    },
  ];
  return (
    <section style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead
        title={translationsPage.title}
        description={translationsPage.description}
        keywords={translationsPage.title}
        canonical={fullUrl}
        imgOg="/assets/termichna-obrobka.jpg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover bgImg="/assets/termichna-obrobka.jpg">
        <InformationBlock
          title="Термообробка металів"
          descriptionTop="Ми пропонуємо комплексні рішення для термообробки металів будь-якої складності. Завдяки сучасному обладнанню, передовим технологіям і досвідченій команді, ми забезпечуємо високу якість і точність обробки, що відповідає найвищим стандартам."
          descriptionBottom="Обираючи нас для термообробки, ви отримуєте не лише високоякісну обробку, а й надійного партнера, який завжди виконує обіцянки"
          translations={translations}
          srcImg="/assets/termichna-obrobka.jpg"
          lang={lang}
          translationsMenuService={translationsMenuService || []}
        />
      </BackCover>

      <div className="sm:px-4 mt-6">
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/termichna-obrobka2.jpg"
          title="Наше підприємство має великий арсенал обладнання для термообробки, включаючи"
          list={list}
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/termichna-obrobka3.webp"
          title="Максимальна точність і надійність"
          descriptionCard="Ми використовуємо тільки найсучасніші технології, щоб забезпечити оптимальні умови для кожної деталі. Ваша продукція буде оброблена з високою точністю та відповідно до найвищих стандартів якості"
        />
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/termichna-obrobka4.jpg"
          title="Швидке виконання замовлень"
          descriptionCard="Наші технології та організовані процеси дозволяють виконувати замовлення в мінімальні терміни без компромісів щодо якості. Ми розуміємо важливість своєчасного виконання, тому завжди дотримуємося обіцяних строків"
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/termichna-obrobka5.jpg"
          title="Комплексний підхід"
          descriptionCard="Ми беремо на себе весь цикл термообробки, від початкової обробки до готової деталі, що дозволяє зекономити ваш час і ресурси"
        />
      </div>

      <div className="px-4 mt-10">
        <Paragraph alignment="center" text="Не відкладайте — довіртеся професіоналам!" />
      </div>

      <CalculationSection translations={translations} lang={lang} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
