import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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

import { Announcement } from '@/components/Molecules/Announcement';
import { ButtonRender } from '@/components/Molecules/ButtonRender';
import { ViewCard } from '@/components/Molecules/ViewCard';
import Imageee from '@/public/assets/images/Choose-amico.svg';

const Steps = [
  {
    id: 1,
    step: '1.', // ANALISE
  },
  {
    id: 2,
    step: '2.', // PLANEJAMENTO
  },
  {
    id: 3,
    step: '3.', // DESENVOLVIMENTO
  },
  {
    id: 4,
    step: '4.', // ENTREGA
  },
];
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

const Step = () => {
  const [selectedStep, setSelectedStep] = useState<string>('');

  const handleButtonClick = (step: any) => {
    setSelectedStep(step);
  };
  useEffect(() => {
    handleButtonClick('1.');
  }, []);
  return (
    <section className="my-10">
      <ScrollAnimation
        className="mx-auto items-center  lg:mx-0 lg:items-start "
        animateIn="animate__fadeInLeft"
        animateOnce
      >
        <h1 className="mx-auto text-center font-serif text-5xl font-bold text-green-950">
          Como Funciona ?
        </h1>
        <p className="text-center font-serif text-3xl font-semibold text-green-90 ">
          Entenda o processo de desenvolvimento do seu projeto
        </p>
        <div className="mx-auto mt-5 flex flex-col justify-center gap-5 text-xl font-semibold  text-green-950 sm:flex-row ">
          <div className="flex flex-col items-center  sm:flex-row">
            <h2 className="inline">1. Analise</h2>
            <h2 className="ml-5 inline">2. Planejamento</h2>
          </div>
          <div className="flex flex-col items-center sm:flex-row ">
            <h2 className="inline">3. Desenvolvimento</h2>
            <h2 className="inline sm:ml-5">4. Entrega</h2>
          </div>
        </div>
      </ScrollAnimation>
      <Announcement.Root>
        <ScrollAnimation
          className="mx-auto items-center  lg:mx-0 lg:items-start "
          animateIn="animate__fadeInLeft"
          animateOnce
        >
          <div className="flex flex-col justify-between  lg:flex-row ">
            <div className="my-5 flex flex-col min-[340px]:flex-row  lg:mt-0 lg:flex-col">
              {Steps.map((step) => (
                <ButtonRender.Root
                  onclick={() => handleButtonClick(step.step)}
                  selectedStep={selectedStep}
                  datatest-id="button"
                  key={step.id}
                >
                  {step.step}
                </ButtonRender.Root>
              ))}
            </div>
            <div className="flex flex-col lg:ml-10">
              <ScrollAnimation
                className="mx-auto flex flex-row   flex-wrap justify-center overflow-hidden  lg:mx-0 lg:max-w-[400px]"
                animateIn="animate__fadeInLeft"
                animateOnce
              >
                {selectedStep === '1.' && (
                  <motion.div
                    className=" mt-3 flex flex-wrap justify-center gap-10 lg:gap-20  "
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
                {selectedStep === '2.' && (
                  <motion.div
                    className=" mt-3 flex flex-wrap justify-center gap-10 lg:gap-20  "
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
                {selectedStep === '3.' && (
                  <motion.div
                    className="mt-3 flex flex-wrap justify-center gap-10 lg:gap-20 "
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
                {selectedStep === '4.' && (
                  <motion.div
                    className="mt-3 flex flex-wrap justify-center gap-10 lg:gap-[81px] "
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
          </div>
        </ScrollAnimation>

        <Announcement.Content image={Imageee} />
      </Announcement.Root>
    </section>
  );
};
export default Step;
