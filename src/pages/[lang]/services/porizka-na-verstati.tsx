import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import langUk from '../../../../locales/uk.json';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import InformationBlock from '@/components/ui/information-block/InformationBlock';
import InfoCard from '@/components/ui/info-card/InfoCard';
import Paragraph from '@/components/ui/typography/Paragraph';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.porizkaNaVerstati || langUk.porizkaNaVerstati;
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

  return (
    <section style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead
        title={translationsPage.title}
        description={translationsPage.description}
        keywords={translationsPage.title}
        canonical={fullUrl}
        imgOg="/assets/porizka-na-verstati.jpg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover>
        <InformationBlock
          title="СТРІЧКОПИЛЬНА ПОРІЗКА"
          descriptionTop="Ми пропонуємо високоякісну порізку металу за допомогою лентопилів ЧПК, що дозволяє обробляти заготовки з великою точністю і швидкістю. Завдяки нашому сучасному парку обладнання, ми здатні виконувати великі обсяги робіт будь-якої складності."
          descriptionBottom="Прагнете знайти надійного партнера для порізки металу? Ми готові виконати замовлення будь-якої складності з високою точністю та швидкістю."
          translations={translations}
          srcImg="/assets/porizka-na-verstati.jpg"
          lang={lang}
          translationsMenuService={translationsMenuService || []}
        />
      </BackCover>

      <div className="sm:px-4 mt-6">
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/porizka-na-verstati2.webp"
          title="Потужний парк обладнання"
          descriptionCard="У нас є більше 10 лентопилів ЧПК, здатних різати заготовки діаметром від 10 до 550 мм, що забезпечує гнучкість і можливість працювати з різними типами металу"
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/porizka-na-verstati3.jpg"
          title="Універсальність у роботі"
          descriptionCard="Ми маємо вертикальні лентопили, які дозволяють здійснювати порізку довгих листових заготовок при необхідності, що розширює можливості обробки"
        />
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/porizka-na-verstati4.jpg"
          title="Висока точність і швидкість"
          descriptionCard="Ми гарантуємо високу точність порізки і швидке виконання замовлень, що дозволяє зекономити час і забезпечити точні результати"
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/porizka-na-verstati5.jpg"
          title="Комплексне обслуговування"
          descriptionCard="Пропонуємо повний цикл послуг з порізки металу, що дозволяє вам отримати готові деталі без необхідності звертатися до інших підрядників"
        />
      </div>

      <div className="px-4 mt-10">
        <Paragraph
          alignment="center"
          text="Залиште заявку зараз, і ми виконаємо ваше замовлення швидко та на найвищому рівні!"
        />
      </div>

      <CalculationSection translations={translations} lang={lang} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
