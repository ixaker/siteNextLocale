import Image from 'next/image';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import CustomButton from '../button/CustomButton';

interface ServiceBlock {
  heading: string;
  list: { description: string }[];
  //   description?: string
  btnText: string;
  imgSrc: string;
}

const ServiceBlock: React.FC<ServiceBlock> = ({ heading, list, btnText, imgSrc }) => {
  return (
    <div className="px-4 py-5">
      <Heading level="h2" text={heading} alignment="center" />
      <div className="flex flex-col gap-[20px] pt-5 md:flex-row lg:justify-around lg:gap-[0px]">
        <ul className="flex flex-col gap-3 md:flex md:justify-between md:flex-col lg:max-w-[40%]">
          {list.map((item, index) => (
            <li key={index}>
              <Paragraph text={`- ${item.description}`} />
            </li>
          ))}
        </ul>
        <div className="relative xl:max-w-[50%]">
          <Image
            alt="lazerna-rizka"
            src={imgSrc}
            width={100}
            height={100}
            className="size-full shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)] w-full rounded-[10px] md:w-[auto] md:max-w-[400px] xl:max-w-[600px]"
          />
          <CustomButton className="mt-5 w-full text-nowrap absolute bottom-0" variant="send-btn">
            {btnText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;
