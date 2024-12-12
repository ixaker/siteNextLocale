import { ServicesComponentProps } from '@/context/withStaticPathsAndProps';
import InfoCard from './InfoCard';

const InfoCardList: React.FC<ServicesComponentProps> = (componentProps) => {
  const cardList = componentProps.translationsPage.infoCard;

  return (
    <section className="sm:px-4 mt-6">
      {cardList.map((item, index) => (
        <div key={index}>
          <InfoCard
            aligntText={index % 2 === 0 ? 'end' : 'start'}
            direction={index % 2 === 0 ? 'row-reverse' : 'row'}
            srcImg={item.image}
            title={item.title}
            descriptionCard={!item.list || item.list.length === 0 ? item.description : undefined}
            list={item.list}
          />
        </div>
      ))}
    </section>
  );
};

export default InfoCardList;
