import { motion, useAnimation } from 'framer-motion';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
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
  const controls = useAnimation();
  const currentPath = router.pathname;

  const restartAnimation = async () => {
    await controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    });
  };

  useEffect(() => {
    restartAnimation();
  }, [router.pathname]);

  return (
    <main
      id="about"
      className="container relative mx-auto flex flex-col pb-10 lg:flex lg:flex-row lg:justify-between"
    >
      <motion.div
        className="mt-3 flex flex-wrap justify-center gap-10"
        initial={{ opacity: 0, y: -200 }}
        animate={controls}
      >
        <div className="w-full text-center text-[42px] lg:mx-0  lg:text-left">
          <h1 className="mx-auto text-center font-serif text-[43px] font-bold text-[#AAB444]  sm:text-[50px] lg:mx-0 lg:mt-10 lg:max-w-[700px] lg:text-left">
            {title}
          </h1>
          <p className="z-20 mx-auto mt-3 flex max-w-[600px] px-1  font-serif text-lg  text-white-0  lg:mx-0">
            {description}
          </p>

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
      </motion.div>

      <motion.div
        className="relative "
        initial={{ opacity: 0, y: -200 }}
        animate={controls}
      >
        <Image className="" width={590} alt="ImageFile" src={image} />
      </motion.div>
    </main>
  );
};

export default AboutSection;
