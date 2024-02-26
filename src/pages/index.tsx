import Footer from '@/components/Molecules/Footer';
import Header from '@/components/Molecules/Header';
import AboutSection from '@/components/Section/AboutTeste';
import ContactSection from '@/components/Section/ContactSection';
import FormSection from '@/components/Section/FormSection';
import PortfoilSection from '@/components/Section/PortfoilSection';
import ServicesSection from '@/components/Section/Services';
import StackSection from '@/components/Section/StackSection';
import aboutimage from '@/public/assets/images/aboutImage2.svg';

const Home = () => {
  return (
    <>
      <Header />
      <AboutSection
        title="Desenvolvedor Web"
        description="Programador freelancer especializado em desenvolvimento web, a procurar de proporcionar a melhor experiência para seus problemas e dificuldades utilizando das melhores tecnologias e tecnicas do mercado."
        image={aboutimage}
      />
      <ServicesSection />
      <StackSection />
      <FormSection />
      <PortfoilSection />
      <ContactSection />
      <Footer />
    </>
  );
};
export default Home;
