import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';

import Social from '../Social';

const Navbar = () => {
  const Links = [
    { name: 'Ínicio', link: '/' },
    { name: 'Sobre', link: '/' },
    { name: 'Portfólio', link: '/' },
    { name: 'Contato', link: '/' },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="">
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
      >
        <FaHamburger name={open ? 'close' : 'menu'} />
      </div>
      <ul
        className={` absolute left-0 z-20  h-[600px]  w-full  pb-12 pl-9 transition-all    duration-500 ease-in sm:h-[100px] sm:bg-gradient-to-r sm:from-lime-600 sm:to-lime-800   md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
          open ? 'top-20 ' : 'top-[-490px]'
        }`}
      >
        {Links.map((link) => (
          <li key={link.name} className="my-7   text-xl md:my-0 md:ml-8">
            <a
              href={link.link}
              className="text-green-100 duration-500 hover:text-green-200"
            >
              {link.name}
            </a>
          </li>
        ))}
        <Social />
      </ul>
    </nav>
  );
};
export default Navbar;
