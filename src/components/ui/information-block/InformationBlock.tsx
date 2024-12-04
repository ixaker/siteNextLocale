import Image from 'next/image';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import NavigationMap from '../navigation-map/NavigationMap';
import { NavigationMenu } from '../../../../locales/types';
import ButtonSubmitDrawing from '../button/ButtonSubmitDrawing';
import { PageProps } from '@/context/withStaticPathsAndProps';

interface InformationBlock {
  title: string;
  descriptionTop: string;
  descriptionBottom: string;
  srcImg: string;
  translations: PageProps['translations'];
  lang: string;
  translationsMenuService: NavigationMenu[];
}

const InformationBlock: React.FC<InformationBlock> = ({
  title,
  descriptionTop,
  descriptionBottom,
  srcImg,
  translations,
  lang,
  translationsMenuService,
}) => {
  return (
    <div className="px-6 text-white pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px] pb-6">
      <div className="flex gap-4 min-w-fit">
        <div>
          <NavigationMap lang={lang} translationsMenuService={translationsMenuService || []} />
        </div>
        <div className="flex w-full justify-evenly">
          <div className="flex gap-3 max-w-[1170px] justify-between bg-inherit sm:bg-[#000000a3] rounded-l-[10px] rounded-[20px]">
            <div className="hidden sm:block max-w-[400px] w-full h-full ">
              <Image
                width={100}
                height={100}
                src={srcImg}
                alt={srcImg}
                className=" w-full h-full object-cover rounded-l-[10px]"
              />
            </div>
            <div className="w-full gap-4 sm:max-w-[60%] flex flex-col justify-around">
              <Heading level="h1" text={title} alignment="left" />
              <Paragraph text={descriptionTop} alignment="left" />
              <Paragraph text={descriptionBottom} alignment="left" />
              <div className="flex justify-center">
                <ButtonSubmitDrawing lang={lang} translations={translations} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationBlock;
