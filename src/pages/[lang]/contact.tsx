import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';
import DynamicHead from '@/components/shared/DynamicHead';

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations.contactPage;
  return (
    <>
      <DynamicHead
        title={translationsPage.meta.title}
        description={translationsPage.meta.description}
        keywords={translationsPage.meta.keywords}
        canonical=""
        imgOg={translationsPage.meta.imgOg}
        lang={lang}
        localeOg={translations.locale}
      />
      <h1>{translationsPage.welcome}</h1>
      <h1>{translationsPage.title}</h1>
      <p>{translationsPage.description}</p>
      <ul>
        <li>
          <strong>{translationsPage.phone}:</strong> +380 (44) 123-4567
        </li>
        <li>
          <strong>{translationsPage.email}:</strong> info@mysite.com
        </li>
        <li>
          <strong>{translationsPage.address}:</strong> Киев, Украина
        </li>
      </ul>
      <p>{translationsPage.footer}</p>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
