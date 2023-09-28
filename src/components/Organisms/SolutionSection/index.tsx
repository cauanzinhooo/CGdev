import { FaIdCard } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

const solution = tv({
  slots: {
    base: 'my-[62px] h-[500px] w-full bg-green-950',
    row: 'container mx-auto flex flex-col justify-center gap-20 lg:flex lg:flex-row',
    card: 'mt-5 h-[200px] w-[200px] bg-white-0 text-left',
  },
});

const Solution = () => {
  const { base, row, card } = solution();
  return (
    <section className={base()}>
      <h2 className="text-center font-mono text-6xl text-white-0 ">
        Meus Serviços
      </h2>
      <div className={row()}>
        <div className={card()}>
          <FaIdCard size={70} />
        </div>
        <div className={card()}>
          <FaIdCard />
        </div>
        <div className={card()}>
          <FaIdCard />
        </div>
      </div>
    </section>
  );
};
export default Solution;
