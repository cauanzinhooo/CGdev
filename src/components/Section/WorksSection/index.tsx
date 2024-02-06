import 'animate.css/animate.min.css';

import ScrollAnimation from 'react-animate-on-scroll';
import { FaEye } from 'react-icons/fa';

import { CardProject } from '@/components/Atoms/CardProject';
import essencialSoulImage from '@/public/assets/images/project.jpg';

const stacks = [
  {
    id: 1,
    url: '//www.essencialsoul.com.br',
    tecs: [
      {
        id: 1,
        tec: 'Next.Js',
      },
      {
        id: 2,
        tec: 'React',
      },
      {
        id: 3,
        tec: 'Strappi',
      },
      {
        id: 4,
        tec: 'TailWind',
      },
    ],
  },
];

const WorkSection = () => {
  return (
    <section className=" bg-[#eeeded] py-14">
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
        <h2
          className={`mx-auto mb-16 text-center font-serif text-[45px]  font-bold  text-green-200 after:mx-auto after:mt-3 after:block  after:h-1 after:w-20 after:bg-green-200 after:content-[''] sm:mx-0 sm:text-[55px]
     xl:mb-0`}
        >
          Projetos
        </h2>
      </ScrollAnimation>
      <div className="container mx-auto flex items-center justify-center py-12 text-center">
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
          <CardProject.Root title="Essencial Soul">
            <CardProject.Content image={essencialSoulImage}>
              <>
                {stacks.map((item) => (
                  <div className="mt-20" key={item.id}>
                    {item.tecs?.map((tec) => (
                      <CardProject.Hovered key={tec.id}>
                        {tec.tec}
                      </CardProject.Hovered>
                    ))}
                  </div>
                ))}
                <a
                  className="inline-block sm:mt-5"
                  target="_blank"
                  href={stacks[0]?.url}
                >
                  <button
                    className="mx-auto flex   items-center rounded-xl border-[2px]  border-slate-50 p-2 font-serif text-lg font-bold text-white-0"
                    type="button"
                  >
                    Visitar
                    <FaEye className="ml-2 mt-1" />
                  </button>
                </a>
              </>
            </CardProject.Content>
          </CardProject.Root>
        </ScrollAnimation>
      </div>
    </section>
  );
};
export default WorkSection;
