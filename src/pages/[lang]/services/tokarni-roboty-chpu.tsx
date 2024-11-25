import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths } from '../../../context/withStaticPathsAndProps';

interface Props {
  translations: { [key: string]: string };
}

const Page: React.FC<Props> = ({ translations }) => {
  return (
    <div>
      <h1>{translations.welcome}</h1>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
