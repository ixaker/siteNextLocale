import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';

type ContactPageTranslations = {
  welcome: string;
  title: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  footer: string;
};

const Page: React.FC<PageProps> = ({ translations }) => {
  const translationsContactPage = translations.contactPage as ContactPageTranslations;
  return (
    <>
      <h1>{translationsContactPage.welcome}</h1>
      <h1>{translationsContactPage.title}</h1>
      <p>{translationsContactPage.description}</p>
      <ul>
        <li>
          <strong>{translationsContactPage.phone}:</strong> +380 (44) 123-4567
        </li>
        <li>
          <strong>{translationsContactPage.email}:</strong> info@mysite.com
        </li>
        <li>
          <strong>{translationsContactPage.address}:</strong> Киев, Украина
        </li>
      </ul>
      <p>{translationsContactPage.footer}</p>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
