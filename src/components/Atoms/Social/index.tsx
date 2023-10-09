import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

const Socials = tv({
  base: 'hidden lg:flex lg:flex-row',
  variants: {
    outlined: {
      true: 'mx-2 flex rounded-full border-[2px] border-slate-50 p-4 hover:border-[#EFEFEF] hover:text-[#EFEFEF]',
    },
    size: {
      sm: 'flex text-6xl gap-3  text-white-0',
      md: 'flex px-5 text-[40px]  sm:text-[50px] xl:text-[60px]',
    },
  },
});

const Social = ({ size, outlined }: any) => {
  return (
    <div className={Socials({ size })}>
      <a
        className={Socials({ outlined })}
        target="_blank"
        href="https://www.linkedin.com/in/cau%C3%A3-gomes-138150216/"
      >
        <FaLinkedin />
      </a>
      <a
        className={Socials({ outlined })}
        target="_blank"
        href="https://github.com/cauanzinhooo"
      >
        <FaGithub />
      </a>
      <a
        className={Socials({ outlined })}
        target="_blank"
        href="https://github.com/cauanzinhooo"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};
export default Social;
