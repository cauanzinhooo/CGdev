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
    base: `my-20 w-full bg-green-950 `,
    wrap: 'flex items-center gap-1',
    row: 'container mx-auto flex flex-wrap justify-center gap-10 py-24 sm:gap-32',
    title: `text-center font-mono text-5xl font-bold text-white-0 after:mx-auto after:mt-3 after:block after:h-1 after:w-20
    after:bg-slate-50 after:content-[''] sm:text-6xl`,
    icon: 'ml-4 mt-2',
    caracteristics: 'mt-2 text-xl font-bold text-white-0 sm:text-2xl ',
  },
});

const ServicesSection = () => {
  const { base, wrap, row, title, icon, caracteristics } = servicesSection();
  return (
    <section className={base()}>
      <div className="wavee rotate-180" />
      <h2 className={title()}>Meus Serviços</h2>
      <div className={row()}>
        <Card
          description="Uma landing page é uma página da web altamente 
          focada e otimizada, projetada para direcionar a atenção 
          dos visitantes para uma oferta específica."
          iconTitle={<FaIdCard size={100} />}
          icon={LandingCaracteristics.map((item) => (
            <ul className={wrap()} key={item.id}>
              <FaCheckCircle className={icon()} size={40} />
              <li className={caracteristics()}>{item.label}</li>
            </ul>
          ))}
          title="Landing Page"
        />
        <Card
          description="Um hot site é uma página da web temporária e altamente 
          especializada criada para promover algo específico, como um evento, produto, serviço, 
          campanha ou oferta por tempo limitado. "
          iconTitle={<FaPager size={100} />}
          icon={HotCaracteristics.map((item) => (
            <ul className={wrap()} key={item.id}>
              <FaCheckCircle className={icon()} size={40} />
              <li className={caracteristics()}>{item.label}</li>
            </ul>
          ))}
          title="Hot Site"
        />
        <Card
          description="Um website é um conjunto de páginas da web interconectadas em um 
          domínio específico  que formam uma presença online coesa para 
          uma pessoa, empresa, organização ou entidade."
          iconTitle={<FaDesktop size={100} />}
          icon={WebsiteCaracteristics.map((item) => (
            <ul className={wrap()} key={item.id}>
              <FaCheckCircle className={icon()} size={40} />
              <li className={caracteristics()}>{item.label}</li>
            </ul>
          ))}
          title="Website"
        />
      </div>
      <div className="wavee" />
    </section>
  );
};

export default ServicesSection;
