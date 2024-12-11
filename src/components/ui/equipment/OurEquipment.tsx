import { ServicesComponentProps } from '@/context/withStaticPathsAndProps';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import Slider from 'react-slick';
import Image from 'next/image';

const OurEquipment: React.FC<ServicesComponentProps> = (componentProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const ourEquipment = componentProps.translationsPage.ourEquipment;

  return (
    <div className="px-4 sm:px-10 mt-10 w-full max-w-[1620px] mx-auto my-0">
      <Heading level="h2" text={componentProps.translationsPage.ourEquipmentTitle} alignment="center" display="block" />
      <Slider {...settings} className="mt-10">
        {ourEquipment.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center bg-white rounded-t-lg shadow-lg  transition-transform duration-300 hover:scale-105"
          >
            <div className="rounded-t-lg h-[300px] flex flex-col items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                objectFit="cover"
                className="rounded-t-lg bg-[white] w-[auto] h-[250px] mb-[70px]"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[25%] group-hover:h-[80%] bg-black bg-opacity-75 transition-all duration-300 rounded-t-lg px-4 py-4 flex flex-col items-center ">
              <Paragraph style="text-white font-semibold text-md" text={item.title} alignment="center" />
              <Paragraph style="text-white font-semibold text-md" text={item.name} alignment="center" />
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                {item.description.map((desc, descIndex) => (
                  <span key={descIndex} className="block text-sm leading-5 text-center mb-2">
                    {desc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurEquipment;
