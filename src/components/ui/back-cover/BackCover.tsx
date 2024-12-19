import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface BackCoverProps {
  children: React.ReactNode;
  bgImg?: string;
  version: string;
}

const BackCover: React.FC<BackCoverProps> = ({ children, bgImg, version }) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const [backgroundImage, setBackgroundImage] = useState('/bgImg.webp');

  useEffect(() => {
    setBackgroundImage(isSmallScreen && bgImg ? bgImg : '/bgImg.webp');
  }, [isSmallScreen, bgImg]);

  return (
    <div
      style={{
        backgroundColor: '#2d2d2d',
        backgroundImage: `url(${backgroundImage}${version})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="relative min-h-auto md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[90vh] shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)]"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0 sm:bg-black sm:bg-opacity-0"></div>
      {children}
    </div>
  );
};

export default BackCover;
