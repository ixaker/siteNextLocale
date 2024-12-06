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
  const translationsPage = translations?.shlifovkaMetaluPage || langUk.shlifovkaMetaluPage;
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
    { description: 'Безцентрові шліфувальні верстати;' },
    { description: 'Круглі шліфувальні верстати, зокрема з ЧПК' },
    {
      description: 'Плоскошліфувальні машини',
    },
    {
      description: 'Обладнання для внутрішнього та глибокого внутрішнього шліфування',
    },
    {
      description: 'Верстати для різьбошліфування',
    },
  ];

  return (
    <section style={{ backgroundColor: bgColor, color: secondaryColor }}>
      <DynamicHead
        title={translationsPage.title}
        description={translationsPage.description}
        keywords={translationsPage.title}
        canonical={fullUrl}
        imgOg="/assets/shlifovka-metalu.jpg"
        lang={lang}
        localeOg={translations.locale}
      />
      <BackCover>
        <InformationBlock
          title="Шліфування металу"
          descriptionTop="Ми перетворюємо складні завдання на готові рішення. Завдяки сучасному парку шліфувальних верстатів, передовим технологіям і досвідченій команді, ми гарантуємо точну та якісну обробку поверхонь деталей будь-якої складності."
          descriptionBottom="Прагнете знайти спеціалістів, які розуміють ваші потреби? Ми готові стати вашим партнером і виконати навіть найскладніші замовлення."
          translations={translations}
          srcImg="/assets/shlifovka-metalu.jpg"
          lang={lang}
          translationsMenuService={translationsMenuService || []}
        />
      </BackCover>

      <div className="sm:px-4 mt-6">
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/shlifovka-metalu2.jpg"
          title="Наш парк включає широкий асортимент шліфувальних верстатів"
          list={list}
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/shlifovka-metalu3.webp"
          title="Висока точність і якість"
          descriptionCard="Наші технології дозволяють досягти ідеальної чистоти поверхні та забезпечують максимальну точність навіть для найдрібніших деталей і складних форм"
        />
        <InfoCard
          aligntText="end"
          direction="row-reverse"
          srcImg="/assets/shlifovka-metalu4.jpg"
          title="Швидке виконання замовлень"
          descriptionCard="Завдяки налагодженій логістиці та високій потужності обладнання ми виконуємо замовлення у найкоротші терміни без шкоди для якості"
        />
        <InfoCard
          aligntText="start"
          direction="row"
          srcImg="/assets/shlifovka-metalu5.jpg"
          title="Комплексний підхід"
          descriptionCard="Ми надаємо повний цикл шліфувальних робіт, щоб ви отримали готову продукцію без необхідності залучати інших підрядників"
        />
      </div>

      <div className="px-4 mt-10">
        <Paragraph
          alignment="center"
          text="Залиште заявку прямо зараз – ми допоможемо втілити ваші ідеї в реальність!"
        />
      </div>

      <CalculationSection translations={translations} lang={lang} />
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
