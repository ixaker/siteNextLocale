import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';
import DynamicHead from '@/components/shared/DynamicHead';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import langUk from '../../../locales/uk.json';
import RoomIcon from '@mui/icons-material/Room';
import CustomButton from '@/components/ui/button/CustomButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import dynamic from 'next/dynamic';
import Heading from '@/components/ui/typography/Heading';
import BackCover from '@/components/ui/back-cover/BackCover';

const DynamicInteractiveMap = dynamic(() => import('@/components/ui/InteractiveMap/InteractiveMap'), {
  ssr: false, // Отключаем SSR для этого компонента
});

const Page: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsPage = translations?.contactPage || langUk.contactPage;

  const [fullUrl, setFullUrl] = useState('');
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const secondaryColor = currentTheme.palette.secondary.main;
  const primaryColor = currentTheme.palette.primary.main;
  const bgColor = currentTheme.palette.background.default;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, []);

  function hexToRgba(hex: string, alpha: number): string {
    const [r, g, b] = hex.match(/\w\w/g)?.map((c) => parseInt(c, 16)) ?? [0, 0, 0];
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const bgColorWithTransparency: string = hexToRgba(bgColor, 0.5);

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
      <BackCover>
        <div
          className="min-w-screen min-h-[calc(100vh-140px)] flex flex-col justify-center pb-[20px]"
          style={{ color: secondaryColor }}
        >
          <div
            className="min-w-screen px-4 py-8 mt-[130px]"
            style={{ backgroundColor: bgColorWithTransparency }}
          >
            <Heading level="h1" text={translationsPage.title} alignment="center" />
            <div className="mt-[20px] flex justify-center items-center ">
              <ul className="flex flex-col gap-10 w-auto">
                <li className="flex gap-[30px] items-center">
                  <a target="_blank" href={translationsPage.address} aria-label={translationsPage.address}>
                    <CustomButton
                      ariaLabel={translationsPage.address}
                      style={{ backgroundColor: primaryColor, boxShadow: `0 10px 30px ${secondaryColor}` }}
                      variant="communication-button"
                    >
                      <RoomIcon style={{ color: secondaryColor }} className="md:size-[35px] lg:size-[40px]" />
                    </CustomButton>
                  </a>
                  <div className="flex flex-col">
                    <span className="text-[18px] font-bold md:text-[25px] ">{translationsPage.address}</span>
                    <span className="text-[12px] font-extralight md:text-[15px]  ">
                      {translationsPage.descriptionAddress}
                    </span>
                  </div>
                </li>
                <li className="flex gap-[30px] items-center">
                  <a target="_blank" href="mailto:info@qpart.com.ua" aria-label={translationsPage.email}>
                    <CustomButton
                      ariaLabel={translationsPage.email}
                      style={{ backgroundColor: primaryColor, boxShadow: `0 10px 30px ${secondaryColor}` }}
                      variant="communication-button"
                    >
                      <EmailIcon
                        style={{ color: secondaryColor }}
                        className="md:size-[35px] lg:size-[40px]"
                      />
                    </CustomButton>
                  </a>
                  <div className="flex flex-col">
                    <span className="text-[18px] font-bold md:text-[25px] ">{translationsPage.email}</span>
                    <span className="text-[12px] font-extralight md:text-[15px]  ">
                      {translationsPage.descriptionEmail}
                    </span>
                  </div>
                </li>
                <li className="flex gap-[30px] items-center">
                  <a target="_blank" href="tel:+380989950760" aria-label={translationsPage.phone}>
                    <CustomButton
                      ariaLabel={translationsPage.phone}
                      style={{ backgroundColor: primaryColor, boxShadow: `0 10px 30px ${secondaryColor}` }}
                      variant="communication-button"
                    >
                      <PhoneIcon
                        style={{ color: secondaryColor }}
                        className="md:size-[35px] lg:size-[40px]"
                      />
                    </CustomButton>
                  </a>
                  <div className="flex flex-col">
                    <span className="text-[18px] font-bold md:text-[25px] ">{translationsPage.phone}</span>
                    <span className="text-[12px] font-extralight md:text-[15px]  ">
                      {translationsPage.descriptionPhone}
                    </span>
                  </div>
                </li>
              </ul>
              <div className="hidden relative w-full h-[268px] md:block max-w-[451px]">
                <DynamicInteractiveMap companyLocation={{ lat: 48.499937, lng: 35.038598 }} />
              </div>
            </div>
          </div>
        </div>
      </BackCover>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
