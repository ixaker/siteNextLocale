import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';
import CustomButton from '@/components/ui/button/CustomButton';
import Image from 'next/image';

const Page: React.FC<PageProps> = ({ translations }) => {
  const translationsPage = translations?.lazernaRizkaPage || langUk.lazernaRizkaPage;

  return (
    <div className="bg-bgImg min-h-screen bg-no-repeat bg-cover shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)]">
      <section className="p-4">
        <div className="flex flex-col-reverse h-screen justify-center">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
            <div className="hidden shadow-[0_10px_30px_#000] max-w-full md:block md:h-full md:bg-none md:max-w-full md:w-[100%]">
              <Image
                src="/assets/lazerna-rizka-01.JPG"
                alt="lazerna-rizka"
                className=" w-full h-full object-cover lg:max-w-max"
                width={100}
                height={100}
              />
            </div>

            <div className="flex flex-col gap-5 h-full md:justify-between">
              <h1 className="text-center font-bold text-[18px] md:text-[20px] lg:text-[25px]">
                {translationsPage.title}
              </h1>
              <p className="text-center text-[14px] md:text-[16px] lg:text-[20px]">
                {translationsPage.description}
              </p>
              <CustomButton variant="send-btn">{translations.btnSend}</CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
