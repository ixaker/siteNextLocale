import Image from 'next/image';
import Paragraph from '../typography/Paragraph';
import Heading from '../typography/Heading';

interface InfoCardProps {
  title: string;
  srcImg: string;
  descriptionCard: string;
  direction: 'row' | 'row-reverse';
  aligntText: 'start' | 'end';
}

const InfoCard: React.FC<InfoCardProps> = ({ srcImg, descriptionCard, title, direction, aligntText }) => {
  return (
    <>
      <div className="pt-5 flex w-full mx-0 my-0 lg:max-w-[80%] lg:mx-auto lg:my-0">
        <div
          className={`flex w-full gap-5 sm:flex ${direction === 'row-reverse' ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex-col`}
        >
          <div className="sm:max-w-[400px] max-h-[200px] sm:max-h-[400px] h-full w-full">
            <Image
              src={srcImg}
              alt={srcImg}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`flex text-center flex-col ${aligntText === 'start' ? 'sm:text-start' : 'sm:text-end'} justify-between md:justify-center gap-5 p-4 md:p-0`}
          >
            <Heading level="h2" text={title} />
            <Paragraph text={descriptionCard} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
