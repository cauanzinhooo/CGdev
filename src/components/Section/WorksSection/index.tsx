import CardProject from '@/components/Atoms/CardProject';
import essencialSoulImage from '@/public/assets/images/project.jpg';

const Projects = [
  {
    id: 1,
    title: 'Essencial Soul',
    image: essencialSoulImage,
  },
];
const tecnologias = [
  { id: 1, nome: 'React' },
  { id: 2, nome: 'Python' },
  { id: 3, nome: 'Node.js' },
  { id: 4, nome: 'Docker' },
  { id: 5, nome: 'TensorFlow' },
];

const WorkSection = () => {
  return (
    <section className="">
      <h2
        className={`mx-auto mb-16 text-center font-serif text-[45px]  font-bold  text-green-200 after:mx-auto after:mt-3 after:block  after:h-1 after:w-20 after:bg-green-200 after:content-[''] sm:mx-0 sm:text-[55px]
     xl:mb-0`}
      >
        Projetos
      </h2>
      <div className="container mx-auto flex py-12 text-center">
        <div className="flex">
          <CardProject image={essencialSoulImage} title="EssencialSoul" />
        </div>
      </div>
    </section>
  );
};
export default WorkSection;
