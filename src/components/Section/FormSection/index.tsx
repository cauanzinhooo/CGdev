import 'animate.css/animate.min.css';

// @ts-ignore
import { tv } from 'tailwind-variants';

import Form from '@/components/Molecules/Form';

const formSection = tv({
  slots: {
    wrap: 'my-20 w-full bg-[#ebebeb] ',
    title: ` text-center  font-serif text-[45px] font-bold text-green-50 after:mx-auto  after:mt-3 after:flex after:h-1 after:w-20 after:bg-green-50 after:content-[''] sm:text-[55px] 
     `,
    base: 'container mx-auto flex  items-center justify-center ',
  },
});

const FormSection = () => {
  const { base, title, wrap } = formSection();
  return (
    <section className={wrap()}>
      <h2 className={title()}>Entre em contato</h2>
      <div className={base()}>
        <Form />
      </div>
    </section>
  );
};
export default FormSection;
