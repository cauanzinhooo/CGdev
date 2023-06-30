import { FaBootstrap, FaDocker, FaGitAlt, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Tecnologies = () => {
  return (
    <div className="container m-auto  mt-32 rounded-xl bg-lime-600  text-center  text-slate-50">
      <div className="text-center">
        <h1 className=" font-mono text-4xl font-bold  sm:text-5xl">
          Tecnologias
        </h1>
        <p className="font-mono font-normal ">
          Algumas das tecnologias que eu uso em meu dia à dia.
        </p>
      </div>
      <div className="container mt-10 flex flex-wrap justify-center gap-20 pb-12  text-lime-600 ">
        <div className="applyBLUE flex max-h-14 w-[250px]  rounded-2xl  bg-slate-200  text-4xl ">
          <FaReact className="mx-4 mt-1   text-[50px]" />
          <span className=" ml-3 font-normal">React</span>
        </div>
        <div className="applyYELLOW w-[250px]  rounded-2xl bg-slate-200 text-center text-4xl ">
          <span className="font-mono font-bold">JS</span>
          <span className="ml-2 font-mono font-normal">Javascript</span>
        </div>
        <div className="applyWHITE w-[250px]  rounded-2xl bg-slate-200 text-center text-4xl ">
          <span className="font-mono font-bold">TS</span>
          <span className="ml-3 font-normal">Typescript</span>
        </div>
        <div className="applyWHITE flex max-h-14 w-[250px]  rounded-2xl bg-slate-200  text-4xl ">
          <FaDocker className="mx-4 mt-1  text-[50px]" />
          <span className="font-normal">Docker</span>
        </div>
        <div className="applyBLUE  flex max-h-14 w-[250px]  rounded-2xl bg-slate-200  text-4xl ">
          <SiTailwindcss className="mx-4 mt-1  text-[50px]" />
          <span className="font-normal">Tailwind</span>
        </div>
        <div className="applyPURPLE flex max-h-14 w-[250px]  rounded-2xl bg-slate-200  text-4xl ">
          <FaBootstrap className="mx-4 mt-1  text-[50px]" />
          <span className="font-normal">Bootstrap</span>
        </div>
        <div className="applyORANGE flex max-h-14 w-[250px]  rounded-2xl bg-slate-200  text-4xl ">
          <FaGitAlt className="mx-4 mt-1  text-[50px]" />
          <span className="font-normal">Git</span>
        </div>
      </div>
    </div>
  );
};

export default Tecnologies;
