import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import LineMenu from '@/components/Atoms/LineMenu';
import Social from '@/components/Atoms/Social';
import LogoCG from '@/public/assets/images/cgDev.svg';

type HeaderProps = {
  waved?: 'first';
};
// eslint-disable-next-line tailwindcss/no-custom-classname
const header = tv({
  base: 'headerbg z-0',
  variants: {
    waved: {
      first: 'headerbg2 z-0 bg-green-100',
    },
  },
});

const Header: React.FC<HeaderProps> = ({ waved }) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="relative w-full">
      <div className={header({ waved })} />
      <div className=" relative z-20 border-b-[0.5px]  border-white-0">
        <div className="container mx-auto flex items-center justify-between py-3">
          {router.pathname === '/portfolio' ? (
            <Social size="lg" />
          ) : (
            <Link href="/">
              <Image
                className="mt-4  "
                width={150}
                height={150}
                alt="IMAGE"
                src={LogoCG}
              />
            </Link>
          )}
          <div className="hidden lg:flex">
            <LineMenu direction="row" />
          </div>
          <div className="flex items-center px-3 text-4xl text-zinc-50 lg:hidden">
            <button
              data-testid="menubutton"
              onClick={() => setOpenMenu(true)}
              type="button"
            >
              <FaBars size={50} />
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
        <div
          data-testid="menu"
          className="fixed left-0 top-0 z-50 h-full w-screen overflow-y-auto bg-green-150"
        >
          <div>
            <button
              data-testid="closebutton"
              className="p-5 text-2xl text-white-0"
              onClick={() => setOpenMenu(false)}
              type="button"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <LineMenu direction="col" />
            <Social outlined size="sm" />
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
