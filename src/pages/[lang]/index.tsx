import { GetStaticPaths, GetStaticProps } from 'next';
import CustomButton from '@/components/ui/button/CustomButton';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';

const Home: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations.homePage;

  const [fullUrl, setFullUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, []);

  return (
    <>
      <DynamicHead
        title={translationsPage.meta.title}
        description={translationsPage.meta.description}
        keywords={translationsPage.meta.keywords}
        canonical={fullUrl}
        imgOg={translationsPage.meta.imgOg}
        lang={lang}
        localeOg={translations.locale}
      />
      <div className="pl-4 pr-4">
        <div className="flex flex-col justify-center items-center sm:absolute sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:inline">
          <div>
            <h1 className="text-[20px] text-center w-full sm:text-start sm:text-[40px] md:text-[55px] lg:text-[70px] font-semibold">
              {translationsPage.topTitle}
              <br />
              {translationsPage.bottomTitle}
            </h1>
          </div>
          <p className="text-center text-[12px] sm:text-start sm:text-[20px] text-[#f9f7dc] pt-5">
            {translationsPage.description}
          </p>
          <CustomButton variant="send-btn">{translationsPage.btnSend}</CustomButton>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
