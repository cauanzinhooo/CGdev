import Image from 'next/image';

import ProjectImage from '@/public/assets/images/Maintenance-rafiki.svg';

const ProjectSection = () => {
  return (
    <section className="container mx-auto h-[700px]  pb-10">
      <div className="relative flex flex-col justify-center text-center">
        <h1 className="font-serif text-5xl font-bold">Meus trabalhos</h1>
        <p className="font-serif text-lg font-semibold">
          Nesta seção, apresento uma compilação dos projetos nos quais
          participei como desenvolvedor ao longo da minha carreira
        </p>
        <Image
          className="mx-auto"
          height={500}
          alt="projectImage"
          src={ProjectImage}
        />
      </div>
      <div />
    </section>
  );
};
export default ProjectSection;
