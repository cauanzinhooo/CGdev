import Image from 'next/image';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const AnnouncementContent: React.FC<{
  image: string;
  children?: React.ReactNode;
}> = ({ image, children }) => {
  return (
    <ScrollAnimation animateIn="animate__fadeInUp">
      <div className="flex w-full flex-col justify-center lg:justify-end ">
        {children}
        <Image width={500} alt="imageAlt" src={image} />
      </div>
    </ScrollAnimation>
  );
};
