import React from 'react';

type CardRoot = {
  children: React.ReactNode;
  title: string;
};
const CardProjectRoot = ({ children, title }: CardRoot) => {
  return (
    <div className="relative mx-4 max-w-xl rounded-3xl bg-green-200 pb-7 pt-4">
      <h2 className="mb-3 font-serif text-xl font-bold text-white-0">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default CardProjectRoot;
