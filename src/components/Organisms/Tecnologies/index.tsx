import { FaBootstrap, FaDocker, FaGitAlt, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Tecnologies = () => {
  return (
    <div className="container mt-10 flex flex-wrap justify-center gap-20 pb-12 text-lime-600 ">
      <div className="applyBLUE flex max-h-14 w-[250px]  rounded-2xl  bg-slate-200  text-4xl ">
        <FaReact className="mx-4 mt-1  text-[50px]" />
        <span className=" ml-3">React</span>
      </div>
      <div className="applyYELLOW w-[250px]  rounded-2xl bg-slate-200 text-center text-4xl ">
        <span className="font-bold">JS</span>
        <span className="ml-3">Javascript</span>
      </div>
      <div className="applyWHITE w-[250px]  rounded-2xl bg-slate-200 text-center text-4xl ">
        <span className="font-bold">TS</span>
        <span className="ml-3">Typescript</span>
      </div>
      <div className="applyWHITE flex max-h-14 w-[250px]  rounded-2xl bg-slate-200  text-4xl ">
        <FaDocker className="mx-4 mt-1  text-[50px]" />
        <span className="">Docker</span>
      </div>
      <div className="applyBLUE  flex max-h-14 w-[250px]  rounded-2xl bg-slate-200  text-4xl ">
        <SiTailwindcss className="mx-4 mt-1  text-[50px]" />
        <span className="">Tailwind</span>
      </div>
      <div className="applyPURPLE flex max-h-14 w-[250px]  rounded-2xl bg-slate-200  text-4xl ">
        <FaBootstrap className="mx-4 mt-1  text-[50px]" />
        <span className="">Bootstrap</span>
      </div>
      <div className="applyORANGE flex max-h-14 w-[250px]  rounded-2xl bg-slate-200  text-4xl ">
        <FaGitAlt className="mx-4 mt-1  text-[50px]" />
        <span className="">Git</span>
      </div>
    </div>
  );
};

export default Tecnologies;
