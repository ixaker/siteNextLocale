import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import Paragraph from '../typography/Paragraph';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';

interface Slide {
  title: string;
  icon: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const secondaryColor = currentTheme.palette.secondary.main;

  console.log('secondaryColor', secondaryColor);

  const settings = {
    dots: true,
    // customPaging: (i) => (
    //   <div
    //     className={`size-1.5 rounded-full transition-colors`}
    //     style={{ margin: '0 4px', backgroundColor: secondaryColor, color: 'red' }}
    //   />
    // ),
    // useCSS: true,
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
