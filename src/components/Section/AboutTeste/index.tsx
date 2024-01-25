import 'animate.css/animate.min.css';

import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { Link as ScrollLink } from 'react-scroll';
import { tv } from 'tailwind-variants';

import Social from '@/components/Atoms/Social';

const aboutSection = tv({
  base: 'mx-auto text-center font-serif text-[43px] font-bold text-green-50 sm:text-[50px] lg:mx-0 lg:mt-10 lg:max-w-[700px] lg:text-left',
  variants: {
    colorTitle: {
      lowGreen: 'text-green-50',
    },
  },
});
const coloredButton = tv({
  base: 'mx-auto text-center font-serif text-[43px] font-bold  sm:text-[50px] lg:mx-0 lg:mt-10 lg:max-w-[700px] lg:text-left',
  variants: {
    colorTitle: {
      green: 'text-slate-50',
      lowGreen: 'text-green-50',
    },
  },
});
type ColorTitle = 'green' | 'lowGreen';
type AboutProps = {
  href: string;
  colorTitle: ColorTitle;
  image: string | StaticImport;
  title: string;
  description: string;
};

const AboutSection: React.FC<AboutProps> = ({
  title,
  description,

  image,
  colorTitle,
  href,
}: AboutProps) => {
  return (
    <main
      id="about"
      className="container relative mx-auto flex flex-col pb-10 lg:flex lg:flex-row lg:justify-between"
    >
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
        <div className="w-full text-center text-[42px] lg:mx-0  lg:text-left">
          <h1 className={aboutSection({ colorTitle })}>{title}</h1>
          <p className="z-20 mx-auto mt-3 flex max-w-[600px] px-1  font-serif text-base  text-white-0 min-[500px]:text-lg lg:mx-0">
            {description}
          </p>

          <div>
            <div className="mt-7 flex flex-col items-center gap-6 sm:flex sm:flex-row sm:justify-center lg:justify-start">
              <button
                className="h-[40px]  rounded-lg bg-green-100 px-8 font-serif text-xl text-white-0 hover:bg-green-150"
                type="button"
              >
                <ScrollLink to="contact" smooth offset={-100} duration={600}>
                  Contato
                </ScrollLink>
              </button>
              <button
                className="h-[40px]  rounded-lg bg-green-100 px-8 font-serif text-xl text-white-0 hover:bg-green-150"
                type="button"
              >
                {href ? (
                  <Link href="/contato">Contato</Link>
                ) : (
                  <span>Contato</span>
                )}
              </button>
              {/* <Button size="md">Contato</Button>
              <Button color="green" icon={<FaChevronRight />} size="md">
                Ver Portfólio
              </Button> */}
            </div>
            <Social size="sm" outlined />
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__fadeInDown" animateOnce>
        <div className="relative flex justify-center">
          <Image width={600} alt="ImageFile" src={image} />
        </div>
      </ScrollAnimation>
    </main>
  );
};

export default AboutSection;
