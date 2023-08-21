import { tv } from 'tailwind-variants';
// @ts-ignore
const cards = [
  {
    id: 1,
    title: 'Landing-Page',
    subtitle:
      'Melhores soluções para sua landing page utilizando tecnologias modernas',
    icon: '',
  },
];

const cardsService = tv({
  slots: {
    serviceWrapper: 'container mx-auto bg-red-400',
    serviceHeading: 'text-center text-6xl',
  },
});
const { serviceWrapper, serviceHeading } = cardsService();
// @ts-ignore
const cards = () => {
  return (
    <section className={serviceWrapper()}>
      <div>
        <h1 className={serviceHeading()}>Meus Serviços</h1>
        <div />
      </div>
    </section>
  );
};
export default cards;
