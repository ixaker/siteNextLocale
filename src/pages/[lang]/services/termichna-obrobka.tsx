import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  return (
    <div>
      <h1>Контент</h1>
      <p>Еще в разработке</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
