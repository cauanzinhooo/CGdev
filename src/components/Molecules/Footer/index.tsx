import Image from 'next/image';
import React from 'react';
import { tv } from 'tailwind-variants';

import LineMenu from '@/components/Atoms/LineMenu';
import Social from '@/components/Atoms/Social';
import LogoCG from '@/public/assets/images/cgDev.svg';

const footer = tv({
  base: 'mt-12 w-full bg-green-950',
  variants: {
    colored: {
      green: 'bg-green-200',
    },
  },
});
type FooterProps = {
  colored?: 'green';
};

const Footer: React.FC<FooterProps> = ({ colored }) => {
  return (
    <footer className={footer({ colored })}>
      <div className="container mx-auto flex flex-col items-center justify-center ">
        <Image
          className="mt-5"
          width={140}
          height={100}
          alt="IMAGE"
          src={LogoCG}
        />
        <div className="mb-2 flex  text-lg">
          <LineMenu direction="row" />
        </div>
        <div className="flex flex-col items-center font-serif text-lg text-green-50">
          <Social size="xs" outlined="sized" />
          <p className="text-center">
            &copy; CGDev 2024. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
