import Footer from '@/components/Molecules/Footer';
import Header from '@/components/Molecules/Header';
import About from '@/components/Organisms/About';
import ContactSection from '@/components/Organisms/ContactSection';
import FormSection from '@/components/Organisms/FormSection';
import ServicesSection from '@/components/Organisms/ServicesSection';
import StackSection from '@/components/Organisms/StackSection';

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <ServicesSection />
      <StackSection />
      <FormSection />
      <ContactSection />
      <Footer />
    </>
  );
};
export default Home;
