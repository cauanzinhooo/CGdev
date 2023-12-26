import React from 'react';
import { tv } from 'tailwind-variants';

const Navegation = tv({
  slots: {
    base: `relative my-auto text-2xl  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-10 after:-translate-x-full after:bg-[#C4D352] after:opacity-0 after:transition-all after:content-[''] hover:after:translate-x-0  hover:after:opacity-100 lg:text-green-50`,
    baseRow: 'mx-auto  flex items-center justify-center gap-12 ',
  },
});

const navegation = [
  {
    id: 1,
    label: 'Ínicio',
  },
  {
    id: 2,
    label: 'Sobre',
    href: '',
  },
  {
    id: 3,
    label: 'Contato',
    href: '',
  },
  {
    id: 4,
    label: 'Portfólio',
    href: '',
  },
];
const LineMenu = () => {
  const { base, baseRow } = Navegation();
  return (
    <nav className="relative mt-1 h-11 w-full border-b-[0.5px]  border-slate-100 ">
      <div className={baseRow()}>
        {navegation.map((item: any) => (
          <ul key={item.id}>
            <li>
              <a className={base()} href={item.href}>
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
