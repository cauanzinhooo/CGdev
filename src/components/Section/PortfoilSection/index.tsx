import 'animate.css/animate.min.css';

import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaArrowDown, FaChevronRight } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import Button from '@/components/Atoms/Button';
import portfoilImage from '@/public/assets/images/portfoilGif.gif';

const portfoilSection = tv({
  slots: {
    base: 'w-full py-10 lg:py-0 ',
    container:
      'container mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between',
  },
});

const PortfoilSection = () => {
  const { base, container } = portfoilSection();
  return (
    <section className={base()}>
      <div className={container()}>
        <ScrollAnimation className={base()} animateIn="animate__fadeInLeft">
          <div className="mx-auto flex w-full flex-col justify-center gap-5 sm:w-[600px] ">
            <h2 className="text-center font-serif text-[35px] font-bold text-green-950 sm:text-[40px]">
              Conecte-se com a opção mais adequada para as suas necessidades.
              <p className="mt-5 flex justify-center">
                <FaArrowDown color="text-green-950" />
              </p>
            </h2>
            <div className="mx-auto">
              <Button color="musg" icon={<FaChevronRight />} size="md">
                <Link href="/portfolio">Ver Portfólio</Link>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className={base()} animateIn="animate__fadeInUp">
          <div className="flex w-full justify-center lg:justify-end ">
            <Image alt="portfoilImage" width={600} src={portfoilImage} />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PortfoilSection;
