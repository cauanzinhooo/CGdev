import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { tv } from 'tailwind-variants';

const Navigation = tv({
  base: 'mx-auto flex items-center justify-center gap-3 font-serif text-lg text-white-0 sm:gap-7 ',
  variants: {
    direction: {
      col: 'flex flex-col',
      row: 'flex-row',
    },
  },
});

const navegation = [
  {
    id: 1,
    label: 'Ínicio',
    href: '/',
  },
  {
    id: 2,
    label: 'Sobre',
    href: '/sobre',
    to: 'about',
  },
  {
    id: 3,
    label: 'Contato',
    href: 'contato',
    to: 'contact',
  },
  {
    id: 4,
    label: 'Portfólio',
    href: '/portfolio',
  },
];

const LineMenu = ({ direction }: any) => {
  const router = useRouter();

  return (
    <nav className="relative mt-2">
      <div>
        <ul className={Navigation({ direction })}>
          {navegation.map((item: any) => (
            <li key={item.id}>
              {item.to ? (
                <ScrollLink
                  to={item.to}
                  smooth
                  offset={-100}
                  duration={600}
                  className={`relative  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-10 after:-translate-x-full after:bg-[#C4D352] after:opacity-0 after:transition-all after:content-[''] hover:after:translate-x-0 hover:after:opacity-100  ${
                    router.pathname === '/' ? 'cursor-pointer' : ''
                  }`}
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <Link
                  className={`relative  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-10 after:-translate-x-full after:bg-[#C4D352] after:opacity-0 after:transition-all after:content-[''] hover:after:translate-x-0 hover:after:opacity-100  ${
                    router.pathname === `${item.href}` ? 'font-bold' : ''
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default LineMenu;
