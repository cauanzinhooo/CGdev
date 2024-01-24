import Footer from '@/components/Molecules/Footer';
import Header from '@/components/Molecules/Header';
import ContactSection from '@/components/Section/ContactSection';
import ProjectSection from '@/components/Section/ProjectSection';

const Home = () => {
  return (
    <>
      <Header waved="first" />
      <ProjectSection />

      <ContactSection />
      <Footer />
    </>
  );
};
export default Home;
