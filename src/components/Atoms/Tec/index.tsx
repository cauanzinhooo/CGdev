import 'animate.css/animate.min.css';

// @ts-ignore
// @ts-ignore
import { tv } from 'tailwind-variants';

type TecProps = {
  title: string;
  children: React.ReactNode;
};

const tec = tv({
  slots: {
    base: 'flex h-[100px] w-[150px] flex-col text-center  ',
  },
});
const Tec = ({ children, title }: TecProps) => {
  const { base } = tec();
  return (
    <div className={base()}>
      {children}
      {title}
    </div>
  );
};
export default Tec;
