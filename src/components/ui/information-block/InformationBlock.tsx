import Image from 'next/image';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import NavigationMap from '../navigation-map/NavigationMap';
import ButtonSubmitDrawing from '../button/ButtonSubmitDrawing';
import { PageProps } from '@/context/withStaticPathsAndProps';

interface InformationBlock {
  title: string;
  descriptionTop: string;
  descriptionBottom: string;
  srcImg: string;
  translations: PageProps['translations'];
  lang: string;
  style?: string;
}

const InformationBlock: React.FC<InformationBlock> = ({
  title,
  descriptionTop,
  descriptionBottom,
  srcImg,
  translations,
  lang,
  style,
}) => {
  const translationsMenuService = translations.menu[0]?.subMenu;
  return (
    <div className="flex min-h-[inherit] pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px] pb-6 relative z-[10]">
      <NavigationMap lang={lang} translationsMenuService={translationsMenuService || []} />
      <div className="px-4 text-white flex items-start justify-center w-full">
        <div className="flex gap-3   max-w-[1050px]  justify-between bg-inherit sm:bg-[#000000af]  rounded-[10px]">
          <div className="hidden sm:block max-w-[320px] w-full">
            <Image
              width={100}
              height={100}
              src={srcImg}
              alt={srcImg}
              className=" w-full h-full object-cover rounded-l-[10px]"
            />
          </div>
          <div className="w-full gap-4 sm:max-w-[60%] flex flex-col justify-around mr-4 mb-5 mt-5">
            <Heading style={`${style} uppercase`} level="h2" text={title} alignment="left" />
            <Paragraph text={descriptionTop} alignment="left" />
            <Paragraph text={descriptionBottom} alignment="left" />
            <div className="flex justify-start">
              <ButtonSubmitDrawing lang={lang} translations={translations} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationBlock;
