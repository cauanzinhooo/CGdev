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
      className={`${classNames(' ', {
        'bg-[#A9A9A9]  text-slate-100 px-7 text-2xl rounded-xl hover:bg-transparent duration-150 hover:text-slate-50 hover:border-[1px] hover:border-slate-200':
          sizes === 'md',
        'bg-[#A9A9A9] hover:bg-red-600 transition-all   text-slate-100 p-4 text-2xl rounded hover:text-slate-50':
          sizes === 'lg',
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
