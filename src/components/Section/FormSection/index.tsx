import 'animate.css/animate.min.css';

import Image from 'next/image';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
// @ts-ignore
import { tv } from 'tailwind-variants';

import Form from '@/components/Molecules/Form';
import mailBoxImage from '@/public/assets/images/mailbox.svg';

const formSection = tv({
  slots: {
    wrap: 'container mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between',

    base: '',
    contains: 'bg-green-950 py-10',
  },
});

const FormSection = () => {
  const { base, wrap, contains } = formSection();
  return (
    <section className={contains()}>
      <div className={wrap()}>
        <ScrollAnimation
          className="mx-auto max-w-[700px] items-center lg:mx-0 "
          animateIn="animate__fadeInLeft"
        >
          <h2 className="text-center font-serif text-5xl font-bold text-green-90">
            Contate-me
          </h2>
          <p className="mx-3 mt-5 text-center font-serif text-xl font-semibold text-white-0 lg:mx-0">
            Estou pronto para colaborar no desenvolvimento de ideias e projetos,
            oferecendo soluções personalizadas.
          </p>
          <Image
            className="mx-auto"
            alt="aaaa"
            width={400}
            src={mailBoxImage}
          />
        </ScrollAnimation>
        <div className={base()}>
          <ScrollAnimation animateIn="animate__fadeInLeft">
            <h2 className="ml-1 text-center font-serif text-5xl font-bold text-green-90">
              Me envie uma mensagem!
            </h2>
          </ScrollAnimation>
          <Form />
        </div>
      </div>
    </section>
  );
};
export default FormSection;
