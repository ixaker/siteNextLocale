'use client';

import Image from 'next/image';
import Paragraph from '../typography/Paragraph';
import NavigationMap from '../navigation-map/NavigationMap';
import ButtonSubmitDrawing from '../button/ButtonSubmitDrawing';
import { ProductComponentProps, ServicesComponentProps } from '@/context/withStaticPathsAndProps';
import BackCover from '../back-cover/BackCover';

const InformationBlock: React.FC<ServicesComponentProps | ProductComponentProps> = (componentProps) => {
  const translationsMenuService = componentProps.translations.menu[0]?.subMenu;
  const translatiomsPage = componentProps.translationsPage;

  return (
    <BackCover version={componentProps.version} bgImg={translatiomsPage.srcImg}>
      <div className="flex min-h-[inherit] pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px] pb-6 relative z-[10]">
        <NavigationMap lang={componentProps.lang} translationsMenuService={translationsMenuService || []} />
        <div className="px-4 text-white flex items-start justify-center w-full">
          <div className="flex gap-3   max-w-[1050px]  justify-between bg-inherit sm:bg-[#000000af]  rounded-[10px]">
            <div className="hidden sm:block max-w-[320px] w-full">
              {/* ?v=${new Date().getTime()} */}
              <Image
                width={100}
                height={100}
                src={`${translatiomsPage.srcImg}${componentProps.version}`}
                alt={translatiomsPage.srcImg}
                className=" w-full h-full object-cover rounded-l-[10px]"
              />
            </div>
            <div className="w-full gap-4 sm:max-w-[60%] flex flex-col justify-around mr-4 mb-5 mt-5">
              <h1 className="uppercase md:text-xl lg:ttext-2xl xl:text-4xl font-semibold">{translatiomsPage.title}</h1>
              <Paragraph text={translatiomsPage.description} alignment="left" />
              <Paragraph text={translatiomsPage.descriptionBottom} alignment="left" />
              <div className="flex justify-start">
                <ButtonSubmitDrawing lang={componentProps.lang} translations={componentProps.translations} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackCover>
  );
};

export default InformationBlock;
