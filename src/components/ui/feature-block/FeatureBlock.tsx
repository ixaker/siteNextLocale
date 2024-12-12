import Image from 'next/image';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ProductComponentProps } from '@/context/withStaticPathsAndProps';

const FeatureBlock: React.FC<ProductComponentProps> = (componentProps) => {
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const secondaryColor = currentTheme.palette.secondary.main;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const translationsPage = componentProps.translationsPage;
  const listPeculiarities = translationsPage.listPeculiarities;

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
    <section className="px-4">
      <div
        ref={ref}
        className={`pt-5 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {translationsPage.title && translationsPage.title.trim() !== '' && <Heading level="h2" text={translationsPage.title} />}
        <ul className="flex flex-col gap-[15px] mt-[15px]">
          {listPeculiarities.map((item, index) => (
            <li className="flex items-center  gap-3" key={index}>
              {item.icon && (
                <div className="relative flex justify-center items-center ">
                  <Image
                    src={`${item.icon}?v=${new Date().getTime()}`}
                    alt="Icon"
                    width={100}
                    height={100}
                    className={`w-[52px] h-[60px] lg:w-[52px] lg:h-[60px] relative max-w-fit z-[3] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    loading="lazy"
                  />
                  <div
                    style={{ boxShadow: `0px 0px 20px 10px ${secondaryColor}`, backgroundColor: 'white' }}
                    className="absolute rounded-full size-[50%] "
                  ></div>
                </div>
              )}
              <Paragraph
                text={item.description}
                style={`transition-opacity duration-700 delay-[200ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureBlock;
