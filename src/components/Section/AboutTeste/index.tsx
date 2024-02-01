import 'animate.css/animate.min.css';

import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

import Button from '@/components/Atoms/Button';
import Social from '@/components/Atoms/Social';

type AboutProps = {
  image: string | StaticImport;
  title: string;
  description: string;
};

const AboutSection: React.FC<AboutProps> = ({
  title,
  description,
  image,
}: AboutProps) => {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <main
      id="about"
      className="container relative mx-auto flex flex-col pb-10 lg:flex lg:flex-row lg:justify-between"
    >
      <div>
        <div className="w-full text-center text-[42px] lg:mx-0  lg:text-left">
          <h1 className="mx-auto text-center font-serif text-[43px] font-bold text-green-50  sm:text-[50px] lg:mx-0 lg:mt-10 lg:max-w-[700px] lg:text-left">
            {title}
          </h1>
          <p className="z-20 mx-auto mt-3 flex max-w-[600px] px-1  font-serif text-base  text-white-0 min-[500px]:text-lg lg:mx-0">
            {description}
          </p>

          <div>
            <div className="mt-4 flex flex-col items-center gap-5 sm:flex sm:flex-row sm:justify-center lg:justify-start">
              <ScrollLink
                className=""
                to="contact"
                smooth
                offset={-100}
                duration={600}
              >
                <Button size="md">Contato</Button>
              </ScrollLink>
              {currentPath === '/' && (
                <Link href="/portfolio">
                  <Button color="green" icon={<FaChevronRight />} size="md">
                    Ver Portfólio
                  </Button>
                </Link>
              )}
              {currentPath === '/portfolio' && (
                <ScrollLink to="contact" smooth offset={-100} duration={600}>
                  <Button color="green" icon={<FaChevronRight />} size="md">
                    Ver Portfólio
                  </Button>
                </ScrollLink>
              )}
            </div>
            <Social size="sm" outlined />
          </div>
        </div>
      </div>
      <div>
        <div className="relative flex justify-center">
          <Image width={600} alt="ImageFile" src={image} />
        </div>
      </div>
    </main>
  );
};

export default AboutSection;
