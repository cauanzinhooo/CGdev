/* eslint-disable react/button-has-type */
import type { ComponentProps } from 'react';
import React from 'react';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    icon?: JSX.Element;
    children: React.ReactNode;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;
const button = tv({
  base: ' rounded-lg font-sans text-2xl text-slate-100 hover:border-slate-50    hover:bg-green-950 hover:duration-75  ',
  variants: {
    color: {
      green: 'bg-[#C4D352]',
      white: 'bg-[#EFEFEF] text-[#C4D352]',
    },
    outlined: {
      true: 'mx-auto flex justify-center rounded-xl hover:border-[1pxx] hover:border-slate-50 hover:bg-transparent hover:text-slate-50',
    },
    size: {
      md: 'h-[40px] px-8 text-xl text-[#1F1F1F]',
      lg: 'h-[52px] px-7',
      xl: 'h-[50px] px-6',
      xxl: ' h-[42px] items-center px-4 text-xl sm:h-[62px] sm:px-6 sm:text-3xl ',
    },
  },
  defaultVariants: {
    color: 'green',
    size: 'md',
  },
});
const Button = ({
  color,
  outlined,
  size,
  icon,
  children,
  type,
}: ButtonProps) => {
  return (
    <button type={type} className={button({ size, outlined, color })}>
      <div className="flex items-center font-sans">
        {children}
        {!!icon && icon}
      </div>
    </button>
  );
};

export default Button;
