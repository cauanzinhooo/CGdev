import 'animate.css/animate.min.css';

import ScrollAnimation from 'react-animate-on-scroll';
// @ts-ignore
import { tv } from 'tailwind-variants';

import Form from '@/components/Molecules/Form';

const formSection = tv({
  slots: {
    wrap: 'my-20 w-full py-10 ',
    title: ` text-center  font-serif text-[45px] font-bold text-green-50 after:mx-auto  after:mt-3 after:flex after:h-1 after:w-20 after:bg-green-50 after:content-[''] sm:text-[55px] 
     `,
    base: 'container mx-auto flex  items-center justify-center ',
    contains: `relative before:absolute before:bottom-20   before:h-[150px] before:w-[6%] before:rounded-r-[100px] before:bg-green-50  before:content-[''] after:absolute  after:right-0 after:top-60 after:mb-0 after:h-[150px] after:w-[6%]  after:rounded-l-[100px] after:bg-green-950 after:content-[''] `,
  },
});

const FormSection = () => {
  const { base, title, wrap, contains } = formSection();
  return (
    <section className={contains()}>
      <div className={wrap()}>
        <ScrollAnimation className={base()} animateIn="animate__fadeInLeft">
          <h2 className={title()}>Entre em contato</h2>
        </ScrollAnimation>
        <div className={base()}>
          <Form />
        </div>
      </div>
    </section>
  );
};
export default FormSection;
