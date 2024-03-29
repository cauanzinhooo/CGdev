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
  base: ' rounded-lg font-serif text-2xl  text-white-0 hover:border-slate-50    hover:bg-green-950 hover:duration-75  ',
  variants: {
    color: {
      green: 'bg-green-150 hover:bg-green-100',
      musg: 'bg-green-950 hover:bg-green-100',
      white: 'bg-[#EFEFEF] text-[#C4D352]',
    },
    outlined: {
      true: 'mx-auto flex justify-center rounded-xl hover:border-[1px] hover:border-slate-50 hover:bg-transparent hover:text-slate-50',
    },
    size: {
      md: 'h-[45px] px-8 text-lg ',
      lg: 'h-[52px] px-7',
      xl: 'h-[50px] px-6',
      xxl: ' h-[55px] items-center px-6 text-2xl  ',
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
      <div className="flex items-center font-serif">
        {children}
        {icon && (
          <div className="ml-1" data-testid="button-icon">
            {icon}
          </div>
        )}
      </div>
    </button>
  );
};

export default Button;
