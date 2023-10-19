import Footer from '@/components/Molecules/Footer';
import Header from '@/components/Molecules/Header';
import About from '@/components/Organisms/About';
import ContactSection from '@/components/Organisms/ContactSection';
import ServicesSection from '@/components/Organisms/ServicesSection';
import ShowCase from '@/components/Organisms/ShowCaseSection';


import FormSection from '@/components/Organisms/FormSection';


const Home = () => {
  return (
    <>
      <Header />
      <About />
      <ServicesSection />
      <ShowCase/>
      <FormSection/>
      <ContactSection />
      <Footer />
    </>
  );
};
export default Home;
