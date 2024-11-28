import Image from 'next/image';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';

interface FeatureBlock {
  title?: string;
  listPeculiarities: { description: string; icon: string }[];
}

const FeatureBlock: React.FC<FeatureBlock> = ({ title, listPeculiarities }) => {
  return (
    <div className="pt-5">
      {title && title.trim() !== '' && <Heading level="h2" text={title} />}
      <ul className="flex flex-col gap-[15px] mt-[15px]">
        {listPeculiarities.map((item, index) => (
          <li className="flex items-center gap-3" key={index}>
            <Image
              src={item.icon}
              alt="Icon"
              width={100}
              height={100}
              className="size-[45px] lg:size-[60px]"
            />
            <Paragraph text={item.description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureBlock;
