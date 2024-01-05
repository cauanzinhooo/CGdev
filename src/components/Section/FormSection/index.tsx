import 'animate.css/animate.min.css';

// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
// @ts-ignore
import { tv } from 'tailwind-variants';

import Form from '@/components/Molecules/Form';

const formSection = tv({
  slots: {
    wrap: 'my-[60px] w-full  py-10',
    title: ` text-center  font-serif text-[45px] font-bold text-green-50 after:mx-auto  after:mt-3 after:flex after:h-1 after:w-20 after:bg-green-50 after:content-[''] sm:text-[55px] 
     `,
    base: 'container mx-auto flex  items-center justify-center ',
    contains: 'WaveForm',
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
