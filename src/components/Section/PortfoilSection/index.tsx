import 'animate.css/animate.min.css';

import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaChevronRight } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import Button from '@/components/Atoms/Button';
import portfoilImage from '@/public/assets/images/portImage.svg';

const portfoilSection = tv({
  slots: {
    base: `relative  py-12 before:absolute before:right-0 before:h-[400px] before:w-0 before:rounded-l-[50%] before:bg-green-950 before:content-[''] lg:before:w-[50%]`,
    container:
      'container mx-auto flex flex-col items-center justify-center  lg:flex-row lg:justify-between',
  },
});

const PortfoilSection = () => {
  const { base, container } = portfoilSection();
  return (
    <section className={base()}>
      <div className={container()}>
        <div>
          <ScrollAnimation
            className="flex flex-col justify-center"
            animateIn="animate__fadeInDown"
          >
            <h2 className="text-center font-serif text-[45px] font-bold text-green-150 sm:text-[55px] lg:text-left">
              Confira meus trabalhos
            </h2>
            <p className=" mb-5 max-w-[500px] text-center font-serif text-base text-green-950 sm:text-lg lg:text-left">
              Explore meu Portfólio Descubra um pouco do meu trabalho e da minha
              jornada profissional como desenvolvedor. Cada projeto é mais que
              uma linha de código.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button color="green" icon={<FaChevronRight />} size="md">
                Ver Portfólio
              </Button>
            </div>
          </ScrollAnimation>
        </div>
        <div className="mx-auto flex justify-center lg:mx-0 lg:justify-end">
          <ScrollAnimation animateIn="animate__fadeInDown">
            <Image
              width={600}
              className="relative mt-10"
              alt="portfoilImage"
              src={portfoilImage}
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default PortfoilSection;
