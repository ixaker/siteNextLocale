import Link from 'next/link';

interface CardProps {
  title: string;
  srcImg: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ title, srcImg, href }) => {
  return (
    <div className="group relative rounded-t-lg shadow-md overflow-hidden cursor-pointer">
      <div>
        <img
          className="rounded-t-lg object-cover  h-[250px] w-[250px] xl:w-[300px] transition-transform duration-500 group-hover:scale-105"
          src={srcImg}
          alt=""
          width={300}
          height={200}
        />
      </div>
      <Link
        href={href}
        className="h-[30px] md:h-[50px] absolute bottom-0 left-0 right-0 bg-[#763c00] text-white p-2 transition-all duration-500 ease-in-out transform group-hover:scale-110"
      >
        <p className="text-center text-xs font-semibold md:text-lg">{title}</p>
      </Link>
    </div>
  );
};

export default Card;
