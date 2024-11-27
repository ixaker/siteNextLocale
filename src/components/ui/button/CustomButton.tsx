import React, { FC } from 'react';

interface PropsCustomButton {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, title: string) => void;
  variant?: 'non-style' | 'menu-btn' | 'leng-btn' | 'communication-button' | 'send-btn';
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

const CustomButton: FC<PropsCustomButton> = ({
  children,
  onClick,
  variant = 'non-style',
  className,
  style,
  ariaLabel,
}) => {
  const buttonClass = {
    'menu-btn':
      'font-bold text-[12px] sm:text-[18px] md:text-[20px] lg:text-[27px] text-[white] hover:text-activeColor transition-all duration-300 ease-in-out',
    'leng-btn': 'font-bold text-lg sm:text-[14px] md:text-[18px] lg:text-[27px] text-[white]',
    'non-style': '',
    'communication-button':
      'shadow-[0_10px_30px_#000] rounded-full pt-[16px] pl-[18px] pr-[18px] pb-[16px] md:p-4 ',
    'send-btn':
      'shadow-[0_10px_30px_#000] bg-[#c43c1e] text-[#f9f7dc] text-[15px] sm:text-[20px] px-3 py-2 sm:px-10 sm:py-2 rounded-[10px] hover:bg-[#9e2a1f] hover:text-[#fff] transition-all duration-300 ease-in-out',
  }[variant];

  return (
    <button
      onClick={onClick ? (event) => onClick(event, String(children)) : undefined}
      className={`cursor-pointer ${buttonClass} ${className}`}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default CustomButton;
