import { Fa500Px, FaCheckCircle } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

import Card from '@/components/Atoms/Card';

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

const tecnologies = tv({
  slots: {
    base: 'flex items-center gap-1',
    icon: 'ml-3 mt-2',
    caracteristics: 'mt-2 text-2xl font-bold text-white-0',
  },
});

const Tecnologies = () => {
  const { base, icon, caracteristics } = tecnologies();
  return (
    <section className="container mx-auto flex flex-nowrap gap-10">
      <Card
        iconTitle={<Fa500Px />}
        icon={HotCaracteristics.map((item) => (
          <ul className={base()} key={item.id}>
            <FaCheckCircle className={icon()} size={40} />
            <li className={caracteristics()}>{item.label}</li>
          </ul>
        ))}
        title="Landing Page"
      />
    </section>
  );
};

export default Tecnologies;
