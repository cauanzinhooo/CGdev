import 'animate.css/animate.min.css';

import Image from 'next/image';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { FaWhatsapp } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import Button from '@/components/Atoms/Button';
import Social from '@/components/Atoms/Social';
import socialImage from '@/public/assets/images/social.gif';

const contactSection = tv({
  slots: {
    base: `relative before:absolute  before:block before:h-[400px] before:w-full before:bg-[#A8BF8C] before:content-[''] after:absolute after:-bottom-0 after:mb-12 after:h-[355px] after:w-full after:bg-[#405230]  after:content-[''] lg:before:h-[500px] lg:before:w-[46%] lg:before:rounded-r-3xl lg:after:right-0 lg:after:top-0 lg:after:mb-0 lg:after:h-[500px] lg:after:w-[46%] lg:after:rounded-l-3xl `,
    row: 'container relative z-10 mx-auto  ',
    container: 'flex flex-col lg:flex lg:flex-row lg:justify-between',
    imagemWrap:
      'mx-auto flex h-[400px] w-[400px] flex-col items-center text-center lg:mx-0 lg:h-[500px] lg:w-[450px] xl:w-[500px]',
    titleWrap:
      'mx-auto flex h-[400px] w-[400px] flex-col items-center gap-3  font-mono text-[#FFFCF8] lg:m-0 lg:h-[500px] xl:w-[500px]',
  },
});
const ContactSection = () => {
  const { base, row, container, imagemWrap, titleWrap } = contactSection();
  return (
    <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
      <section className={base()}>
        <div className={row()}>
          <div className={container()}>
            <div className={imagemWrap()}>
              <Image className=" " alt="SocialImage" src={socialImage} />
            </div>
            <div className={titleWrap()}>
              <h2 className="px-2 text-center text-4xl lg:text-[50px]  xl:text-[60px]">
                Quer entrar em Contato ?
              </h2>
              <p className="text-xl  2xl:text-2xl">
                confira minhas redes sociais
              </p>
              <Social outlined="true" size="md" />
              <Button
                icon={<FaWhatsapp color="##128c7e" />}
                color="green"
                size="lg"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default ContactSection;
