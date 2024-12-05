import React from 'react';

interface HeadingProps {
  text: string;
  level: 'h1' | 'h2';
  style?: string;
  alignment?: 'left' | 'center' | 'right' | 'justify';
  display?: 'block' | 'none';
}

const Heading: React.FC<HeadingProps> = ({ text, level, style, alignment = 'left', display = 'block' }) => {
  const Tag = level;
  const baseStyles =
    level === 'h1'
      ? 'text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold'
      : 'text-xl md:text-xl lg:ttext-2xl xl:text-4xl font-semibold';

  return <Tag className={`${baseStyles} text-${alignment} ${style} ${display}`}>{text}</Tag>;
};

export default Heading;
