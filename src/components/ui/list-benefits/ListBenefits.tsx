import Image from 'next/image';
import Carousel from '../carousel/Carousel';
import Paragraph from '../typography/Paragraph';
import Heading from '../typography/Heading';
import { ProductComponentProps } from '@/context/withStaticPathsAndProps';

const ListBenefits: React.FC<ProductComponentProps> = (componentProps) => {
  const translationsPage = componentProps.translationsPage;
  return (
    <section>
      {translationsPage.orderBenefitsTitle && translationsPage.orderBenefitsTitle.trim() !== '' && (
        <Heading level="h2" text={`${translationsPage.orderBenefitsTitle} :`} alignment="center" style="mt-[20px]" />
      )}
      <div className="py-[30px]">
        <div className="md:hidden">
          <Carousel version={componentProps.version} slides={translationsPage.listOrderBenefits} />
        </div>
        <div className="px-4 hidden border-y-2 border-black py-5 md:block">
          <ul className="flex gap-1">
            {translationsPage.listOrderBenefits.map((item, index) => (
              <li className="flex items-center gap-3" key={index}>
                <Image
                  alt="icon"
                  src={`${item.icon}${componentProps.version}`}
                  width={100}
                  height={100}
                  className="size-[50px] lg:size-[60px] xl:size-[100px]"
                  loading="lazy"
                />
                <Paragraph text={item.title} style={`transition-opacity duration-700 delay-[200ms]`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ListBenefits;
