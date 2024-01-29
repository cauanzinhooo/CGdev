import Footer from '@/components/Molecules/Footer';
import Header from '@/components/Molecules/Header';
import AboutSection from '@/components/Section/AboutTeste';
import ContactSection from '@/components/Section/ContactSection';
import FormSection from '@/components/Section/FormSection';
import PortfoilSection from '@/components/Section/PortfoilSection';
import ServicesSection from '@/components/Section/ServicesSection';
import StackSection from '@/components/Section/StackSection';
import aboutimage from '@/public/assets/images/aboutImage2.svg';

const Home = () => {
  return (
    <>
      <Header />
      <AboutSection
        animate="animate__fadeInLeft"
        imgAnimate="animate__fadeInUp"
        title="Desenvolvedor Web"
        description=" Me chamo Cauã Gomes Marçal, um entusiasta da arte da programação
        atuando como desenvolvedor front-end há um ano e meio. Neste espaço,
        tenho o prazer de compartilhar uma amostra do meu trabalho, onde
        vejo a programação não apenas como uma habilidade técnica, mas como
        uma verdadeira expressão artística."
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
