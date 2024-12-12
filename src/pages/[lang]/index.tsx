import { withStaticProps, withStaticPaths } from '../../context/withStaticPathsAndProps';
import * as Common from '@/context/commonImports';
import Image from 'next/image';

const Home: React.FC<Common.PageProps> = ({ ...restProps }) => {
  const translationsPage = restProps.translations.homePage;
  const cardData = restProps.translations.cardData;
  const translationsMenuService = restProps.translations.menu[0]?.subMenu;

  const componentProps: Common.HomeComponentProps = { ...restProps, translationsPage };

  return (
    <div>
      <Common.DynamicHead {...componentProps} />
      <Common.BackCover version={componentProps.version}>
        <div className="flex min-h-[inherit] pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px] pb-6 relative z-10">
          <Common.NavigationMap lang={restProps.lang} translationsMenuService={translationsMenuService || []} />
          <div className="px-4 text-white w-full flex items-start justify-center">
            <div className="flex flex-col justify-center items-center lg:items-start">
              <div>
                <h1 className="text-[20px] text-center w-full sm:text-start sm:text-[40px] md:text-[55px] lg:text-[48px] xl:text-[70px] font-semibold">
                  {translationsPage.topTitle}
                  <br />
                  {translationsPage.bottomTitle}
                </h1>
              </div>
              <Common.Paragraph text={translationsPage.description} style="text-center sm:text-start pt-5" />
              <Common.ButtonSubmitDrawing lang={restProps.lang} translations={restProps.translations} className="mt-10" />
            </div>
          </div>
        </div>
      </Common.BackCover>
      <section className="pl-4 pr-4 pt-[30px] md:pt-[70px]">
        <ul className="flex flex-wrap justify-center gap-[10px] lg: xl:justify-between">
          {cardData.map((item, index) => (
            <li key={index}>
              <Common.Card href={`/${restProps.lang}/${item.href}`} srcImg={item.img} title={item.title} version={componentProps.version} />
            </li>
          ))}
        </ul>
        <div className="mt-[50px] pb-[80px]">
          <div className="mt-[20px] flex flex-col gap-5 lg:flex-row xl:justify-between md:mt-[50px]">
            <div className="flex flex-col justify-center gap-5 lg:w-[80%] xl:w-[70%] 2xl:w-[50%]">
              <Common.Heading level="h2" text={translationsPage.h2} alignment="center" />
              <Common.Paragraph text={translationsPage.descriptionCompany} alignment="center" />
            </div>
            <div>
              <Image
                className="w-full rounded-2xl shadow-2xl"
                src={`/assets/work.webp${componentProps.version}`}
                alt="Laptop"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[50px]">
        <Common.CalculationSection {...componentProps} />
      </section>
    </div>
  );
};

export const getStaticPaths: Common.GetStaticPaths = withStaticPaths;
export const getStaticProps: Common.GetStaticProps = withStaticProps;

export default Home;
