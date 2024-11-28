import Image from 'next/image';
import Carousel from '../carousel/Carousel';
import Paragraph from '../typography/Paragraph';
import Heading from '../typography/Heading';

interface ListBenefitsProps {
  heading?: string;
  orderBenefits: { title: string; icon: string }[];
}

const ListBenefits: React.FC<ListBenefitsProps> = ({ heading, orderBenefits }) => {
  return (
    <section>
      {heading && heading.trim() !== '' && (
        <Heading level="h2" text={`${heading} :`} alignment="center" style="mt-[20px]" />
      )}
      <div className="py-[30px]">
        <div className="md:hidden">
          <Carousel slides={orderBenefits} />
        </div>
        <div className="px-4 hidden border-y-2 border-black py-5 md:block">
          <ul className="flex gap-4">
            {orderBenefits.map((item, index) => (
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
    </section>
  );
};

export default ListBenefits;
