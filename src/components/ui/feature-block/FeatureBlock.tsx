import Image from 'next/image';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';

interface FeatureBlock {
  title?: string;
  listPeculiarities: { description: string; icon?: string }[];
}

const FeatureBlock: React.FC<FeatureBlock> = ({ title, listPeculiarities }) => {
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const secondaryColor = currentTheme.palette.secondary.main;
  return (
    <div className="pt-5">
      {title && title.trim() !== '' && <Heading level="h2" text={title} />}
      <ul className="flex flex-col gap-[15px] mt-[15px]">
        {listPeculiarities.map((item, index) => (
          <li className="flex items-center  gap-3" key={index}>
            {item.icon && (
              <div className="relative flex justify-center items-center ">
                <Image
                  // style={{ boxShadow: `0 10px 30px ${secondaryColor}` }}
                  src={item.icon}
                  alt="Icon"
                  width={100}
                  height={100}
                  className="w-[52px] h-[60px] lg:w-[52px] lg:h-[60px] relative max-w-fit z-[3]"
                />
                <div
                  style={{ boxShadow: `0px 0px 20px 10px ${secondaryColor}`, background: '#c43c1e' }}
                  className="absolute rounded-full size-[50%]  "
                ></div>
              </div>
            )}
            <Paragraph text={item.description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureBlock;
