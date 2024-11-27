import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';
import CustomButton from '@/components/ui/button/CustomButton';
import Image from 'next/image';
import Carousel from '@/components/carousel/Carousel';

import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';

const Page: React.FC<PageProps> = ({ translations }) => {
  const translationsPage = translations?.lazernaRizkaPage || langUk.lazernaRizkaPage;
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  const listtAdvantages = translationsPage.listAdvantages;
  const listPeculiarities = translationsPage.listPeculiarities;

  console.log('listPeculiarities', listPeculiarities);

  return (
    <div style={{ backgroundColor: bgColor }}>
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

              <div className="flex flex-col gap-5 h-full md:justify-between md:items-center">
                <h1 className="text-center font-bold text-[18px] md:text-[20px] lg:text-[30px] lg:w-[80%]">
                  {translationsPage.title}
                </h1>
                <p className="text-center text-[14px] md:text-[16px] lg:text-[22px]">
                  {translationsPage.description}
                </p>
                <CustomButton variant="send-btn">{translations.btnSend}</CustomButton>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="mt-5" style={{ color: secondaryColor }}>
        <p className="text-center w-full font-semibold text-[20px] lg:text-[30px]">
          {translationsPage.advantagesTitle} :
        </p>
        <div className="py-10">
          <div className="md:hidden">
            <Carousel slides={listtAdvantages} />
          </div>
          <div className="px-4 hidden border-y-2 border-black py-5 md:block">
            <ul className="flex justify-between">
              {listtAdvantages.map((item, index) => (
                <li className="flex items-center gap-3" key={index}>
                  <Image
                    alt="icon"
                    src={item.icon}
                    width={100}
                    height={100}
                    className="size-[50px] lg:size-[70px]"
                  />
                  <p className="text-[12px] lg:text-[15px]">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-4 pt-5">
          <p className="text-center">{translationsPage.descriptionBenefits}</p>
          <div className="pt-5">
            <h2 className="font-bold text-[20px]">{translationsPage.peculiaritiesTitle}</h2>
            <ul className="flex flex-col gap-[15px] mt-[15px]">
              {listPeculiarities.map((item, index) => (
                <li className="flex items-center gap-3" key={index}>
                  <Image src={item.icon} alt="Icon" width={100} height={1000} className="size-[45px]" />
                  <p className="text-[15px] ">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
