import 'animate.css/animate.min.css';

import Image from 'next/image';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { tv } from 'tailwind-variants';
import { uuid } from 'uuidv4';

import dockerImage from '@/public/assets/images/icons/custom-docker-green.svg';
import jsImage from '@/public/assets/images/icons/custom-javascript-green.svg';
import jestImage from '@/public/assets/images/icons/custom-jest-green.svg';
import nextImage from '@/public/assets/images/icons/custom-next-green.svg';
import reactImage from '@/public/assets/images/icons/custom-react-green.svg';
import storybookImage from '@/public/assets/images/icons/custom-storybook-green.svg';
import tailwindImage from '@/public/assets/images/icons/custom-tailwind-green.svg';
import typeImage from '@/public/assets/images/icons/custom-typescript-green.svg';

const stack = tv({
  slots: {
    base: '',
    wrap: 'container mx-auto flex   h-[800px] flex-col-reverse justify-between xl:flex-row',
    row: 'mx-auto flex w-[600px] flex-col  justify-center  font-sans text-white-0 xl:m-0 xl:w-[780px]',
    row1: 'mx-auto  flex w-full flex-wrap justify-center gap-12 bg-red-300 text-center xl:m-0 xl:mt-28 xl:w-[850px] xl:gap-14',
    title: `mb-48 text-center font-serif text-6xl font-bold text-green-50  after:mx-auto after:mt-3 after:block after:h-1 after:w-20 after:bg-green-50
    after:content-[''] xl:mb-0`,
    tecs: 'h-[150px] w-[150px]',
  },
});
const StackSection = () => {
  const imageList = [
    {
      image: jsImage,
      label: 'Javascript',
    },
    {
      image: nextImage,
      label: 'Next',
    },

    {
      image: reactImage,
      label: 'React',
    },
    {
      image: typeImage,
      label: 'TypeScript',
    },
    {
      image: tailwindImage,
      label: 'Tailwind',
    },
    {
      image: dockerImage,
      label: 'Docker',
    },
    {
      image: storybookImage,
      label: 'Storybook',
    },
    {
      image: jestImage,
      label: 'Jest',
    },
  ];
  const { base, wrap, row, row1, title } = stack();
  return (
    <section className={base()}>
      <h2 className={title()}>Tecnologias</h2>
      <div className={wrap()}>
        <div className={row()}>
          <ScrollAnimation animateIn="animate__fadeInDown">
            {/* <Image className="w-full" alt="image" src={threeImage} /> */}
          </ScrollAnimation>
        </div>
        <div className={row1()}>
          {imageList.map((img) => (
            <ScrollAnimation key={uuid()} animateIn="animate__fadeInDown">
              <div className="">
                <Image
                  className="h-[110px] w-[110px] xl:w-[170px]"
                  alt="StackImage"
                  src={img.image}
                />
                <p className="mt-3 text-xl font-bold text-green-950">
                  {img.label}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
