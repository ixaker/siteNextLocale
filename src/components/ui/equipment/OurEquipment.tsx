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
        breakpoint: 1280, // для экранов шириной до 1024px
        settings: {
          slidesToShow: 2, // показывать 2 слайда на экранах поменьше
        },
      },
      {
        breakpoint: 640, // для экранов шириной до 600px
        settings: {
          slidesToShow: 1, // показывать 1 слайд на экранах еще меньше
        },
      },
    ],
  };
  return (
    <div className="px-[10px] sm:px-[60px] mt-10 w-full max-w-[1620px] mx-auto my-0">
      <Heading level="h2" text="Наше обладнання" alignment="center" display="block" />
      <Slider {...settings} className="mt-5">
        <li className="relative group xl:max-w-[420px]  2xl:max-w-[420px] bg-[white] rounded-lg p-3">
          <div className=" xl:max-w-[420px] 2xl:max-w-[420px]">
            <img src="/assets/frezer.webp" alt="konditerka" className="w-full h-full rounded-lg" />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[15%] group-hover:h-[65%] overflow-hidden transition-all duration-300 rounded-t-lg rounded-b-[6.9px]">
            <div className="bg-[#000000af] w-[auto] h-full flex flex-col justify-around py-2 px-2">
              <Paragraph style="text-[white]" text="Boehringer VDF 250C-U" alignment="center" />
              <div className="text-[white] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                {/* <Paragraph text="Система управления	B32T" />
                <Paragraph text="Диаметр точения (мм)	400" />
                <Paragraph text="Длина точения (мм)	1000" />
                <Paragraph text="Диаметр отверстия в шпинделе (мм)	78" />
                <Paragraph text="Быстрое перемещение по осям Х/Z (м/мин)	10" />
                <Paragraph text="Инструментальных мест в револьвере (шт)	12" /> */}
                <span>Диаметр точения (мм) 400</span>
                <span>Длина точения (мм) 1000</span>
                <span>Диаметр отверстия в шпинделе (мм) 78</span>
                <span>Быстрое перемещение по осям Х/Z (м/мин) 10</span>
                <span>Инструментальных мест в револьвере (шт) 12</span>
              </div>
            </div>
          </div>
        </li>

        <li className="relative group  xl:max-w-[350px] 2xl:max-w-[400px] ">
          <div className=" xl:max-w-[350px] 2xl:max-w-[400px]">
            <img src="https://maresto.ua/upload/iblock/4e9/konditerka.png" alt="konditerka" className="w-full h-full rounded-lg" />
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

        {/* <li className="relative group  xl:max-w-[350px] 2xl:max-w-[400px]">
          <div className="xl:max-w-[350px] 2xl:max-w-[400px]">
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
        </li> */}

        {/* <li className="relative group  xl:max-w-[350px] 2xl:max-w-[400px]">
          <div className=" xl:max-w-[350px] 2xl:max-w-[400px]">
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
        </li> */}
      </Slider>
    </div>
  );
};

export default OurEquipment;
