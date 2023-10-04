import 'animate.css/animate.min.css';

// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import HtmlParser from 'react-html-parser';
import { tv } from 'tailwind-variants';

type CardProps = {
  title: string;
  iconTitle: JSX.Element;
  icon: JSX.Element[];
  description: string;
};
const card = tv({
  slots: {
    Base: 'card h-[500px] w-[400px] bg-green-50',
    IconTitle: 'mt-3 flex justify-center text-[100px]',
    Title: 'text-center text-6xl text-brown-50 ',
  },
});
const Card = ({ title, iconTitle, icon, description }: CardProps) => {
  const { Base, IconTitle, Title } = card();
  return (
    <div className={Base()}>
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
        <div className="card-side front">
          <h2 className={IconTitle()}>{iconTitle}</h2>
          <h3 className={Title()}>{title}</h3>
          {icon}
        </div>
      </ScrollAnimation>
      <div className="card-side back flex flex-col items-center">
        <div className="mb-3 max-w-[80px]">{title}</div>
        <div className="mb-8 w-full">
          <span className="block text-center text-2xl font-semibold text-zinc-50">
            {title}
          </span>
        </div>
        <div className="px-8 text-center">
          <div>{HtmlParser(title)}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
