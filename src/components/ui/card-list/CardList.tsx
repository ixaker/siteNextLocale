import { ProductComponentProps } from '@/context/withStaticPathsAndProps';
import * as Common from '@/context/commonImports';
import Image from 'next/image';

const CardList: React.FC<ProductComponentProps> = (componentProps) => {
  const theme = Common.useTheme();
  const currentTheme = theme.palette.mode === 'dark' ? Common.darkTheme : Common.lightTheme;

  const cardData = componentProps.translationsPage.cardList || [];

  return (
    <div className="max-w-[1550px] w-full my-0 mx-auto px-4">
      <Common.Heading text="Виробництво деталей для залізничної інфраструктури" level="h2" alignment="center" />
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-10 mt-10">
          {cardData.map((card, index) => (
            <li
              style={{
                background: '#e5e7eb',
                boxShadow: currentTheme ? 'rgb(100 100 100 / 55%) 0px 0px 10px 4px' : '0px 0px 10px 4px #ffff',
              }}
              className="p-5 max-w-[300px] drop-shadow-lg shadow-lg group border-[2px] hover:drop-shadow-2xl hover:shadow-2xl hover:border-activeColor transition-all duration-300 ease-in-out cursor-pointer"
              key={index}
            >
              <div>
                <div className="flex items-center min-h-[250px] group-hover:scale-105 transition-all duration-1000 ease-in-out ">
                  <Image width={300} height={300} src={`${card.img}${componentProps.version}`} alt={`Photo ${card.img}`} className="w-full" />
                </div>
                <Common.Paragraph
                  style="text-[#000] font-bold group-hover:text-activeColor transition-all duration-300 ease-in-out"
                  alignment="center"
                  text={card.title}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardList;
