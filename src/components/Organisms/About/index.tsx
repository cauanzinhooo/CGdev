import 'animate.css/animate.min.css';

import Image from 'next/image';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { FaChevronRight } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import Button from '@/components/Atoms/Button';
import LineMenu from '@/components/Atoms/LineMenu';
// import ImageFile from '@/public/assets/images/FILES.svg';
import ImageFiled from '@/public/assets/images/filed.gif';

const aboutSection = tv({
  slots: {
    aboutWrapper:
      'container relative  mx-auto flex flex-col lg:flex  lg:flex-row lg:justify-between',
    headingWrapper:
      'mx-auto w-full max-w-[500px] px-1 text-center text-[42px] lg:mx-0 lg:text-left 2xl:max-w-[700px]',

    aboutHeading:
      ' mt-3  px-1 font-mono  text-[43px] font-bold text-[#A8BF8C] min-[500px]:text-[60px] xl:text-[80px] 2xl:text-[90px]',
    aboutParagraf: ' z-20 px-3   text-xl text-[#414141]',
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
          <h1 className={aboutHeading()}>Desenvolvedor Web</h1>
          <p className={aboutParagraf()}>
            Meu nome é Cauã Gomes Marçal. Neste portfólio, gostaria de
            compartilhar com você uma amostra do meu trabalho e destacar minhas
            habilidades e experiências.{' '}
          </p>
          <div className={buttonsWrapper()}>
            <Button color="green" size="lg">
              Contato
            </Button>
            <Button color="green" icon={<FaChevronRight />} size="lg">
              Ver Portfólio
            </Button>
          </div>
          <div className="mt-5  hidden lg:block">
            <LineMenu />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
        <div className={aboutImage()}>
          {/* <Image width={700} alt="ImageFile" src={ImageFile} /> */}
          <Image width={700} alt="ImageFile" src={ImageFiled} />
        </div>
      </ScrollAnimation>
    </main>
  );
};

export default About;
