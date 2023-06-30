import Image from 'next/Image';
import { FaChevronRight } from 'react-icons/fa';
import Logo from 'src/components/Atoms/Logo';

import Button from '@/components/Atoms/Button';
import Navbar from '@/components/Atoms/Navbar';
import Footer from '@/components/Organisms/Footer';
import Tecnologies from '@/components/Organisms/Tecnologies';
import file from '@/public/assets/file.svg';

const Home = () => {
  return (
    <>
      <header className=" relative z-10 border-b-[0.5px] border-white ">
        <div className="container m-auto text-center sm:flex sm:justify-between ">
          <Logo size="large" />
          <Navbar />
        </div>
      </header>
      <div className=" sexosexo absolute left-0 top-0 h-[650px] w-full bg-gradient-to-r from-lime-600 to-lime-800 min-[768px]:h-[520px] " />
      <main className="relative flex w-full ">
        <div className="container m-auto min-[768px]:flex min-[768px]:justify-between">
          <div className=" m-auto mt-6 w-full max-w-[440px] text-center min-[768px]:ml-5 min-[768px]:text-left   ">
            <h1 className="font-mono text-5xl font-bold  text-slate-100 sm:text-5xl ">
              Desenvolvedor Web
            </h1>
            <p className="mb-6 font-mono  text-slate-200">
              Meu nome é Cauã Gomes e sou apaixonado por programação Neste
              portfólio, gostaria de compartilhar com você uma amostra do meu
              trabalho e destacar minhas habilidades e experiências.
            </p>
            <Button icon={<FaChevronRight />} sizes="md">
              Saiba Mais
            </Button>
          </div>
          <div className="relative m-auto mt-10  max-w-[600px]   ">
            <Image className=" " width={600} alt="fileimg" src={file} />
          </div>
        </div>
      </main>
      <section className="">
        <Tecnologies />
      </section>
      <Footer />
    </>
  );
};
export default Home;
