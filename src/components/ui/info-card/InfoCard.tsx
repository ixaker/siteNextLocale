import Image from 'next/image';
import Paragraph from '../typography/Paragraph';
import Heading from '../typography/Heading';
import { useState, useEffect, useRef } from 'react';

interface InfoCardProps {
  title: string;
  srcImg: string;
  descriptionCard?: string;
  direction: 'row' | 'row-reverse';
  aligntText: 'start' | 'end';
  list?: { description: string }[];
}

const InfoCard: React.FC<InfoCardProps> = ({ srcImg, descriptionCard, title, direction, aligntText, list }) => {
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
    <div
      ref={ref}
      className={`pt-5 flex w-full mx-0 my-0 lg:max-w-[80%] lg:mx-auto lg:my-0 transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className={`flex w-full gap-5 sm:flex ${direction === 'row-reverse' ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex-col`}>
        {/* Image */}
        <div className="sm:max-w-[400px] max-h-[200px] sm:max-h-[400px] h-full w-full relative">
          <Image
            src={srcImg}
            alt={srcImg}
            width={100}
            height={100}
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
          />
        </div>
        {/* Text */}
        <div
          className={`flex text-center flex-col ${
            aligntText === 'start' ? 'sm:text-start' : 'sm:text-end'
          } justify-between md:justify-center gap-5 p-4 md:p-0`}
        >
          <Heading level="h2" text={title} />
          {list && list.length > 0 ? (
            <ul>
              {list.map((item, index) => (
                <li key={index}>
                  <Paragraph
                    text={`\u2022 ${item.description}`}
                    style={`transition-opacity duration-700 delay-[100ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  />
                </li>
              ))}
            </ul>
          ) : (
            descriptionCard && (
              <Paragraph text={descriptionCard} style={`transition-opacity duration-700 delay-[200ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
