import 'animate.css/animate.min.css';

import Image from 'next/image';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { FaChevronRight } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import Button from '@/components/Atoms/Button';
import Social from '@/components/Atoms/Social';
import aboutimage from '@/public/assets/images/aboutImage2.svg';

const aboutSection = tv({
  slots: {
    aboutWrapper:
      'container relative mx-auto flex flex-col pb-10 lg:flex lg:flex-row lg:justify-between',
    headingWrapper: ' w-full text-center text-[42px] lg:mx-0  lg:text-left ',
    aboutHeading:
      ' mx-auto text-center font-serif text-[45px] font-bold text-green-50 sm:text-[50px] lg:mx-0 lg:mt-10 lg:max-w-[700px] lg:text-left',
    aboutParagraf:
      'z-20 mx-auto mt-3 flex max-w-[600px] px-1  font-serif  text-lg text-white-0 lg:mx-0',
    buttonsWrapper:
      'mt-7 flex flex-col items-center gap-6 sm:flex sm:flex-row sm:justify-center lg:justify-start',
    aboutImage: 'relative flex justify-center',
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
            Me chamo Cauã Gomes Marçal, um entusiasta da arte da programação
            atuando como desenvolvedor front-end há um ano e meio. Neste espaço,
            tenho o prazer de compartilhar uma amostra do meu trabalho, onde
            vejo a programação não apenas como uma habilidade técnica, mas como
            uma verdadeira expressão artística.
          </p>

          <div className={buttonsWrapper()}>
            <Button size="md">Contato</Button>
            <Button color="green" icon={<FaChevronRight />} size="md">
              Ver Portfólio
            </Button>
          </div>
          <Social size="sm" outlined />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInDown" animateOnce>
        <div className={aboutImage()}>
          <Image width={600} alt="ImageFile" src={aboutimage} />
        </div>
      </ScrollAnimation>
    </main>
  );
};

export default About;
