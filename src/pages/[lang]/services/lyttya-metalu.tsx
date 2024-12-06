import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import langUk from '../../../../locales/uk.json';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';
import DynamicHead from '@/components/shared/DynamicHead';
import InformationBlock from '@/components/ui/information-block/InformationBlock';
import InfoCard from '@/components/ui/info-card/InfoCard';
import Paragraph from '@/components/ui/typography/Paragraph';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.lyttyaMetaluPage || langUk.lyttyaMetaluPage;
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;
  const translationsMenuService = translations.menu[0]?.subMenu;

  const list = [
    { description: 'Лиття на автоматичних лініях для масового виробництва' },
    { description: 'Центробіжне лиття для створення деталей з високою міцністю' },
    {
      description: 'Лиття в кокіль для точних та довговічних відливок',
    },
    { description: 'Лиття ХТС для високотемпературних сплавів' },
    { description: 'Лиття кольорових металів під низьким тиском для забезпечення гладкості поверхні' },
    { description: 'Лиття кольорових металів в кокіль для точних деталей' },
  ];

  const [fullUrl, setFullUrl] = useState('');
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
        imgOg="/assets/lyttya-metalu.jpg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover>
        <InformationBlock
          title="Лиття"
          descriptionTop="Ми перетворюємо складні задачі на ефективні рішення! Завдяки передовому обладнанню та сучасним технологіям лиття, ми виготовляємо високоякісні відливки з різних матеріалів, забезпечуючи точність та надійність кожного етапу виробництва."
          descriptionBottom="Потрібен партнер для великих обсягів або складних відливок? Ми готові втілити ваші найскладніші проекти."
          translations={translations}
          srcImg="/assets/lyttya-metalu.jpg"
          lang={lang}
          translationsMenuService={translationsMenuService || []}
        />
      </BackCover>

      <div className="sm:px-4 mt-6">
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/lyttya-metalu2.jpg"
          title="У нас є різноманітні можливості для лиття"
          list={list}
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/lyttya-metalu3.jpg"
          title="Висока точність та надійність"
          descriptionCard="Наші технології та досвід дозволяють досягти максимальної точності в процесі лиття, що робить нашу продукцію надійною та довговічною"
        />
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/lyttya-metalu4.jpg"
          title="Комплексний підхід"
          descriptionCard="Ми пропонуємо повний цикл послуг з лиття, починаючи від розробки технології і закінчуючи готовими виробами, що дозволяє вам не звертатися до інших підрядників"
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/lyttya-metalu5.jpg"
          title="Ми перетворюємо складні задачі на ефективні рішення!"
          descriptionCard="Завдяки передовому обладнанню та сучасним технологіям лиття, ми виготовляємо високоякісні відливки з різних матеріалів, забезпечуючи точність та надійність кожного етапу виробництва"
        />
      </div>

      <div className="px-4 mt-10">
        <Paragraph alignment="center" text="Довіртесь професіоналам!" />
        <Paragraph
          alignment="center"
          text="Замовте лиття у нас вже сьогодні і отримайте якісні відливки, що відповідають усім вашим вимогам!"
        />
      </div>

      <CalculationSection translations={translations} lang={lang} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
