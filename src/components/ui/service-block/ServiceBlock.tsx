import Image from 'next/image';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import ButtonSubmitDrawing from '../button/ButtonSubmitDrawing';
import { PageProps } from '@/context/withStaticPathsAndProps';
import { useEffect, useRef, useState } from 'react';

interface ServiceBlock {
  heading: string;
  list: { description: string }[];
  btnText: string;
  imgSrc: string;
  translations: PageProps['translations'];
  lang: PageProps['lang'];
}

const ServiceBlock: React.FC<ServiceBlock> = ({ heading, list, imgSrc, translations, lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="px-4 py-5" ref={ref}>
      <Heading level="h2" text={heading} alignment="center" />
      <div className="flex flex-col items-center gap-[20px] pt-5 md:flex-row lg:justify-around lg:gap-[0px]">
        <ul className={`flex flex-col gap-3 md:flex md:justify-between md:flex-col lg:max-w-[40%] `}>
          {list.map((item, index) => (
            <li key={index}>
              <Paragraph
                style={`transition-opacity duration-700 delay-[300ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                text={`- ${item.description}`}
              />
            </li>
          ))}
        </ul>
        <div className="relative xl:w-fit xl:max-h-[500px]">
          <Image
            alt={imgSrc}
            src={imgSrc}
            width={100}
            height={100}
            className="w-screen h-[250px] object-cover shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)] rounded-[10px] md:max-w-[400px] md:w-[450px] md:h-[300px]"
            loading="lazy"
          />
          <ButtonSubmitDrawing lang={lang} translations={translations} className="mt-5 w-full text-nowrap absolute bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;
