import "animate.css/animate.min.css";

// @ts-ignore
import ScrollAnimation from "react-animate-on-scroll";
// @ts-ignore
import { tv } from "tailwind-variants";

type TecProps = {
  title: string;
  children: React.ReactNode;
};

const tec = tv({
  slots: {
    base: "w-[150px] text-center flex flex-col h-[100px]  ",
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
