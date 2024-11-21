import { GetStaticPaths, GetStaticProps } from 'next';
import CustomButton from '@/components/ui/button/CustomButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';

const Home: React.FC<PageProps> = ({ translations }) => {
  return (
    <div>
      <h1>{translations.welcome}</h1>
      <p>{translations.about}</p>
      <div className="absolute right-5 bottom-7 flex flex-col gap-2 items-center">
        <CustomButton variant="communication-button">
          <EmailIcon sx={{ fontSize: '60px' }} />
        </CustomButton>
        <CustomButton variant="communication-button">
          <PhoneIcon sx={{ fontSize: '60px' }} />
        </CustomButton>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
