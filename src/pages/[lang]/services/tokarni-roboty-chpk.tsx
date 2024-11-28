import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import CustomContainer from '@/components/ui/container/CustomContainer';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import langUk from '../../../../locales/uk.json';
import FeatureBlock from '@/components/ui/feature-block/FeatureBlock';

const Page: React.FC<PageProps> = ({ translations }) => {
  const translationsPage = translations?.tokarniRobotyChpkPage || langUk.tokarniRobotyChpkPage;
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const listPeculiarities = translationsPage.listPeculiarities;

  return (
    <section style={{ backgroundColor: bgColor }}>
      <BackCover>
        <CustomContainer
          title={translationsPage.title}
          description={translationsPage.description}
          srcImg="/assets/tokarni-roboty-chpk.jpg"
          txtButton={translations.btnSend}
        />
      </BackCover>
      <div className="px-4">
        <FeatureBlock listPeculiarities={listPeculiarities} title={translationsPage.peculiaritiesTitle} />
      </div>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
