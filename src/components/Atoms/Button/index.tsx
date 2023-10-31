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
  base: 'rounded-xl font-sans text-2xl text-slate-100 duration-150 hover:border-[1px] hover:border-slate-200 hover:bg-transparent hover:text-slate-50',
  variants: {
    color: {
      green: 'bg-[#A8BF8C]',
      white: 'bg-[#EFEFEF] text-[#A8BF8C]',
    },
    outlined: {
      true: 'mx-auto flex justify-center',
    },
    size: {
      md: 'h-[42px] px-5',
      lg: 'h-[52px] px-7',
      xl: 'h-[60px] px-10',
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
