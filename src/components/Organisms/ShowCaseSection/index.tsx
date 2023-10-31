import 'animate.css/animate.min.css';

import Image from 'next/image';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { tv } from 'tailwind-variants';

import Tec from '@/components/Atoms/Tec';
import CSS from '@/public/assets/images/CSS.png';
import JS from '@/public/assets/images/JS.png';
import Next from '@/public/assets/images/next.png';
import FileImage from '@/public/assets/images/olive tree-rafiki.svg';
import ReactImage from '@/public/assets/images/React.png';
import TailwindImage from '@/public/assets/images/tailwind.svg';

const showCase = tv({
  slots: {
    base: '',
    wrap: 'container mx-auto flex  h-[800px] justify-between',
    row: 'flex  w-[750px] flex-col justify-center font-mono text-white-0',
    row1: 'flex w-[750px] flex-wrap',
    title: `text-center font-serif text-6xl font-bold  text-green-950 after:mx-auto after:mt-3 after:block after:h-1 after:w-20
    after:bg-green-950 after:content-['']`,
    tecs: 'h-[150px] w-[150px]',
  },
});
const ShowCase = () => {
  const { base, wrap, row, row1, title, tecs } = showCase();
  return (
    <section className={base()}>
      <h2 className={title()}>Minhas Tecnologias</h2>
      <div className={wrap()}>
        <div className={row()}>
          <ScrollAnimation animateIn="animate__fadeInDown">
            <Image className="w-full" alt="image" src={FileImage} />
          </ScrollAnimation>
        </div>
        <div className={row1()}>
          <Tec title="NextJS">
            <Image className={tecs()} alt="nextJsImage" src={Next} />
          </Tec>
          <Tec title="JavaScript">
            <Image className={tecs()} alt="nextJsImage" src={JS} />
          </Tec>
          <Tec title="CSS">
            <Image className={tecs()} alt="nextJsImage" src={CSS} />
          </Tec>
          <Tec title="TailwindCSS">
            <Image className={tecs()} alt="TailwindCSS" src={TailwindImage} />
          </Tec>
          <Tec title="React">
            <Image className={tecs()} alt="TailwindCSS" src={ReactImage} />
          </Tec>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
