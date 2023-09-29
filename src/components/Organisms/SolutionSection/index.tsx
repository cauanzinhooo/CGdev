import 'animate.css/animate.min.css';

import ScrollAnimation from 'react-animate-on-scroll';
import { FaCheckCircle, FaIdCard, FaPager } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

const LadingCaracteristics = [
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
    label: 'Anúncio Segmentado',
  },
  {
    id: 4,
    label: 'Formulários',
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
];

const solution = tv({
  slots: {
    base: 'my-[62px] w-full',
    row: 'container mx-auto flex flex-wrap justify-center gap-20 py-32',
    card: ' rounded-xl bg-green-50 px-20 shadow-md shadow-brown-50',
    textCard: 'text-center font-mono text-5xl font-bold text-brown-50',
  },
});

const Solution = () => {
  const { base, row, card, textCard } = solution();
  return (
    <section className={base()}>
      <h2 className="text-center font-mono text-6xl text-white-0 ">
        Meus Serviços
      </h2>
      <div className={row()}>
        <div className={card()}>
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
            <FaIdCard className="mx-auto text-brown-50" size={100} />
            <h2 className={textCard()}>Landing Page</h2>
            {LadingCaracteristics.map((item) => (
              <ul className="flex gap-1" key={item.id}>
                <FaCheckCircle size={50} className="ml-6 text-brown-50" />
                <li className=" text-xl font-bold text-white-0">
                  {item.label}
                </li>
              </ul>
            ))}
          </ScrollAnimation>
        </div>
        <div className={card()}>
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
            <FaPager className="mx-auto text-brown-50" size={100} />
            <h2 className={textCard()}>Hot Site</h2>
            {HotCaracteristics.map((item) => (
              <ul className="flex gap-1" key={item.id}>
                <FaCheckCircle size={50} className="ml-6 text-brown-50" />
                <li className=" text-xl font-bold text-white-0">
                  {item.label}
                </li>
              </ul>
            ))}
          </ScrollAnimation>
        </div>
        <div className={card()}>
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
            <FaIdCard className="mx-auto text-brown-50" size={100} />
            <h2 className={textCard()}>Landing Page</h2>
            {LadingCaracteristics.map((item) => (
              <ul className="flex gap-1" key={item.id}>
                <FaCheckCircle size={50} className="ml-6 text-brown-50" />
                <li className=" text-xl font-bold text-white-0">
                  {item.label}
                </li>
              </ul>
            ))}
          </ScrollAnimation>
        </div>
        <div className={card()}>
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
            <FaIdCard className="mx-auto text-brown-50" size={100} />
            <h2 className={textCard()}>Landing Page</h2>
            {LadingCaracteristics.map((item) => (
              <ul className="flex gap-1" key={item.id}>
                <FaCheckCircle size={50} className="ml-6 text-brown-50" />
                <li className=" text-xl font-bold text-white-0">
                  {item.label}
                </li>
              </ul>
            ))}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};
export default Solution;
