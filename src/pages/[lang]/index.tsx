import { GetStaticPaths, GetStaticProps } from 'next';
import CustomButton from '@/components/ui/button/CustomButton';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';

const Home: React.FC<PageProps> = ({ translations }) => {
  const textTranslationHome = translations.homePage;

  console.log(textTranslationHome);

  return (
    <div className="pl-4 pr-4">
      <div className="top-1/2 transform -translate-y-1/2  w-full">
        {/* <h1 className="text-white text-[50px] font-bold	">{textTranslationHome.title}</h1> */}
        <p>ТОКАРНІ ТА ФРЕЗЕРНІ РОБОТИ НА ВЕРСТАТАХ З ЧПУ</p>
        <CustomButton>Надіслати креслення на прорахунок</CustomButton>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
