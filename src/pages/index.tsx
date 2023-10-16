import Footer from '@/components/Molecules/Footer';
import Header from '@/components/Molecules/Header';
import About from '@/components/Organisms/About';
import ContactSection from '@/components/Organisms/ContactSection';
import ServicesSection from '@/components/Organisms/ServicesSection';
import ShowCase from '@/components/Organisms/ShowCaseSection';

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <ServicesSection />
      <ShowCase/>
      <ContactSection />
      <Footer />
    </>
  );
};
export default Home;
