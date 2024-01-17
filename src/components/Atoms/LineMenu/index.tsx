import { useRouter } from 'next/router';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { tv } from 'tailwind-variants';

const Navigation = tv({
  base: 'mx-auto flex items-center justify-center gap-3 sm:gap-9 ',
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
    to: 'home',
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
    href: '/contato',
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
      <div className={Navigation({ direction })}>
        {navegation.map((item: any) => (
          <ul key={item.id}>
            <li>
              <ScrollLink
                smooth
                offset={-70}
                duration={500}
                href={item.href}
                to={item.to}
                className={`relative my-auto font-serif text-lg text-white-0 after:absolute  after:-bottom-1 after:left-0 after:h-[2px] after:w-10 after:-translate-x-full after:bg-[#C4D352] after:opacity-0 after:transition-all after:content-[''] hover:after:translate-x-0 hover:after:opacity-100  sm:text-xl lg:flex ${
                  router.pathname === item.href ? 'font-bold text-slate-50' : ''
                }`}
              >
                {item.label}
              </ScrollLink>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default LineMenu;
