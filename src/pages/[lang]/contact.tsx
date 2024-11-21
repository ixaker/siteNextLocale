import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';

const Contact: React.FC<PageProps> = ({ translations }) => {
  return (
    <>
      <h1>{translations.welcome}</h1>
      <h1>{translations.title}</h1>
      <p>{translations['description']}</p>
      <ul>
        <li>
          <strong>{translations['phone']}:</strong> +380 (44) 123-4567
        </li>
        <li>
          <strong>{translations['email']}:</strong> info@mysite.com
        </li>
        <li>
          <strong>{translations['address']}:</strong> Киев, Украина
        </li>
      </ul>
      <p>{translations['footer']}</p>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Contact;
