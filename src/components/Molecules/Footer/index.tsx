import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

const footer = tv({
  slots: {
    footerWrapper: 'mt-20 w-full bg-green-950',
    footerContainer:
      'container mx-auto flex flex-col gap-2 lg:flex lg:flex-row lg:gap-5 ',
    iconsWrapper: 'flex items-center gap-2 text-2xl  text-slate-50',
    iconsColor: 'text-lg text-[#EFEFEF;]',
    utilityWrapper: 'flex flex-col justify-center py-3 text-center lg:py-5',
    utilityLi: 'text-4xl text-slate-50',
  },
});

const {
  footerWrapper,
  footerContainer,
  iconsWrapper,
  iconsColor,
  utilityWrapper,
  utilityLi,
} = footer();

const utilityLinks = [
  {
    id: 1,
    label: 'Portfólio',
    href: 'https://www.instagram.com',
  },
  {
    id: 2,
    label: 'Contato',
    href: '',
  },
  {
    id: 3,
    label: 'Enviar Mensagem',
    href: '',
  },
];
const Footer = () => {
  return (
    <footer className={footerWrapper()}>
      <div className={footerContainer()}>
        <div className="mx-auto lg:mx-0">
          <h2 className="text-4xl text-slate-50 lg:mt-5">Entre em Contato</h2>
          <ul>
            <li>
              <a className={iconsWrapper()} href="a">
                <FaEnvelope />
                <p className={iconsColor()}>cauan21gomes@hotmail.com</p>
              </a>
            </li>
            <li>
              <a className={iconsWrapper()} href="a">
                <FaWhatsapp />
                <p className={iconsColor()}>(21) 97932-6886</p>
              </a>
            </li>
          </ul>
        </div>
        <div className={utilityWrapper()}>
          <h2 className={utilityLi()}>Links úteis</h2>
          {utilityLinks.map((link: any) => (
            <ul className="text-center lg:text-left" key={link.id}>
              <a href={link.href}>
                <li className="text-[#EFEFEF]">-{link.label}</li>
              </a>
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
