import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';

import Button from '@/components/Atoms/Button';
import Logo from '@/components/Atoms/Logo';
import Social from '@/components/Atoms/Social';
import file from '@/public/assets/images/file.svg';

const Header = () => {
  return (
    <>
      <header className=" container relative z-10 m-auto border-b-[1px] text-center sm:flex sm:justify-between ">
        <Logo size="large" />
        <Social />
      </header>
      <section className="">
        <div className="sexosexo absolute left-0 top-0 h-full w-full bg-gradient-to-r   from-lime-600 to-lime-800" />
        <div className="relative z-10 flex">
          <div className=" h-[400px] w-full max-w-[440px] text-center font-bold ">
            <h1 className="text-4xl text-white sm:text-5xl ">
              Desenvolvedor Web
            </h1>
            <p className="mb-6 text-white">
              Meu nome é Cauã Gomes e sou apaixonado por programação Neste
              portfólio, gostaria de compartilhar com você uma amostra do meu
              trabalho e destacar minhas habilidades e experiências.
            </p>
            <Button icon={<FaChevronRight />} sizes="md">
              Saiba Mais
            </Button>
          </div>
          <div className="relative h-[269px] w-[300px] ">
            <Image
              className="absolute bottom-[-50px] z-10"
              width={300}
              alt="fileimg"
              src={file}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
