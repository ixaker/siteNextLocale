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

  const contactsData = [
    {
      title: translationsPage.address,
      description: translationsPage.descriptionAddress,
      icon: RoomIcon,
      link: 'https://g.co/kgs/H9ewmuP',
    },
    {
      title: translationsPage.email,
      description: translationsPage.descriptionEmail,
      icon: EmailIcon,
      link: '',
    },
    {
      title: translationsPage.phone,
      description: translationsPage.descriptionPhone,
      icon: PhoneIcon,
      link: '+380505917397',
    },
  ];

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
      <section className="bg-bgImg max-h-[calc(100vh-137px)] bg-no-repeat bg-cover shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)]">
        <div className="flex h-screen items-center lg:items-center">
          <div className="w-full h-fit px-4 py-8" style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}>
            <Heading level="h1" text={translationsPage.title} alignment="center" />
            <div className="mt-[20px] flex justify-center items-center ">
              <ul className="flex flex-col gap-10 w-auto">
                {contactsData.map((item, index) => (
                  <li className="flex gap-[30px] items-center" key={index}>
                    <a target="_blank" href={item.link} aria-label={item.title}>
                      <CustomButton
                        ariaLabel={item.title}
                        style={{ backgroundColor: primaryColor }}
                        variant="communication-button"
                        className="shadow-[0_10px_30px_#fff]"
                      >
                        <item.icon
                          style={{ color: secondaryColor }}
                          className="md:size-[35px] lg:size-[40px]"
                        />
                      </CustomButton>
                    </a>
                    <div className="flex flex-col">
                      <span className="text-[18px] font-bold md:text-[25px] ">{item.title}</span>
                      <span className="text-[12px] font-extralight md:text-[15px]  ">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hidden relative w-full h-[268px] md:block max-w-[451px]">
                <DynamicInteractiveMap companyLocation={{ lat: 48.499937, lng: 35.038598 }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Page;
