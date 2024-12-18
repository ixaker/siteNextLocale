import React from 'react';

interface ParagraphProps {
  text: string;
  style?: string;
  alignment?: 'left' | 'center' | 'right' | 'justify';
}

const Paragraph: React.FC<ParagraphProps> = ({ text, style, alignment = 'left' }) => {
  return <p className={`text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl text-${alignment} ${style}`}>{text}</p>;
};

export default Paragraph;
