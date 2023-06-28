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
      <div className=" sexosexo absolute left-0 top-0 h-[620px] w-full bg-gradient-to-r from-lime-600 to-lime-800 sm:h-[490px] " />
      <main className=" relative flex">
        <div className="container m-auto  bg-red-300 sm:justify-between min-[768px]:flex">
          <div className="m-auto w-full max-w-[440px] text-center   font-bold sm:ml-5 sm:text-left   ">
            <h1 className="text-4xl text-slate-100 sm:text-5xl ">
              Desenvolvedor Web
            </h1>
            <p className="mb-6 text-slate-200">
              Meu nome é Cauã Gomes e sou apaixonado por programação Neste
              portfólio, gostaria de compartilhar com você uma amostra do meu
              trabalho e destacar minhas habilidades e experiências.
            </p>
            <Button icon={<FaChevronRight />} sizes="md">
              Saiba Mais
            </Button>
          </div>
          <div className="relative z-10 mb-12 mt-7  flex  h-[269px] w-full max-w-[570px]  ">
            <Image
              className="absolute  bottom-[-50px] z-10 sm:top-[50px]"
              width={600}
              alt="fileimg"
              src={file}
            />
          </div>
        </div>
      </main>
      <section className="container m-auto  mt-32 rounded-xl  bg-lime-600  text-center">
        <div className="text-center">
          <h1 className=" text-4xl font-bold text-slate-50 sm:text-5xl">
            Tecnologias
          </h1>
          <p className="font-semibold text-slate-100">
            ALGUMAS DAS TECNOLOGIAS EM QUE USO NO MEU DIA A DIA
          </p>
        </div>
        <Tecnologies />
      </section>
      <Footer />
    </>
  );
};
export default Home;
