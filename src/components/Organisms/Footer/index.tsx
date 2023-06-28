import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from 'src/components/Atoms/Logo';

import Social from '@/components/Atoms/Social';

const Footer = () => {
  return (
    <footer className="mt-12 w-full bg-gradient-to-r from-lime-600 to-lime-800 ">
      <div className="container m-auto flex text-center">
        <div className="">
          <Logo size="small" />
          <Social />
        </div>
        <div className="ml-10 ">
          <span className="bg-gradient-to-r from-slate-50 via-slate-200 to-green-300 bg-clip-text  text-4xl text-transparent sm:text-[40px]">
            Fale Comigo
          </span>
          <div className="flex justify-center sm:justify-start">
            <Link className="" href="https://wa.me/5521979326886">
              <FaWhatsapp className=" mr-5 mt-9 text-4xl  text-green-100 no-underline hover:border-none hover:text-slate-200" />
            </Link>
            <Link className="" href="mailto:cauan21gomes@hotmail.com">
              <AiOutlineMail className=" mt-9 text-4xl  text-green-100 no-underline hover:border-none hover:text-slate-200" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
