import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../../context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';
import CustomButton from '@/components/ui/button/CustomButton';
import Image from 'next/image';
import Carousel from '@/components/ui/carousel/Carousel';

import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';
import BackCover from '@/components/ui/back-cover/BackCover';
import CustomContainer from '@/components/ui/container/CustomContainer';
import CalculationSection from '@/components/ui/calculation-section/CalculationSection';

const Page: React.FC<PageProps> = ({ translations }) => {
  const translationsPage = translations?.lazernaRizkaPage || langUk.lazernaRizkaPage;
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  const listtAdvantages = translationsPage.listAdvantages;
  const listPeculiarities = translationsPage.listPeculiarities;
  const listServices = translationsPage.listServices;

  return (
    <div style={{ backgroundColor: bgColor }}>
      <BackCover>
        <CustomContainer>
          <div className="flex flex-col-reverse h-[calc(100vh-120px)] justify-center">
            <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
              <div className="hidden shadow-[0_10px_30px_#000] max-w-full md:block md:h-full md:bg-none md:max-w-full md:w-[100%]">
                <Image
                  src="/assets/lazerna-rizka-01.jpg"
                  alt="lazerna-rizka"
                  className="w-full max-w-full h-full object-cover lg:max-w-max"
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
        </CustomContainer>
      </BackCover>
      <section className="mt-5" style={{ color: secondaryColor }}>
        <div className="px-4 py-5">
          <p className="font-bold text-[20px] text-center md:text-[30px]">{translationsPage.servicesTitle}</p>
          <div className="flex flex-col gap-[20px] pt-5 md:flex-row lg:justify-around lg:gap-[0px]">
            <ul className="flex flex-col gap-3 md:flex md:justify-between md:flex-col lg:max-w-[40%]">
              {listServices.map((item, index) => (
                <li key={index}>
                  <p className="text-[18px] md:text-[20px] lg:text-[25px]">- {item.description}</p>
                </li>
              ))}
            </ul>
            <div className="relative xl:max-w-[50%]">
              <Image
                alt="lazerna-rizka"
                src="/assets/lazerna-rizka-02.WEBP"
                width={100}
                height={100}
                className="size-full shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)] w-full rounded-[10px] md:w-[auto] md:max-w-[400px] xl:max-w-[600px]"
              />
              <CustomButton className="mt-5 w-full text-nowrap absolute bottom-0" variant="send-btn">
                {translations.btnSend}
              </CustomButton>
            </div>
          </div>
        </div>
        <p className="mt-[20px] text-center w-full font-semibold text-[17px] md:text-[30px]">
          {translationsPage.advantagesTitle} :
        </p>
        <div className="py-[30px] ">
          <div className="md:hidden">
            <Carousel slides={listtAdvantages} />
          </div>
          <div className="px-4 hidden border-y-2 border-black py-5 md:block">
            <ul className="flex gap-4">
              {listtAdvantages.map((item, index) => (
                <li className="flex items-center gap-3" key={index}>
                  <Image
                    alt="icon"
                    src={item.icon}
                    width={100}
                    height={100}
                    className="size-[50px] lg:size-[60px] xl:size-[100px]"
                  />
                  <p className="text-[12px] lg:text-[15px] xl:text-[20px]">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-4 pt-5">
          <p className="text-center lg:text-[18px]">{translationsPage.descriptionBenefits}</p>
          <div className="pt-5">
            <h2 className="font-bold text-[20px] lg:text-[30px]">{translationsPage.peculiaritiesTitle}</h2>
            <ul className="flex flex-col gap-[15px] mt-[15px]">
              {listPeculiarities.map((item, index) => (
                <li className="flex items-center gap-3" key={index}>
                  <Image
                    src={item.icon}
                    alt="Icon"
                    width={100}
                    height={1000}
                    className="size-[45px] lg:size-[60px]"
                  />
                  <p className="text-[15px] lg:text-[20px]">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-4 pt-[30px]">
          <p className="text-center lg:text-[18px]">{translationsPage.descriptionDifferences}</p>
        </div>
        <CalculationSection textBtn={translations.btnSend} />
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
