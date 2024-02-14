import React from 'react';

const AnnouncementRoot: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className="w-full  lg:py-0">
      <div className="container mx-auto flex flex-col items-center justify-center py-16 lg:flex-row lg:justify-between">
        {children}
      </div>
    </section>
  );
};
export default AnnouncementRoot;
