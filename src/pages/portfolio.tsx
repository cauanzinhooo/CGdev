import Footer from '@/components/Molecules/Footer';
import Header from '@/components/Molecules/Header';
import AboutSection from '@/components/Section/AboutTeste';
import ContactSection from '@/components/Section/ContactSection';
import StepsSection from '@/components/Section/StepSection/indes';
import WorkSection from '@/components/Section/WorksSection';
import ProjectImage from '@/public/assets/images/portfoilImage.svg';

const Home = () => {
  return (
    <>
      <Header waved="first" />
      <AboutSection
        title="Meus Projetos"
        description=" Nesta seção, apresento os diversos projetos nos quais desempenhei o papel de desenvolvedor ao longo da minha carreira profissional. Essa jornada enfrento desafios e conquistas, refletindo minha 
        dedicação dentro da área."
        image={ProjectImage}
      />
      <StepsSection />
      <WorkSection />
      <ContactSection colored="green" />
      <Footer colored="green" />
    </>
  );
};
export default Home;
