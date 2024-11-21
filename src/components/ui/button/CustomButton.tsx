import React, { FC } from 'react';

interface PropsCustomButton {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, title: string) => void;
  variant?:
    | 'non-style'
    | 'menu-btn'
    | 'leng-btn'
    | 'button-themes'
    | 'communication-button';
  className?: string;
}

const CustomButton: FC<PropsCustomButton> = ({
  children,
  onClick,
  variant = 'non-style',
  className,
}) => {
  const buttonClass = {
    'menu-btn': 'font-bold text-xl text-2xl', // Стили для меню
    'leng-btn': 'font-bold text-xl text-[white]', // Стили для языка
    'non-style': '',
    'button-themes': 'rounded-full',
    'communication-button':
      'rounded-full p-4 bg-[black] text-[#c43c1e] hover:bg-slate-800 hover:text-white transition-all duration-300 ease-in-out',
  }[variant];

  return (
    <button
      onClick={
        onClick ? (event) => onClick(event, String(children)) : undefined
      }
      className={`cursor-pointer ${buttonClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
