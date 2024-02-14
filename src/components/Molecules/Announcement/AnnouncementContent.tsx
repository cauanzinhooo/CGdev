import Image from 'next/image';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const AnnouncementContent: React.FC<{
  image: string;
}> = ({ image }) => {
  return (
    <ScrollAnimation animateIn="animate__fadeInUp">
      <div className="flex w-full justify-center lg:justify-end ">
        <Image width={500} alt="imageAlt" src={image} />
      </div>
    </ScrollAnimation>
  );
};
