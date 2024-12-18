import { Heading } from '@/context/commonImports';
import { PageProps, withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';
import { GetStaticPaths, GetStaticProps } from 'next';

const UserAgreement: React.FC<PageProps> = (pageProps) => {
  const translationPage = pageProps.translations.userAgreement.userAgreementPage;
  return (
    <>
      <div className="w-full max-h-[170px]  bg-[url('/assets/bg-user-agreement.webp')] bg-cover bg-no-repeat"></div>
      <section className="mt-10">
        <Heading level="h1" text={translationPage.title} />
      </section>
    </>
  );
};

export default UserAgreement;

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;
