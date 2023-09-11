import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

const Socials = tv({
  slots: {
    socialWrapper: 'hidden items-center justify-center lg:flex',
    icons: 'text-slate-100 hover:text-red-600',
    linkIcon: 'mx-4 text-4xl no-underline hover:border-none',
  },
});

const { socialWrapper, icons, linkIcon } = Socials();
const Social = () => {
  return (
    <div className={socialWrapper()}>
      <a
        target="_blank"
        className={linkIcon()}
        href="https://www.linkedin.com/in/cau%C3%A3-gomes-138150216/"
      >
        <FaLinkedin className={icons()} />
      </a>
      <a
        target="_blank"
        className={linkIcon()}
        href="https://github.com/cauanzinhooo"
      >
        <FaGithub className={icons()} />
      </a>
      <a
        target="_blank"
        className={linkIcon()}
        href="https://github.com/cauanzinhooo"
      >
        <FaEnvelope className={icons()} />
      </a>
    </div>
  );
};
export default Social;
