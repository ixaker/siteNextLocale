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
import Paragraph from '@/components/ui/typography/Paragraph';
import Heading from '@/components/ui/typography/Heading';

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
          <div className="flex flex-col h-[calc(100vh-120px)] justify-center items-center px-4 md:px-8">
            <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-16 max-w-screen-xl w-full">
              <div className="hidden md:block flex-shrink-0 md:w-[30%] md:h-fill-available lg:w-5/12 shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/assets/lazerna-rizka-01.jpg"
                  alt="lazerna-rizka"
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>

              <div className="flex flex-col gap-6 items-center text-center md:text-left md:items-center md:w-7/12 lg:w-7/12">
                <Heading level="h1" text={translationsPage.title} alignment="center" />
                <Paragraph text={translationsPage.description} alignment="center" />
                <CustomButton variant="send-btn">{translations.btnSend}</CustomButton>
              </div>
            </div>
          </div>
        </CustomContainer>
      </BackCover>
      <section className="mt-5" style={{ color: secondaryColor }}>
        <div className="px-4 py-5">
          <Heading level="h2" text={translationsPage.servicesTitle} alignment="center" />
          <div className="flex flex-col gap-[20px] pt-5 md:flex-row lg:justify-around lg:gap-[0px]">
            <ul className="flex flex-col gap-3 md:flex md:justify-between md:flex-col lg:max-w-[40%]">
              {listServices.map((item, index) => (
                <li key={index}>
                  <Paragraph text={`- ${item.description}`} />
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
        <Heading
          level="h2"
          text={`${translationsPage.advantagesTitle} :`}
          alignment="center"
          style="mt-[20px]"
        />
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
                  <Paragraph text={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-4 pt-5">
          <Paragraph text={translationsPage.descriptionBenefits} alignment="center" />
          <div className="pt-5">
            <Heading level="h2" text={translationsPage.peculiaritiesTitle} />
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
                  <Paragraph text={item.description} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-4 pt-[30px]">
          <Paragraph text={translationsPage.descriptionDifferences} alignment="center" />
        </div>
        <CalculationSection textBtn={translations.btnSend} />
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
