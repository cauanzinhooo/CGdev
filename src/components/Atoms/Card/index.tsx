import 'animate.css/animate.min.css';

// @ts-ignore
// @ts-ignore
import { tv } from 'tailwind-variants';

type CardProps = {
  title: string;
  iconTitle: JSX.Element;
  icon: JSX.Element[];
  description: string;
};

const card = tv({
  slots: {
    Base: 'card mx-1 h-[450px] w-[300px] bg-green-950 sm:h-[420px] sm:w-[400px]',
    Rotate: 'card-side front',
    FrontCard: ' h-[420px] w-[300px] text-brown-50  sm:w-[400px]',
    SideCard: 'card-side back h-[500px] w-[300px] sm:w-[400px]',
    IconTitle: 'mt-3 flex justify-center text-green-50 ',
    Title: 'text-center font-serif text-3xl text-white-0',
    Description: ' mx-2 mt-10 text-center font-serif text-xl text-white-0',
  },
});
const Card = ({ title, iconTitle, icon, description }: CardProps) => {
  const { Base, Rotate, FrontCard, SideCard, IconTitle, Title, Description } =
    card();
  return (
    <div className={Base()}>
      <div className={Rotate()}>
        <div className={FrontCard()}>
          <h2 className={IconTitle()}>{iconTitle}</h2>
          <h3 className={Title()}>{title}</h3>
          {icon}
        </div>
      </div>
      <div className={SideCard()}>
        <div className="mx-auto text-green-50 ">
          <h2 className={IconTitle()}>{iconTitle}</h2>
          <p className={Description()}>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
