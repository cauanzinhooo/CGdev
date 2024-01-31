import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

type CardContent = {
  children: React.ReactNode;
  image: StaticImageData;
};
const CardProjectRoot = ({ children, image }: CardContent) => {
  const [isHover, setIsHover] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });
  const handleHover = () => {
    setIsHover((prev) => !prev);
  };
  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div ref={ref}>
        <Image alt="aaa" src={image} />
      </div>
      {isHover && inView && (
        <div className="absolute left-0 top-0  h-full w-full  hover:bg-green-200 hover:opacity-50">
          {children}
        </div>
      )}
    </div>
  );
};

export default CardProjectRoot;
