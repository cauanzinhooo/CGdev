import 'animate.css/animate.min.css';

import Image from 'next/image';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { FaWhatsapp } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import Button from '@/components/Atoms/Button';
import Social from '@/components/Atoms/Social';
import socialImage from '@/public/assets/images/socialGIf.gif';

type ContactProps = {
  colored: 'green';
};

const contactSection = tv({
  base: `relative before:absolute  before:block before:h-[400px] before:w-full before:bg-green-950 before:content-[''] after:absolute after:-bottom-0  after:h-[400px] after:w-full after:bg-green-950 after:content-['']   lg:before:h-[430px] lg:before:w-[46%] lg:before:rounded-r-3xl lg:after:right-0 lg:after:top-0 lg:after:mb-0 lg:after:h-[430px] lg:after:w-[46%] lg:after:rounded-l-3xl `,
  variants: {
    colored: {
      green: 'before:bg-green-200 after:bg-green-200',
    },
  },
});
const ContactSection = ({ colored }: ContactProps) => {
  return (
    <section id="contact" className={contactSection({ colored })}>
      <div className="container relative z-10 mx-auto ">
        <div className="flex flex-col gap-20  min-[395px]:gap-0 lg:flex lg:flex-row lg:justify-between">
          <div className="mx-auto flex  flex-col items-center text-center lg:mx-0">
            <ScrollAnimation
              className="max-w-[430px]"
              animateIn="animate__fadeInLeft"
              animateOnce
            >
              <Image alt="SocialImage" src={socialImage} />
            </ScrollAnimation>
          </div>
          <div className="h-[400px]  w-full   font-serif text-[#FFFCF8]  lg:m-0 lg:w-[400px] lg:justify-center xl:h-[450px] xl:w-[40%]">
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
