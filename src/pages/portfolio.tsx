import Footer from '@/components/Molecules/Footer';
import Header from '@/components/Molecules/Header';
import AboutSection from '@/components/Section/AboutTeste';
import ContactSection from '@/components/Section/ContactSection';
import ProjectImage from '@/public/assets/images/Maintenance-rafiki.svg';

const Home = () => {
  return (
    <>
      <Header waved="first" />
      <AboutSection
        href="/portfolio"
        title="Meus Projetos"
        description=" Nesta seção, apresento uma compilação dos projetos nos quais
        participei como desenvolvedor ao longo da minha carreira"
        image={ProjectImage}
      />

      <ContactSection />
      <Footer />
    </>
  );
};
export default Home;
