import React from 'react';

type ViewCardRoot = {
  children: React.ReactNode;
  icon: JSX.Element;
};
const viewCardRoot = ({ children, icon }: ViewCardRoot) => {
  return (
    <div className=" h-36 w-36 rounded-md  bg-green-950 ">
      <h2 className="mx-1 mt-4 text-center font-serif text-xl font-bold text-white-0">
        {children}
      </h2>
      <span className="mt-2  flex justify-center text-5xl text-white-0 ">
        {icon}
      </span>
    </div>
  );
};
export default viewCardRoot;
