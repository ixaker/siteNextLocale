interface CardProps {
  title: string;
  srcImg: string;
}
const Card: React.FC<CardProps> = ({ title, srcImg }) => {
  return (
    <div className="flex flex-col rounded-t-lg  w-[300px] h-[600px] mt-[700px]">
      <div>
        <img className="rounded-t-lg" src={srcImg} alt={srcImg} />
      </div>
      <div className="w-auto bg-[#763c00]">
        <h4 className="text-center">{title}</h4>
      </div>
    </div>
  );
};

export default Card;
