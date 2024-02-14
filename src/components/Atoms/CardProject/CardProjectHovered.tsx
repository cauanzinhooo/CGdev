import React from 'react';

type CardHovered = {
  children?: React.ReactNode;
};
const CardProjectHovered = ({ children }: CardHovered) => {
  return (
    <div className="mx-3 my-5 inline-block items-center ">
      <span className="rounded-xl border-[2px]  border-slate-50 px-3 py-1 font-serif text-base font-bold text-white-0">
        {children}
      </span>
    </div>
  );
};

export default CardProjectHovered;
