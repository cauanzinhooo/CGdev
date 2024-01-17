import 'animate.css/animate.min.css';

// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { FaCheckCircle, FaDesktop, FaIdCard, FaPager } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import Card from '@/components/Atoms/Card';

const LandingCaracteristics = [
  {
    id: 1,
    label: 'Divulgação de CTA',
  },
  {
    id: 2,
    label: 'Otimização',
  },

  {
    id: 3,
    label: 'Formulários',
  },

  {
    id: 4,
    label: 'Carregamento Rápido',
  },
];
const HotCaracteristics = [
  {
    id: 1,
    label: 'Divulgação de Evento',
  },
  {
    id: 2,
    label: 'Cativar a Atenção',
  },
  {
    id: 3,
    label: 'Prender o Público',
  },
  {
    id: 4,
    label: 'Integração com Redes',
  },
  {
    id: 6,
    label: 'Carregamento Rápido',
  },
];
const WebsiteCaracteristics = [
  {
    id: 1,
    label: 'Segurança:',
  },
  {
    id: 2,
    label: 'Responsividade',
  },
  {
    id: 3,
    label: 'Integração Social',
  },
  {
    id: 4,
    label: 'SEO',
  },
];

const servicesSection = tv({
  slots: {
    base: `my-20 w-full  py-16 `,
    wrap: 'flex items-center gap-1',
    row: 'container mx-auto flex flex-wrap justify-center gap-10 py-16 sm:gap-24',
    title: `text-center font-serif text-[45px]  font-bold text-green-150 after:mx-auto after:mt-3 after:block after:h-1 after:w-20
    after:bg-green-150 after:content-[''] sm:text-[55px]`,
    icon: ' ml-3 mt-4 text-green-50 sm:ml-8',
    caracteristics: 'ml-3 mt-4 font-serif text-lg text-white-0 ',
  },
});

const ServicesSection = () => {
  const { base, wrap, row, title, icon, caracteristics } = servicesSection();
  return (
    <section className={base()}>
      <div className=" rotate-180" />
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
        <h2 className={title()}>Meus Serviços</h2>
      </ScrollAnimation>
      <div className={row()}>
        <ScrollAnimation animateIn="animate__fadeInDown" animateOnce>
          <Card
            description="Uma landing page é uma página da web altamente 
          focada e otimizada, projetada para direcionar a atenção 
          dos visitantes para uma oferta específica."
            iconTitle={<FaIdCard size={80} />}
            icon={LandingCaracteristics.map((item) => (
              <ul className={wrap()} key={item.id}>
                <FaCheckCircle className={icon()} size={30} />
                <li className={caracteristics()}>{item.label}</li>
              </ul>
            ))}
            title="Landing Page"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
          <Card
            description="Um hot site é uma página da web temporária e altamente 
          especializada criada para promover algo específico, como um evento, produto, serviço, 
          campanha ou oferta por tempo limitado. "
            iconTitle={<FaPager size={80} />}
            icon={HotCaracteristics.map((item) => (
              <ul className={wrap()} key={item.id}>
                <FaCheckCircle className={icon()} size={30} />
                <li className={caracteristics()}>{item.label}</li>
              </ul>
            ))}
            title="Hot Site"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInDown" animateOnce>
          <Card
            description="Um website é um conjunto de páginas da web interconectadas em um 
          domínio específico  que formam uma presença online coesa para 
          uma pessoa, empresa, organização ou entidade."
            iconTitle={<FaDesktop size={80} />}
            icon={WebsiteCaracteristics.map((item) => (
              <ul className={wrap()} key={item.id}>
                <FaCheckCircle className={icon()} size={30} />
                <li className={caracteristics()}>{item.label}</li>
              </ul>
            ))}
            title="Website"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesSection;
