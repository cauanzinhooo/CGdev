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
    base: `relative before:absolute  before:block before:h-[400px] before:w-full before:bg-[#A8BF8C] before:content-[''] after:absolute after:-bottom-0 after:mb-12 after:h-[378px] after:w-full after:bg-[#405230]  after:content-[''] lg:before:h-[500px] lg:before:w-[46%] lg:before:rounded-r-3xl lg:after:right-0 lg:after:top-0 lg:after:mb-0 lg:after:h-[500px] lg:after:w-[46%] lg:after:rounded-l-3xl `,
    row: 'container relative z-10 mx-auto  ',
    container: 'flex flex-col lg:flex lg:flex-row lg:justify-between',
    image: '   min-[390px]:w-[400px] lg:h-[600px] lg:w-[600px]',
    imagemWrap:
      'mx-auto flex h-[400px] w-full flex-col items-center text-center lg:mx-0 lg:h-[500px] lg:w-[450px] xl:w-[500px]',
    titleWrap:
      ' h-[400px]   w-full  font-mono text-[#FFFCF8]  lg:m-0 lg:w-[400px] lg:justify-center xl:h-[500px] xl:w-[500px]',
  },
});
const ContactSection = () => {
  const { base, row, container, image, imagemWrap, titleWrap } =
    contactSection();
  return (
    
      <section className={base()}>
        <div className={row()}>
          <div className={container()}>
            <div className={imagemWrap()}>
            <ScrollAnimation className={image()} animateIn="animate__fadeInLeft" animateOnce>
              <Image  alt="SocialImage" src={socialImage} />
            </ScrollAnimation>
            </div>
            <div className={titleWrap()}>
              <ScrollAnimation className='flex flex-col gap-10' animateIn="animate__fadeInLeft" animateOnce>
                <h2 className=" xl:ml-0 text-center sm:mx-0  mx-2 text-[46px] sm:text-[56px] mt-0 lg:mt-10">
                  Entre Em Contato
                </h2>
                <Social outlined="true" size="md" />
                <Button
                outlined={true}
                  icon={<FaWhatsapp size={30} className='ml-3' color="##128c7e" />}
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
