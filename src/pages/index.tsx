import Footer from '@/components/Molecules/Footer';
import Header from '@/components/Molecules/Header';
import About from '@/components/Section/About';
import ContactSection from '@/components/Section/ContactSection';
import FormSection from '@/components/Section/FormSection';
import PortfoilSection from '@/components/Section/PortfoilSection';
import ServicesSection from '@/components/Section/ServicesSection';
import StackSection from '@/components/Section/StackSection';

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <ServicesSection />
      <PortfoilSection />
      <StackSection />
      <FormSection />
      <ContactSection />
      <Footer />
    </>
  );
};
export default Home;
