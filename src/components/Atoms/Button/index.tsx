/* eslint-disable react/button-has-type */
import classNames from 'classnames';

export type ButtonProps = () => {
  sizes?: 'md' | 'lg';
  icon?: JSX.Element;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ sizes = 'md', icon, children }: ButtonProps) => {
  return (
    <button
      className={`${classNames('font-signika font-bold', {
        'bg-slate-50 text-lime-900 px-7 text-2xl rounded-3xl': sizes === 'md',
      })}`}
    >
      <div className="flex items-center">
        {children}
        {!!icon && icon}
      </div>
    </button>
  );
};

export default Button;
