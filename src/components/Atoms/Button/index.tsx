/* eslint-disable react/button-has-type */
import classNames from 'classnames';

export type ButtonProps = {
  sizes?: 'md' | 'lg';
  icon?: JSX.Element;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({
  sizes = 'md',
  icon,
  children,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${classNames('font-mono font-bold ', {
        'bg-slate-200  text-lime-700 px-7 text-2xl rounded-3xl hover:bg-transparent duration-150 hover:text-slate-50 hover:border-[1px] hover:border-slate-200':
          sizes === 'md',
      })}`}
    >
      <div className="flex items-center font-mono">
        {children}
        {!!icon && icon}
      </div>
    </button>
  );
};

export default Button;
