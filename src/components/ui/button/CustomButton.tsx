import React, { FC } from 'react';

interface PropsCustomButton {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, title: string) => void;
  variant?: 'non-style' | 'menu-btn' | 'leng-btn' | 'button-themes' | 'communication-button';
  className?: string;
  style?: React.CSSProperties;
}

const CustomButton: FC<PropsCustomButton> = ({
  children,
  onClick,
  variant = 'non-style',
  className,
  style,
}) => {
  const buttonClass = {
    'menu-btn':
      'font-bold text-[15px] sm:text-[18px] md:text-[20px] lg:text-[27px] text-[white] hover:text-activeLang transition-all duration-300 ease-in-out',
    'leng-btn': 'font-bold text-lg sm:text-[14px] md:text-[18px] lg:text-[27px] text-[white]',
    'non-style': '',
    'button-themes': 'rounded-full w-10',
    'communication-button':
      ' rounded-full  hover:bg-slate-800 hover:text-white transition-all duration-300 ease-in-out p-2 md:p-4 ',
  }[variant];

  return (
    <button
      onClick={onClick ? (event) => onClick(event, String(children)) : undefined}
      className={`cursor-pointer ${buttonClass} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default CustomButton;
