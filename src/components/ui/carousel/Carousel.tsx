import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import Paragraph from '../typography/Paragraph';

interface Slide {
  title: string;
  icon: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="py-5 px-4 flex items-center justify-center">
          <div className="flex gap-5 items-center justify-center h-full">
            <Image src={slide.icon} alt={slide.title} className="size-20 mb-4" width={100} height={100} />
            <Paragraph text={slide.title} alignment="center" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
