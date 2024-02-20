import 'animate.css/animate.min.css';

import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import { tv } from 'tailwind-variants';

import dockerImage from '@/public/assets/images/icons/custom-docker-green.svg';
import jsImage from '@/public/assets/images/icons/custom-javascript-green.svg';
import jestImage from '@/public/assets/images/icons/custom-jest-green.svg';
import nextImage from '@/public/assets/images/icons/custom-next-green.svg';
import reactImage from '@/public/assets/images/icons/custom-react-green.svg';
import storybookImage from '@/public/assets/images/icons/custom-storybook-green.svg';
import tailwindImage from '@/public/assets/images/icons/custom-tailwind-green.svg';
import typeImage from '@/public/assets/images/icons/custom-typescript-green.svg';
import threeImage from '@/public/assets/images/stackImage.svg';

const stack = tv({
  slots: {
    base: 'my-[60px] bg-[#eeeded] py-10',
    wrap: 'container mx-auto flex flex-col-reverse justify-between xl:flex-row',
    row: 'mx-auto flex w-full  flex-col justify-center  font-sans  text-white-0 sm:w-[500px] xl:m-0 xl:w-[780px]',
    row1: 'mx-auto  flex w-full flex-wrap justify-center gap-12 text-center xl:m-0 xl:mt-24 xl:w-[850px] xl:gap-14',
    title: `mx-auto mb-16 text-center font-serif text-[45px]  font-bold  text-green-150 after:mx-auto after:mt-3 after:block  after:h-1 after:w-20 after:bg-green-150 after:content-[''] sm:mx-0 sm:text-[55px]
     xl:mb-0`,
  },
});
const StackSection = () => {
  const imageList = [
    {
      image: jsImage,
      label: 'Javascript',
      id: 1,
    },
    {
      image: nextImage,
      label: 'Next',
      id: 2,
    },

    {
      image: reactImage,
      label: 'React',
      id: 3,
    },
    {
      image: typeImage,
      label: 'TypeScript',
      id: 4,
    },
    {
      image: tailwindImage,
      label: 'Tailwind',
      id: 5,
    },
    {
      image: dockerImage,
      label: 'Docker',
      id: 6,
    },
    {
      image: storybookImage,
      label: 'Storybook',
      id: 7,
    },
    {
      image: jestImage,
      label: 'Jest',
      id: 8,
    },
  ];
  const { base, wrap, row, row1, title } = stack();
  return (
    <section className={base()}>
      <ScrollAnimation animateIn="animate__fadeInDown">
        <h2 className={title()}>Tecnologias</h2>
      </ScrollAnimation>
      <div className={wrap()}>
        <div className={row()}>
          <ScrollAnimation animateIn="animate__fadeInDown">
            <Image className="w-full" alt="image" src={threeImage} />
          </ScrollAnimation>
        </div>
        <div className={row1()}>
          {imageList.map((img) => (
            <ScrollAnimation key={img.id} animateIn="animate__fadeInDown">
              <div>
                <Image
                  className="h-[90px] w-[110px] sm:w-[110px] xl:w-[140px]"
                  alt="StackImage"
                  src={img.image}
                />
                <p className="mt-3 font-serif text-xl font-bold text-green-950">
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
