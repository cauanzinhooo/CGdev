import Footer from '@/components/Molecules/Footer';
import Header from '@/components/Molecules/Header';
import About from '@/components/Organisms/About';
import ContactSection from '@/components/Organisms/ContactSection';
import ServicesSection from '@/components/Organisms/ServicesSection';

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
};
export default Home;
