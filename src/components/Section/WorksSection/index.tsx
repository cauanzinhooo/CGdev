import 'animate.css/animate.min.css';

import ScrollAnimation from 'react-animate-on-scroll';

import { CardProject } from '@/components/Atoms/CardProject';
import CardProjectHovered from '@/components/Atoms/CardProject/CardProjectHovered';
import essencialSoulImage from '@/public/assets/images/project.jpg';

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
              <CardProjectHovered>Next</CardProjectHovered>
            </CardProject.Content>
          </CardProject.Root>
        </ScrollAnimation>
      </div>
    </section>
  );
};
export default WorkSection;
