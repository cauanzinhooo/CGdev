import React from 'react';

const social = [
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
  return (
    <div className="mx-auto mt-3 flex flex-col items-center gap-12 lg:flex   lg:flex-row">
      {social.map((item: any) => (
        <ul key={item.id}>
          <li>
            <a
              className="relative block text-2xl  font-normal  text-slate-50 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-10 after:-translate-x-full after:bg-red-600 after:opacity-0 after:transition-all after:content-[''] hover:after:translate-x-0  hover:after:opacity-100 lg:text-[#A9A9A9]"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default LineMenu;
