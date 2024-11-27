import React from 'react';
import Slider from 'react-slick';

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
            <img src={slide.icon} alt={slide.title} className="size-20 mb-4" />
            <p className="text-center text-[15px]">{slide.title}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
