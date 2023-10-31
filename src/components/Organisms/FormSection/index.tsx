import 'animate.css/animate.min.css';

import Image from 'next/image';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { tv } from 'tailwind-variants';

import Form from '@/components/Molecules/Form';
import ChecklistImage from '@/public/assets/images/Mailbox-amico (1).svg';

const formSection = tv({
  slots: {
    wrap: 'my-20 w-full bg-[#ebebeb] ',
    title: `mb-5 text-center  font-sans  text-[70px] font-bold  text-green-50 after:mx-auto after:mt-3 after:flex after:h-1 after:w-20 after:bg-green-50 
    after:content-[''] lg:mb-20`,
    base: 'container mx-auto flex flex-col-reverse items-center lg:flex lg:flex-row lg:justify-between ',
  },
});

const FormSection = () => {
  const { base, title, wrap } = formSection();
  return (
    <section className={wrap()}>
      <h2 className={title()}>Entre em contato</h2>
      <div className={base()}>
        <ScrollAnimation animateIn="animate__fadeInDown">
          <Image
            className="w-[700px]"
            src={ChecklistImage}
            alt="ChecklistImage"
          />
        </ScrollAnimation>
        <Form />
      </div>
    </section>
  );
};
export default FormSection;
