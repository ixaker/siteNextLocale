import * as Common from '@/context/commonImports';
import { withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';
import { Email, Phone, Room } from '@mui/icons-material';
import dynamic from 'next/dynamic';

const DynamicInteractiveMap = dynamic(() => import('@/components/ui/InteractiveMap/InteractiveMap'), {
  ssr: false, // Отключаем SSR для этого компонента
});

const Page: React.FC<Common.PageProps> = ({ ...restProps }) => {
  const translationsPage = restProps.translations.contactPage;
  const componentProps: Common.ContactComponentsProps = { ...restProps, translationsPage };
  const listContacts = translationsPage.listContacts;
  const theme = Common.useTheme();
  const currentTheme = theme.palette.mode === 'dark' ? Common.darkTheme : Common.lightTheme;
  const secondaryColor = currentTheme.palette.secondary.main;
  const primaryColor = currentTheme.palette.primary.main;
  const bgColor = currentTheme.palette.background.default;

  const requiredItem = (id: string, title: string, description: string) => {
    let href = `tel:${description}`;
    let Icon: React.ElementType = Phone;

    if (id === 'address') {
      href = 'https://maps.app.goo.gl/jPbgbWosaTq8GeNe7';
      Icon = Room;
    } else if (id === 'email') {
      href = `mailto:${description}`;
      Icon = Email;
    }

    return (
      <div className="flex gap-[30px] items-center">
        <a target="_blank" href={href} aria-label={title}>
          <Common.CustomButton
            ariaLabel={title}
            style={{ backgroundColor: primaryColor, boxShadow: `0 10px 30px ${secondaryColor}` }}
            variant="communication-button"
          >
            <Icon className="md:size-[35px] lg:size-[40px] " style={{ color: secondaryColor }} />
          </Common.CustomButton>
        </a>
        <div className="flex flex-col">
          <span className="text-[18px] font-bold md:text-[25px] ">{title}</span>
          <span className="text-[12px] font-extralight md:text-[15px]  ">{description}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <Common.DynamicHead {...componentProps} />
      <Common.BackCover version={componentProps.version}>
        <div
          className="min-w-screen min-h-[calc(100vh-140px)] flex flex-col justify-center pb-[20px] relative z-10"
          style={{ color: secondaryColor }}
        >
          <div className="min-w-screen px-4 py-8 mt-[130px] md:mt-[150px] lg:mt-[170px] xl:mt-[200px]" style={{ backgroundColor: `${bgColor}e6` }}>
            <Common.Heading level="h1" text={translationsPage.title} alignment="center" />
            <div className="mt-[20px] flex justify-center items-center ">
              <ul className="flex flex-col gap-10 w-auto">
                {listContacts.map((item, index) => (
                  <li key={index}>{requiredItem(item.id, item.title, item.description)}</li>
                ))}
              </ul>
              <DynamicInteractiveMap {...componentProps} />
            </div>
          </div>
        </div>
      </Common.BackCover>
    </>
  );
};

export const getStaticPaths: Common.GetStaticPaths = withStaticPaths;
export const getStaticProps: Common.GetStaticProps = withStaticProps;

export default Page;
