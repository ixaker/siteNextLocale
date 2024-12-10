import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import Slider from 'react-slick';

interface OurEquipmentProps {
  listEquipment?: { title: string; description: string; image: string }[];
}

const OurEquipment: React.FC<OurEquipmentProps> = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // для экранов шириной до 1024px
        settings: {
          slidesToShow: 2, // показывать 2 слайда на экранах поменьше
        },
      },
      {
        breakpoint: 600, // для экранов шириной до 600px
        settings: {
          slidesToShow: 1, // показывать 1 слайд на экранах еще меньше
        },
      },
    ],
  };
  return (
    <div className="px-[60px] mt-10 w-full max-w-[1620px] mx-auto my-0">
      <Heading level="h2" text="Наше обладнання" alignment="center" display="block" />
      <Slider {...settings} className="mt-5">
        <li className="relative group max-w-[400px]">
          <div className="max-w-[400px]">
            <img
              src="https://maresto.ua/upload/iblock/4e9/konditerka.png"
              alt="konditerka"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[15%] group-hover:h-[65%] overflow-hidden transition-all duration-300 rounded-t-lg rounded-b-[6.9px]">
            <div className="bg-[#000000af] w-[auto] h-full flex flex-col justify-around py-[18px] px-[15px]">
              <Paragraph style="text-[white]" text="Name" alignment="center" />
              <Paragraph
                alignment="center"
                style="text-[white] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </div>
        </li>

        <li className="relative group max-w-[400px]">
          <div className="max-w-[400px]">
            <img
              src="https://maresto.ua/upload/iblock/4e9/konditerka.png"
              alt="konditerka"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[15%] group-hover:h-[65%] overflow-hidden transition-all duration-300 rounded-t-lg rounded-b-[6.9px]">
            <div className="bg-[#000000af] w-full h-full flex flex-col justify-around py-[18px] px-[15px]">
              <Paragraph style="text-[white]" text="Name" alignment="center" />
              <Paragraph
                alignment="center"
                style="text-[white] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </div>
        </li>

        <li className="relative group max-w-[400px]">
          <div className="max-w-[400px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpyitPxMHOm_U-Iu9E9F2MqDfyfUgmixPQY_nHfO23DY9WhnvIBTe48MxFOvrKvuBYshY&usqp=CAU"
              alt="konditerka"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[15%] group-hover:h-[65%] overflow-hidden transition-all duration-300 rounded-t-lg rounded-b-[6.9px]">
            <div className="bg-[#000000af] w-full h-full flex flex-col justify-around py-[18px] px-[15px]">
              <Paragraph style="text-[white]" text="Name" alignment="center" />
              <Paragraph
                alignment="center"
                style="text-[white] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </div>
        </li>

        <li className="relative group max-w-[400px]">
          <div className="max-w-[400px] shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYV2XwYhefE_MpYMtLhyIeFy_HK2kW8u_AQJjDCB0gj4OJWYPx23ysm-YoQPEYQfGjq80&usqp=CAU"
              alt="konditerka"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[15%] group-hover:h-[65%] overflow-hidden transition-all duration-300 rounded-t-lg rounded-b-[6.9px]">
            <div className="bg-[#000000af] w-full h-full flex flex-col justify-around py-[18px] px-[15px]">
              <Paragraph style="text-[white]" text="Name" alignment="center" />
              <Paragraph
                alignment="center"
                style="text-[white] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </div>
        </li>
      </Slider>
    </div>
  );
};

export default OurEquipment;
