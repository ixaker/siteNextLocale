import { GetStaticPaths, GetStaticProps } from 'next';
import CustomButton from '@/components/ui/button/CustomButton';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';

type HomePageTranslations = {
  topTitle: string;
  bottomTitle: string;
  description: string;
  btnSend: string;
};

const Home: React.FC<PageProps> = ({ translations }) => {
  const textTranslationHome = translations.homePage as HomePageTranslations;
  return (
    <div className="pl-4 pr-4">
      <div className="flex flex-col justify-center items-center sm:absolute sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:inline">
        <div>
          <h1 className="text-[20px] text-center w-full sm:text-start sm:text-[40px] md:text-[55px] lg:text-[70px] font-semibold">
            {textTranslationHome.topTitle}
            <br />
            {textTranslationHome.bottomTitle}
          </h1>
        </div>
        <p className="text-center text-[12px] sm:text-start sm:text-[20px] text-[#f9f7dc] pt-5">
          {textTranslationHome.description}
        </p>
        <CustomButton variant="send-btn">{textTranslationHome.btnSend}</CustomButton>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
