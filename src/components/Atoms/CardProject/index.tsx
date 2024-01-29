import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useState } from 'react';

type CardProps = {
  title: string;
  image: StaticImageData;
};

const CardProject = ({ title, image }: CardProps) => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(true);
  };

  return (
    <div className="relative max-w-xl rounded-3xl bg-green-200 pb-7 pt-5">
      <h2 className="font-serif text-lg font-bold text-white-0">{title}</h2>
      <div className="relative overflow-hidden">
        <Image
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className="hover:opacity-40"
          alt="aaa"
          src={image}
        />
        {isHover && (
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-green-200 opacity-50">
            <p className="text-white font-bold">Texto sobreposto</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProject;
