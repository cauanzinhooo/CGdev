import { useRouter } from 'next/router';
import React from 'react';
import { tv } from 'tailwind-variants';

const Navegation = tv({
  slots: {
    base: `relative my-auto font-serif text-xl after:absolute  after:-bottom-1 after:left-0 after:h-[2px] after:w-10 after:-translate-x-full after:bg-[#C4D352] after:opacity-0 after:transition-all after:content-[''] hover:after:translate-x-0 hover:after:opacity-100  lg:flex lg:text-white-0`,
    baseRow: 'mx-auto  flex items-center justify-center gap-9 ',
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
  },
  {
    id: 3,
    label: 'Contato',
    href: '/contato',
  },
  {
    id: 4,
    label: 'Portfólio',
    href: '/portfolio',
  },
];

const LineMenu = () => {
  const router = useRouter();
  const { base, baseRow } = Navegation();

  return (
    <nav className="relative mt-2">
      <div className={baseRow()}>
        {navegation.map((item: any) => (
          <ul key={item.id}>
            <li>
              <a
                className={`${base()} ${
                  router.pathname === item.href ? 'bunda' : ''
                }`}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default LineMenu;
