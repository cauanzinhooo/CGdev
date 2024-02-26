import Footer from '@/components/Molecules/Footer';
import Header from '@/components/Molecules/Header';
import { BestTecnologies } from '@/components/Section/BestsTecnologiesSection';
import ContactSection from '@/components/Section/ContactSection';
import Portfoil from '@/components/Section/Portfoil';
import SocialLine from '@/components/Section/SocialLine';
import Step from '@/components/Section/Step';
import WorkSection from '@/components/Section/WorksSection';

const Home = () => {
  return (
    <>
      <Header waved="first" />
      <Portfoil />
      <Step />
      <SocialLine />
      <WorkSection />
      <BestTecnologies />
      <ContactSection colored="green" />
      <Footer colored="green" />
    </>
  );
};
export default Home;
