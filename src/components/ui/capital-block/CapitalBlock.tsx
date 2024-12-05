import Image from 'next/image';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import ButtonSubmitDrawing from '../button/ButtonSubmitDrawing';
import { PageProps } from '@/context/withStaticPathsAndProps';
import NavigationMap from '../navigation-map/NavigationMap';

interface CapitalBlockrProps {
  title: string;
  description: string;
  srcImg: string;
  txtButton: string;
  translations: PageProps['translations'];
  lang: PageProps['lang'];
}

const CapitalBlock: React.FC<CapitalBlockrProps> = ({ title, description, srcImg, translations, lang }) => {
  const translationsMenuService = translations.menu[0]?.subMenu;
  return (
    <div className="flex min-h-[inherit] pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px] pb-6">
      <div className="flex gap-4 min-w-fit">
        <NavigationMap lang={lang} translationsMenuService={translationsMenuService || []} />
        <div className="px-4 text-white min-w-full flex items-start justify-center">
          <div className="hidden sm:block max-w-[400px] w-full h-full ">
            <Image
              src={srcImg}
              alt="lazerna-rizka"
              className=" w-full h-full object-cover rounded-l-[10px]"
              width={100}
              height={100}
            />
          </div>

          <div className="w-full gap-4 sm:max-w-[60%] flex flex-col justify-around">
            <Heading level="h1" text={title} alignment="center" />
            <Paragraph text={description} alignment="center" />
            <div className="flex justify-center">
              <ButtonSubmitDrawing lang={lang} translations={translations} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapitalBlock;
