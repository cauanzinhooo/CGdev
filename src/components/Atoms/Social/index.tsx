import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

const Socials = tv({
  base: 'hidden gap-3  text-white-0 lg:flex lg:flex-row ',
  variants: {
    outlined: {
      true: 'flex rounded-full border-[2px] border-slate-50 p-5 hover:border-[#EFEFEF] hover:text-[#EFEFEF]',
      sized:
        'flex rounded-full border-[2px] border-slate-50 p-2 hover:border-[#EFEFEF] hover:text-[#EFEFEF]',
    },
    size: {
      xs: 'flex justify-center gap-5 text-2xl text-white-0  lg:justify-start',
      sm: 'mt-7 flex justify-center gap-5 text-2xl text-white-0  lg:justify-start',
      md: 'flex justify-center gap-5  text-[50px]',
    },
  },
});

const Social = ({ size, outlined }: any) => {
  return (
    <div className={Socials({ size })}>
      <Link
        className={Socials({ outlined })}
        target="_blank"
        href="https://www.linkedin.com/in/cau%C3%A3-gomes-138150216/"
      >
        <FaLinkedin className="hover:text-[#8c9c79]" />
      </Link>

      <Link
        className={Socials({ outlined })}
        target="_blank"
        href="https://github.com/cauanzinhooo"
      >
        <FaGithub className="hover:text-[#8c9c79]" />
      </Link>
      <Link
        className={Socials({ outlined })}
        target="_blank"
        href="https://github.com/cauanzinhooo"
      >
        <FaEnvelope className="hover:text-[#8c9c79]" />
      </Link>
    </div>
  );
};
export default Social;
