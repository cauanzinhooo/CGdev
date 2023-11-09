import 'animate.css/animate.min.css';

import Image from 'next/image';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { tv } from 'tailwind-variants';
import { uuid } from 'uuidv4';

import JSImage from '@/public/assets/images/JavaScriptImage.svg';
import FileImage from '@/public/assets/images/olive tree-rafiki.svg';
import ReactImage from '@/public/assets/images/ReactImage.svg';
import TailwindImage from '@/public/assets/images/TailwindImage.svg';

const stack = tv({
  slots: {
    base: '',
    wrap: 'container mx-auto flex  h-[800px] justify-between',
    row: 'flex  w-[750px] flex-col justify-center font-sans text-white-0',
    row1: 'flex w-[750px] flex-wrap',
    title: `text-center font-serif text-6xl font-bold  text-green-950 after:mx-auto after:mt-3 after:block after:h-1 after:w-20
    after:bg-green-950 after:content-['']`,
    tecs: 'h-[150px] w-[150px]',
  },
});
const StackSection = () => {
  const imageList = [
    {
      image: JSImage,
      label: 'NextJS',
    },
    {
      image: ReactImage,
      label: 'React',
    },
    {
      image: TailwindImage,
      label: 'Tailwind',
    },
  ];
  const { base, wrap, row, row1, title } = stack();
  return (
    <section className={base()}>
      <h2 className={title()}>Stacks</h2>
      <div className={wrap()}>
        <div className={row()}>
          <ScrollAnimation animateIn="animate__fadeInDown">
            <Image className="w-full" alt="image" src={FileImage} />
          </ScrollAnimation>
        </div>
        <div className={row1()}>
          {imageList.map((img) => (
            <div key={uuid()}>
              <Image
                className="h-[140px] w-[180px]"
                alt="StackImage"
                src={img.image}
              />
              <span>{img.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
