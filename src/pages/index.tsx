import Footer from '@/components/Molecules/Footer';
import Header from '@/components/Molecules/Header';
import About from '@/components/Organisms/About';
import ContactSection from '@/components/Organisms/ContactSection';
import SolutionSection from '@/components/Organisms/SolutionSection';

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <SolutionSection />
      <ContactSection />
      <Footer />
    </>
  );
};
export default Home;
