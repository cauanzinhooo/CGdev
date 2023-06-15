import Image from 'next/Image';
import { FaChevronRight } from 'react-icons/fa';
import Logo from 'src/components/Atoms/Logo';

import Button from '@/components/Atoms/Button';
import Social from '@/components/Atoms/Social';
import file from '@/public/assets/images/file.svg';

const Home = () => {
  return (
    <>
      <header className=" relative z-10 border-b-[0.5px] border-white ">
        <div className="container  mx-auto   text-center sm:flex sm:justify-between ">
          <Logo size="large" />
          <Social />
        </div>
      </header>
      <div className=" sexosexo absolute left-0 top-0 h-[400px] w-full bg-gradient-to-r from-lime-600 to-lime-800 " />
      <nav className="container relative mx-auto flex border-2 border-black">
        <div className=" h-[400px] w-full max-w-[440px]  font-bold ">
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
        <div className="relative z-10 h-[269px] w-[300px] ">
          <Image
            className="absolute bottom-[-50px] z-10"
            width={300}
            alt="fileimg"
            src={file}
          />
        </div>
      </nav>
    </>
  );
};
export default Home;
