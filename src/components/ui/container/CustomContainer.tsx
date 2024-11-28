import Image from 'next/image';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import CustomButton from '../button/CustomButton';

interface CustomContainerProps {
  title: string;
  description: string;
  srcImg: string;
  txtButton: string;
}

const CustomContainer: React.FC<CustomContainerProps> = ({ title, description, srcImg, txtButton }) => {
  return (
    <div className="flex flex-col h-[calc(100vh-120px)] justify-center items-center px-4 md:px-8">
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-16 max-w-screen-xl w-full">
        <div className="hidden md:block flex-shrink-0 md:w-[30%] md:h-fill-available lg:w-5/12 lg:h-[400px] shadow-lg rounded-lg overflow-hidden">
          <Image
            src={srcImg}
            alt="lazerna-rizka"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col gap-6 items-center text-center md:text-left md:items-center md:w-7/12 lg:w-7/12">
          <Heading level="h1" text={title} alignment="center" />
          <Paragraph text={description} alignment="center" />
          <CustomButton variant="send-btn">{txtButton}</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CustomContainer;
