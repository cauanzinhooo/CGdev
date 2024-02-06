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
    <div className="my-5 flex max-w-[250px] flex-col rounded-md">
      <button
        className={` bg-green-150 px-6 py-2 text-xl  font-bold text-white-0 ${
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
