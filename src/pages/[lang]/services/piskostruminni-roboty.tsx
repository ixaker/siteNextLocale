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

  const [fullUrl, setFullUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, [fullUrl]);

  const list = [
    {
      description:
        'Пескоструйна очистка для видалення корозії, забруднень та фарби з металевих та інших поверхонь',
    },
    { description: 'Дробеструйна очистка для обробки металевих деталей, що потребують посиленої обробки' },
    {
      description: 'Лазерна очистка для делікатного та точного видалення забруднень без пошкодження поверхні',
    },
  ];
  return (
    <section style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead
        title="Пескоструйна обробка"
        description={translationsPage.description}
        keywords={translationsPage.title}
        canonical={fullUrl}
        imgOg="/assets/piskostruminni-roboty.webp"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover bgImg="/assets/piskostruminni-roboty.webp">
        <InformationBlock
          title="Пескоструйна обробка"
          descriptionTop="Ми пропонуємо широкий спектр послуг з очищення матеріалів, використовуючи сучасні технології та обладнання, що забезпечує високу ефективність і якість обробки. Наш парк обладнання дозволяє здійснювати очищення різних типів матеріалів, забезпечуючи ідеальний результат для будь-яких задач."
          descriptionBottom="Шукаєте надійного партнера для очищення деталей від забруднень та корозії? Ми готові до будь-яких викликів."
          translations={translations}
          srcImg="/assets/piskostruminni-roboty.webp"
          lang={lang}
        />
      </BackCover>

      <div className="sm:px-4 mt-6">
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/piskostruminni-roboty2.jpg"
          title="Ми маємо різні можливості для очищення"
          list={list}
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/piskostruminni-roboty3.jpg"
          title="Висока точність та ефективність"
          descriptionCard="Завдяки новітнім технологіям і системам підготовки повітря, ми забезпечуємо максимальну ефективність та точність очищення для будь-яких матеріалів"
        />
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/piskostruminni-roboty4.png"
          title="Швидке виконання замовлень"
          descriptionCard="Завдяки налагодженій логістиці та високій потужності обладнання ми виконуємо замовлення у найкоротші терміни без шкоди для якості"
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/piskostruminni-roboty5.webp"
          title="Комплексний підхід"
          descriptionCard="Ми пропонуємо повний цикл послуг з очищення, що дозволяє вам отримати готові деталі без потреби звертатися до інших підрядників"
        />
      </div>

      <div className="px-4 mt-10">
        <Paragraph alignment="center" text="Довіртесь професіоналам!" />
        <Paragraph
          alignment="center"
          text="Замовте послуги з пескоструйної обробки у нас вже сьогодні і переконайтесь у наших можливостях!"
        />
      </div>

      <CalculationSection translations={translations} lang={lang} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
