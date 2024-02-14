import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const AnnouncementText: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  return (
    <ScrollAnimation
      className="mx-auto flex w-full flex-col justify-center gap-5 sm:w-[600px]  lg:mx-0 "
      animateIn="animate__fadeInLeft"
      animateOnce
    >
      {children}
    </ScrollAnimation>
  );
};
export default AnnouncementText;
