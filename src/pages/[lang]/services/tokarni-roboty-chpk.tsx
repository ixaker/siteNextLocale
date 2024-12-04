import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import langUk from '../../../../locales/uk.json';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import InformationBlock from '@/components/ui/information-block/InformationBlock';
import InfoCard from '@/components/ui/info-card/InfoCard';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.tokarniRobotyChpkPage || langUk.tokarniRobotyChpkPage;
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
        imgOg="/assets/tokarni-roboty-chpk.jpg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover>
        <InformationBlock
          title="ТОКАРНА ОБРОБКА"
          descriptionTop="Ми виконуємо те, що інші називають неможливим. Великий парк верстатів із ЧПК, сучасні технології та команда професіоналів дозволяють нам виготовляти деталі будь-якої складності та обсягу."
          descriptionBottom="Шукаєте партнера, який впорається з великими партіями, складними формами та жорсткими термінами? Ви знайшли його."
          translations={translations}
          srcImg="/assets/tokarni-roboty-chpk.jpeg"
          lang={lang}
          translationsMenuService={translationsMenuService || []}
        />
      </BackCover>
      <div className="sm:px-4 mt-6">
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/tokarni-roboty-chpk2.png"
          title="Виконуємо будь-які обсяги токарних робіт"
          descriptionCard="Ми розуміємо, що ваш бізнес не може чекати. Завдяки сучасним потужностям і налагодженій логістиці, ваше замовлення буде виконане в максимально стислі терміни. Забудьте про тривалі строки виробництва — ми працюємо швидко і якісно"
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/tokarni-roboty-chpk3.png"
          title="Швидке виконання замовлень"
          descriptionCard="Наш парк налічує понад 300 сучасних верстатів із ЧПК, які працюють без зупинки. Ми обробляємо великі партії деталей без проблем. Хочете замовити тисячі виробів? Це не питання. Якщо ваші постачальники не витримують навантаження, ми готові взятися за ваше замовлення та виконати його вчасно."
        />
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/tokarni-roboty-chpk4.png"
          title="Точність і виготовлення деталей будь-якої складності"
          descriptionCard="Наші верстати дозволяють виготовляти великі деталі діаметром до 4000 мм і довжиною до 8000 мм. Потрібні дрібні, складні деталі від 10 мм? Ми це зробимо з максимальною точністю. Там, де інші здаються, ми пропонуємо рішення і запитуємо: “Коли починаємо?”."
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/tokarni-roboty-chpk5.png"
          title="Комплексний підхід до виготовлення деталей"
          descriptionCard="З нами вам не потрібно шукати інших підрядників для завершення процесу. Ми виконуємо весь спектр робіт: від точного виготовлення на ЧПК до підготовки деталей для подальшого використання. Ви отримуєте повне рішення в одному місці."
        />
      </div>
      <CalculationSection translations={translations} lang={lang} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
