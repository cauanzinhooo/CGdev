import 'animate.css/animate.min.css';

import ScrollAnimation from 'react-animate-on-scroll';

import { CardProject } from '@/components/Atoms/CardProject';
import essencialSoulImage from '@/public/assets/images/project.jpg';

const stacks = [
  {
    id: 1,
    url: '//www.essencialsoul.com.br',
    tecs: [
      {
        id: 1,
        tec: 'Next',
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
    <section className="bg-[#eeeded]">
      <h2
        className={`mx-auto mb-16 text-center font-serif text-[45px]  font-bold  text-green-200 after:mx-auto after:mt-3 after:block  after:h-1 after:w-20 after:bg-green-200 after:content-[''] sm:mx-0 sm:text-[55px]
     xl:mb-0`}
      >
        Projetos
      </h2>
      <div className="container mx-auto flex items-center justify-center py-12 text-center">
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
          <CardProject.Root title="Essencial Soul">
            <CardProject.Content image={essencialSoulImage}>
              AAAAAAAAAAAAAAAAAAAAAAA
              <>
                {stacks.map((item) => (
                  <div key={item.id}>
                    {item.tecs.map((tec) => (
                      <CardProject.Hovered key={tec.id}>
                        {tec.tec}
                      </CardProject.Hovered>
                    ))}
                  </div>
                ))}
              </>
              {/* <div className="m-auto flex h-full w-[600px] flex-col items-center justify-center bg-red-300">
                <div className="flex flex-col items-center">
                  {stacks.map((item) => (
                    <div key={item.id}>
                      {item.tecs.map((tech, index) => (
                        <CardProjectHovered key={index}>
                          {tech.tec}
                        </CardProjectHovered>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <button
                    className="rounded-lg border-[1px] border-green-50 px-5"
                    type="button"
                  >
                    <a target="_blank" href={stacks[0].url}>
                      Visitar
                      <FaEye />
                    </a>
                  </button>
                </div>
              </div> */}
            </CardProject.Content>
          </CardProject.Root>
        </ScrollAnimation>
      </div>
    </section>
  );
};
export default WorkSection;
