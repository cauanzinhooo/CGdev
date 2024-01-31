import React from 'react';

type CardHovered = {
  children: React.ReactNode;
};
const CardProjectHovered = ({ children }: CardHovered) => {
  return (
    <div className="inline items-center bg-red-400">
      <span className=" rounded-lg border-[1px] border-white-0 px-5 py-1 font-serif font-bold text-white-0">
        {children}
      </span>
    </div>
  );
};

export default CardProjectHovered;
