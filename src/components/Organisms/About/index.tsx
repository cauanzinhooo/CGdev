import 'animate.css/animate.min.css';

import Image from 'next/image';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { FaChevronRight } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import Button from '@/components/Atoms/Button';
import LineMenu from '@/components/Atoms/LineMenu';
import aboutimage from '@/public/assets/images/aboutImage2.svg';

const aboutSection = tv({
  slots: {
    aboutWrapper:
      'container relative  mx-auto flex flex-col lg:flex  lg:flex-row lg:justify-between',
    headingWrapper:
      'mx-auto w-full  max-w-[700px] text-center text-[42px] lg:mx-0 lg:h-[700px] lg:text-left 2xl:max-w-[700px]',
    aboutHeading:
      ' mt-3 px-1 font-sans text-[40px] font-bold text-[#A8BF8C] sm:w-full  sm:text-[80px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px]',
    aboutParagraf: ' z-20 px-2 font-sans text-xl   text-[#414141] 2xl:text-2xl',
    buttonsWrapper:
      'mt-5 flex flex-col items-center gap-6 sm:flex sm:flex-row sm:justify-center lg:justify-start',
    aboutImage: 'relative mx-auto mb-3 mt-5 lg:mx-0 lg:mt-0',
  },
});
const {
  aboutWrapper,
  headingWrapper,
  aboutHeading,
  aboutParagraf,
  buttonsWrapper,
  aboutImage,
} = aboutSection();
const About = () => {
  return (
    <main className={aboutWrapper()}>
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
        <div className={headingWrapper()}>
          <h1 className={aboutHeading()}>Desenvolvedor Front-end</h1>
          <p className={aboutParagraf()}>
            Meu nome é Cauã Gomes Marçal, atuo como desenvolvedor front-end a 1
            ano e meio. Neste portfólio, gostaria de compartilhar com você uma
            amostra do meu trabalho e destacar minhas habilidades e
            experiências.{' '}
          </p>
          <div className={buttonsWrapper()}>
            <Button color="green" size="xl">
              Contato
            </Button>
            <Button color="green" icon={<FaChevronRight />} size="xl">
              Ver Portfólio
            </Button>
          </div>
          <div className="mt-4 hidden lg:block">
            <LineMenu />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInDown" animateOnce>
        <div className={aboutImage()}>
          <Image
            className="rotate-[]"
            width={750}
            alt="ImageFile"
            src={aboutimage}
          />
        </div>
      </ScrollAnimation>
    </main>
  );
};

export default About;
