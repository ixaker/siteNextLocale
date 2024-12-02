import Image from 'next/image';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import ButtonSubmitDrawing from '../button/ButtonSubmitDrawing';
import { PageProps } from '@/context/withStaticPathsAndProps';

interface ServiceBlock {
  heading: string;
  list: { description: string }[];
  btnText: string;
  imgSrc: string;
  translations: PageProps['translations'];
  lang: PageProps['lang'];
}

const ServiceBlock: React.FC<ServiceBlock> = ({ heading, list, imgSrc, translations, lang }) => {
  return (
    <div className="px-4 py-5">
      <Heading level="h2" text={heading} alignment="center" />
      <div className="flex flex-col items-center gap-[20px] pt-5 md:flex-row lg:justify-around lg:gap-[0px]">
        <ul className="flex flex-col gap-3 md:flex md:justify-between md:flex-col lg:max-w-[40%]">
          {list.map((item, index) => (
            <li key={index}>
              <Paragraph text={`- ${item.description}`} />
            </li>
          ))}
        </ul>
        <div className="relative xl:w-[400px] xl:max-h-[500px]">
          <Image
            alt="lazerna-rizka"
            src={imgSrc}
            width={100}
            height={100}
            className="max-h-[300px] size-full shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)] w-full rounded-[10px] md:w-[auto] md:max-w-[400px] xl:w-full xl:max-h-[500px]"
          />
          <ButtonSubmitDrawing
            lang={lang}
            translations={translations}
            className="mt-5 w-full text-nowrap absolute bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;
