import React from 'react';

type ButtonRenderRoot = {
  children: React.ReactNode;
  onclick?: () => void;
  selectedStep?: string;
};
const buttonRenderRoot = ({
  children,
  onclick,
  selectedStep,
}: ButtonRenderRoot) => {
  return (
    <div className="mx-auto  my-[11px] flex max-w-[100px] flex-col  rounded-md lg:mx-0">
      <button
        className={` rounded-md bg-green-950 px-8 py-5 text-2xl  font-bold text-white-0 ${
          selectedStep === children ? '!bg-green-100 ' : ''
        }`}
        onClick={onclick}
        type="button"
      >
        {children}
      </button>
    </div>
  );
};
export default buttonRenderRoot;
