import 'animate.css/animate.min.css';

import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaChevronRight } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import Button from '@/components/Atoms/Button';
import portfoilImage from '@/public/assets/images/portImage.svg';

const portfoilSection = tv({
  slots: {
    base: `relative py-16 before:absolute before:right-0 before:h-[400px] before:w-0 before:rounded-l-[50%] before:bg-green-150 before:content-[''] lg:before:w-[50%]`,
    container:
      'container mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between',
  },
});

const PortfoilSection = () => {
  const { base, container } = portfoilSection();
  return (
    <section className={base()}>
      <div className={container()}>
        <div className="flex w-[400px] flex-col justify-center">
          <ScrollAnimation animateIn="animate__fadeInDown">
            <h2 className="font-serif text-[55px] font-bold text-green-150">
              Confira meus trabalhos
            </h2>
            <p className="mb-5 ml-1 font-serif text-lg text-green-950">
              Explore meu Portfólio Descubra um pouco do meu trabalho e da minha
              jornada profissional como desenvolvedor. Cada projeto é mais que
              uma linha de código.
            </p>
            <div>
              <Button color="green" icon={<FaChevronRight />} size="md">
                Ver Portfólio
              </Button>
            </div>
          </ScrollAnimation>
        </div>
        <div className="">
          <ScrollAnimation animateIn="animate__fadeInDown">
            <Image
              width={500}
              className="relative"
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
