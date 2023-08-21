import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import Button from '@/components/Atoms/Button';
import LineMenu from '@/components/Atoms/LineMenu';
import ImageFile from '@/public/assets/images/FILES.svg';

const aboutSection = tv({
  slots: {
    aboutWrapper:
      'container relative z-10 mx-auto flex flex-col lg:flex  lg:flex-row lg:justify-between',
    headingWrapper:
      'mx-auto w-full max-w-[500px] text-center text-[42px] lg:mx-0 lg:text-left 2xl:max-w-[700px]',

    aboutHeading: ' px-2 font-bold text-[#fff] sm:text-[70px] 2xl:text-[90px]',
    aboutParagraf: 'px-3 text-sm text-[#A9A9A9]  sm:text-xl',
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
    <section className={aboutWrapper()}>
      <div className={headingWrapper()}>
        <h1 className={aboutHeading()}>Desenvolvedor Web</h1>
        <p className={aboutParagraf()}>
          Meu nome é Cauã Gomes Marçal. Neste portfólio, gostaria de
          compartilhar com você uma amostra do meu trabalho e destacar minhas
          habilidades e experiências.{' '}
        </p>
        <div className={buttonsWrapper()}>
          <Button sizes="lg">Contato</Button>
          <Button icon={<FaChevronRight />} sizes="lg">
            Ver Portfólio
          </Button>
        </div>
        <div className="mt-5  hidden lg:block">
          <LineMenu />
        </div>
      </div>
      <div className={aboutImage()}>
        <Image width={700} alt="ImageFile" src={ImageFile} />
      </div>
    </section>
  );
};

export default About;
