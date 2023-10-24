import React from "react";
import { tv } from "tailwind-variants";

const Navegation = tv({
  slots: {
    base: `relative ml-1 block text-2xl font-normal  text-slate-50 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-10 after:-translate-x-full after:bg-[#405230;] after:opacity-0 after:transition-all after:content-[''] hover:after:translate-x-0  hover:after:opacity-100 lg:text-[#414141]`,
    baseRow:
      "mx-auto mt-3 flex flex-col items-center gap-12 lg:flex   lg:flex-row",
  },
});

const navegation = [
  {
    id: 1,
    label: "Ínicio",
  },
  {
    id: 2,
    label: "Sobre",
    href: "",
  },
  {
    id: 3,
    label: "Contato",
    href: "",
  },
  {
    id: 4,
    label: "Portfólio",
    href: "",
  },
];
const LineMenu = () => {
  const { base, baseRow } = Navegation();
  return (
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
  );
};

export default LineMenu;
