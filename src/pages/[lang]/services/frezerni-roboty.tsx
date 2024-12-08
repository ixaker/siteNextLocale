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
  const translationsPage = translations?.frezerniRoboty || langUk.frezerniRoboty;
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  const list = [
    { description: 'Вертикальні фрезерні станки ЧПК' },
    { description: 'Горизонтальні фрезерні станки із одним або змінними столами' },
    {
      description:
        'Портальний 5-осьовий оброблювальний центр із робочим полем 2000х4000 мм для великих і складних деталей',
    },
  ];

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
        imgOg="/assets/frezerni-roboty.jpg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover bgImg="/assets/frezerni-roboty.jpg">
        <InformationBlock
          title="Фрезерна обробка на ЧПК"
          descriptionTop="Ми перетворюємо складні завдання на готові рішення. Завдяки широкому парку фрезерних оброблювальних центрів із ЧПК, сучасним технологіям і професійній команді, ми обробляємо деталі будь-якої складності та великих обсягів."
          descriptionBottom="Потрібен надійний партнер для роботи з великими серіями, складними формами чи важкими деталями? Ми готові до викликів."
          translations={translations}
          srcImg="/assets/frezerni-roboty.jpg"
          lang={lang}
        />
      </BackCover>

      <div className="sm:px-4 mt-6">
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/frezerni-roboty2.jpeg"
          title="Потужний парк сучасного обладнання"
          list={list}
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/frezerni-roboty3.jpg"
          title="Деталі будь-якої складності та точності"
          descriptionCard="Наші технології дозволяють обробляти складні 3D-форматні поверхні, а також забезпечувати високу точність навіть для найменших елементів. Там, де інші здаються, ми говоримо: “Коли починаємо?”"
        />
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/frezerni-roboty4.jpg"
          title="Комплексний підхід"
          descriptionCard="Ми пропонуємо повний цикл фрезерної обробки, щоб ви отримали готову деталь без необхідності звертатися до інших підрядників. Ваше завдання – наша відповідальність"
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/frezerni-roboty5.png"
          title="Швидке виконання замовлень"
          descriptionCard="Завдяки сучасним потужностям і налагодженій логістиці, ваше замовлення буде виконане в максимально стислі терміни. Забудьте про затримки – ми працюємо швидко та якісно"
        />
      </div>
      <div className="px-4 mt-10">
        <Paragraph
          alignment="center"
          text="Ми готові стати вашим надійним партнером у сфері фрезерних робіт!"
        />
        <Paragraph alignment="center" text="Залиште заявку прямо зараз і переконайтесь у наших можливостях" />
      </div>
      <CalculationSection translations={translations} lang={lang} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
