import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  FaCheck,
  FaCogs,
  FaCrosshairs,
  FaFile,
  FaLaptop,
  FaLaptopHouse,
  FaPalette,
  FaPaperPlane,
  FaSatelliteDish,
  FaSearch,
  FaShieldAlt,
  FaSitemap,
  FaStar,
  FaVial,
} from 'react-icons/fa';

import { ButtonRender } from '@/components/Molecules/ButtonRender';
import { ViewCard } from '@/components/Molecules/ViewCard';

const Analytics = [
  {
    id: 1,
    title: 'Reuniões',
    icon: <FaLaptop />,
  },
  {
    id: 2,
    title: 'Prototipagem',
    icon: <FaSitemap />,
  },
  {
    id: 3,
    title: 'Arquitetura',
    icon: <FaLaptopHouse />,
  },
  {
    id: 4,
    title: 'Documentação',
    icon: <FaFile />,
  },
];
const Planning = [
  {
    id: 1,
    title: 'Definição',
    icon: <FaCrosshairs />,
  },
  {
    id: 2,
    title: 'Pesquisa',
    icon: <FaSearch />,
  },
  {
    id: 3,
    title: 'Controle',
    icon: <FaSatelliteDish />,
  },
  {
    id: 4,
    title: 'Avaliação',
    icon: <FaStar />,
  },
];
const Development = [
  {
    id: 1,
    title: 'Design',
    icon: <FaPalette />,
  },
  {
    id: 2,
    title: 'Produção',
    icon: <FaCogs />,
  },
  {
    id: 3,
    title: 'Segurança',
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: 'Testes',
    icon: <FaVial />,
  },
];
const Completed = [
  {
    id: 1,
    title: 'Conclusão',
    icon: <FaCheck />,
  },
  {
    id: 2,
    title: 'Entrega',
    icon: <FaPaperPlane />,
  },
  {
    id: 3,
    title: 'Avaliação',
    icon: <FaStar />,
  },
];

const Steps = [
  {
    id: 1,
    step: '1- Analise',
  },
  {
    id: 2,
    step: '2- Planejamento',
  },
  {
    id: 3,
    step: '3- Desenvolvimento',
  },
  {
    id: 4,
    step: '4- Entrega',
  },
];

const StepsSection = () => {
  const [selectedStep, setSelectedStep] = useState<string>('');

  const handleButtonClick = (step: any) => {
    setSelectedStep(step);
  };
  useEffect(() => {
    handleButtonClick('1- Analise');
  }, []);

  return (
    <section className="my-20 bg-green-200">
      <div className="container mx-auto flex flex-col justify-center gap-10 py-16 lg:flex-row lg:justify-between  lg:gap-0">
        <ScrollAnimation
          className="mx-auto items-center  lg:mx-0 lg:items-start "
          animateIn="animate__fadeInLeft"
          animateOnce
        >
          <h2 className="text-center text-4xl font-bold text-white-0">
            Processo de Desenvolvimento
          </h2>
          {Steps.map((step) => (
            <ButtonRender.Root
              datatest-id="button"
              key={step.id}
              onclick={() => handleButtonClick(step.step)}
              selectedStep={selectedStep}
            >
              {step.step}
            </ButtonRender.Root>
          ))}
        </ScrollAnimation>
        <ScrollAnimation
          className="mx-auto flex   max-w-[400px] flex-row flex-wrap justify-center gap-9 overflow-hidden   lg:mx-0"
          animateIn="animate__fadeInLeft"
          animateOnce
        >
          {selectedStep === '1- Analise' && (
            <motion.div
              className="mt-3 flex flex-wrap justify-center gap-10"
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {Analytics.map((item) => (
                <ViewCard.Root icon={item.icon} key={item.id}>
                  {item.title}
                </ViewCard.Root>
              ))}
            </motion.div>
          )}
          {selectedStep === '2- Planejamento' && (
            <motion.div
              className="mt-3 flex flex-wrap justify-center gap-10"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {Planning.map((item) => (
                <ViewCard.Root icon={item.icon} key={item.id}>
                  {item.title}
                </ViewCard.Root>
              ))}
            </motion.div>
          )}
          {selectedStep === '3- Desenvolvimento' && (
            <motion.div
              className="mt-3 flex flex-wrap justify-center gap-10"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {Development.map((item) => (
                <ViewCard.Root icon={item.icon} key={item.id}>
                  {item.title}
                </ViewCard.Root>
              ))}
            </motion.div>
          )}
          {selectedStep === '4- Entrega' && (
            <motion.div
              className="mt-3 flex flex-wrap justify-center gap-10"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {Completed.map((item) => (
                <ViewCard.Root icon={item.icon} key={item.id}>
                  {item.title}
                </ViewCard.Root>
              ))}
            </motion.div>
          )}
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default StepsSection;
