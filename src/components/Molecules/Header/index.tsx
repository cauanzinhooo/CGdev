import Image from 'next/image';
import { useState } from 'react';
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTimes,
} from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import LineMenu from '@/components/Atoms/LineMenu';
import Social from '@/components/Atoms/Social';
import Logo from '@/public/assets/images/cgdev.svg';

const header = tv({
  slots: {
    headerFlex: 'relative h-52 w-full',
    container: 'container mx-auto flex items-center justify-between py-6',
    barsMenu: 'mt-2 flex items-center px-3 text-4xl text-zinc-50 lg:hidden',
    icos: 'text-slate-100 hover:text-red-600',
    linkIcon: 'mx-4 text-4xl no-underline hover:border-none',
  },
});
const { headerFlex, container, barsMenu, icos, linkIcon } = header();
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className={headerFlex()}>
      <div className=" sexosexo z-0" />
      <div className=" relative z-20 border-b-[0.5px] border-slate-100">
        <div className={container()}>
          <Image
            className="px-3"
            width={300}
            height={300}
            alt="IMAGE"
            src={Logo}
          />
          <Social size="md" />

          <div className={barsMenu()}>
            <button onClick={() => setOpenMenu(true)} type="button">
              <FaBars size={50} />
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="fixed left-0 top-0 z-50 h-full w-screen overflow-y-auto bg-[#A9A9A9]">
          <div>
            <button
              className="p-5 text-4xl text-zinc-50"
              onClick={() => setOpenMenu(false)}
              type="button"
            >
              <FaTimes />
            </button>
          </div>
          <div>
            <div className="flex flex-col">
              <LineMenu />
            </div>
            <div className="mt-10 flex items-center justify-center">
              <a
                target="_blank"
                className={linkIcon()}
                href="https://www.instagram.com/caua_gm/?next=%2F"
              >
                <FaInstagram className={icos()} />
              </a>
              <a
                target="_blank"
                className={linkIcon()}
                href="https://www.linkedin.com/in/cau%C3%A3-gomes-138150216/"
              >
                <FaLinkedin className={icos()} />
              </a>
              <a
                target="_blank"
                className={linkIcon()}
                href="https://github.com/cauanzinhooo"
              >
                <FaGithub className={icos()} />
              </a>
              <a
                target="_blank"
                className={linkIcon()}
                href="https://github.com/cauanzinhooo"
              >
                <FaEnvelope className={icos()} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
