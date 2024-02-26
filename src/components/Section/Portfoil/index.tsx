import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

import Button from '@/components/Atoms/Button';
import dev from '@/public/assets/images/cgDevv.svg';
import devv from '@/public/assets/images/Vector.svg';

// import PortfoilImage from '@/public/assets/images/Choose-amico.svg';

const Portfoil = () => {
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
  }, [currentPath, restartAnimation]);
  return (
    <>
      <section className="container  mx-auto">
        <motion.div
          className="mx-auto flex flex-col justify-center"
          initial={{ opacity: 0, y: -200 }}
          animate={controls}
        >
          <Image
            className="mx-auto mt-10 px-1  "
            width={500}
            src={dev}
            alt="portfoilImage"
          />
          <Image
            className="mx-auto  my-5"
            width={300}
            src={devv}
            alt="portfoilImage"
          />
        </motion.div>
      </section>
      <motion.div
        className="my-10 flex flex-col justify-center gap-3 bg-[#ededed]"
        initial={{ opacity: 0, y: -200 }}
        animate={controls}
      >
        <h1 className="mx-auto mt-3  max-w-3xl text-center font-serif text-5xl font-bold text-green-90">
          Em busca de proporcionar a melhor experiência possível.
        </h1>
        <ScrollLink
          className="mb-10 flex justify-center"
          to="contact"
          smooth
          offset={-100}
          duration={600}
        >
          <Button color="musg" icon={<FaSearch />} size="md">
            Buscar
          </Button>
        </ScrollLink>
      </motion.div>
    </>
  );
};

export default Portfoil;
