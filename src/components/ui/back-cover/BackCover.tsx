import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

interface BackCoverProps {
  children: React.ReactNode;
  bgImg?: string;
}

const BackCover: React.FC<BackCoverProps> = ({ children, bgImg }) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const [backgroundImage, setBackgroundImage] = useState<string | undefined>(bgImg);

  useEffect(() => {
    if (isSmallScreen) {
      setBackgroundImage(bgImg || `/bgImg.webp?v=${new Date().getTime()}`);
    } else {
      setBackgroundImage(`/bgImg.webp?v=${new Date().getTime()}`);
    }
  }, [isSmallScreen, bgImg]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[90vh] shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)]"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0 sm:bg-black sm:bg-opacity-0"></div>

      {children}
    </div>
  );
};

export default BackCover;
