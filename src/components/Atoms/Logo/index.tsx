import classNames from 'classnames';
import React from 'react';

export type LogoProps = {
  size?: 'small' | 'large';
};

const Logo = ({ size = 'small' }: LogoProps) => {
  return (
    <div className="">
      <span
        className={`ml-4 text-[40px] ${classNames({
          'text-slate-50 text-[90px] font-mono': size === 'small',
          '  text-[60px] bg-gradient-to-r from-slate-50 via-slate-200  to-green-300 bg-clip-text text-transparent hover:cursor-pointer ':
            size === 'large',
        })}`}
      >
        CGDev!
      </span>
    </div>
  );
};
export default Logo;
