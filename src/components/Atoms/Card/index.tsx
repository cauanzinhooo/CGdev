import 'animate.css/animate.min.css';

// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
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
    Base: 'card mx-3 h-[450px] w-[300px] bg-green-950 sm:h-[500px] sm:w-[400px]',
    Rotate: 'card-side front',
    FrontCard: ' h-[500px] w-[300px] text-brown-50  sm:w-[400px]',
    SideCard: 'card-side back h-[500px] w-[300px] sm:w-[400px]',
    IconTitle: 'mt-3 flex justify-center text-green-50 ',
    Title: 'text-center text-5xl text-white-0 sm:text-5xl',
    Description:
      'mx-2 mt-10 text-center font-sans text-xl text-white-0 sm:text-2xl',
  },
});
const Card = ({ title, iconTitle, icon, description }: CardProps) => {
  const { Base, Rotate, FrontCard, SideCard, IconTitle, Title, Description } =
    card();
  return (
    <div className={Base()}>
      <ScrollAnimation
        className={Rotate()}
        animateIn="animate__fadeInLeft"
        animateOnce
      >
        <div className={FrontCard()}>
          <h2 className={IconTitle()}>{iconTitle}</h2>
          <h3 className={Title()}>{title}</h3>
          {icon}
        </div>
      </ScrollAnimation>
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
