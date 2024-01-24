import 'animate.css/animate.min.css';

import Image from 'next/image';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { FaWhatsapp } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import Button from '@/components/Atoms/Button';
import Social from '@/components/Atoms/Social';
import socialImage from '@/public/assets/images/socialGIf.gif';

const contactSection = tv({
  slots: {
    base: `relative before:absolute  before:block before:h-[400px] before:w-full before:bg-green-950 before:content-[''] after:absolute after:-bottom-0  after:h-[400px] after:w-full after:bg-green-950 after:content-['']   lg:before:h-[430px] lg:before:w-[46%] lg:before:rounded-r-3xl lg:after:right-0 lg:after:top-0 lg:after:mb-0 lg:after:h-[430px] lg:after:w-[46%] lg:after:rounded-l-3xl `,
    row: 'container relative z-10 mx-auto  ',
    container:
      'flex flex-col gap-20  min-[395px]:gap-0 lg:flex lg:flex-row lg:justify-between',
    image: '  max-w-[430px]  ',
    imagemWrap: 'mx-auto flex  flex-col items-center text-center lg:mx-0',
    titleWrap:
      ' h-[400px]  w-full   font-serif text-[#FFFCF8]  lg:m-0 lg:w-[400px] lg:justify-center xl:h-[450px] xl:w-[40%]',
  },
});
const ContactSection = () => {
  const { base, row, container, image, imagemWrap, titleWrap } =
    contactSection();
  return (
    <section id="contact" className={base()}>
      <div className={row()}>
        <div className={container()}>
          <div className={imagemWrap()}>
            <ScrollAnimation
              className={image()}
              animateIn="animate__fadeInLeft"
              animateOnce
            >
              <Image alt="SocialImage" src={socialImage} />
            </ScrollAnimation>
          </div>
          <div className={titleWrap()}>
            <ScrollAnimation
              className="flex flex-col gap-5"
              animateIn="animate__fadeInLeft"
              animateOnce
            >
              <h2 className=" mx-1 mt-5  text-center font-serif text-[45px] text-white-0">
                Fale Comigo !
              </h2>
              <p className="mx-1 text-center font-serif text-lg text-white-0">
                Estou aqui para proporcionar a melhor experiência de
                atendimento, com rapidez e eficiência.
              </p>

              <Social outlined="true" size="md" />
              <Button
                outlined
                icon={
                  <FaWhatsapp size={25} className="ml-3" color="##128c7e" />
                }
                color="green"
                size="xxl"
              >
                Saiba Mais
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
