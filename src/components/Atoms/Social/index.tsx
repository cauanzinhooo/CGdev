import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

const Socials = tv({
  base: 'hidden lg:flex lg:flex-row',
  variants: {
    outlined: {
      true: 'flex rounded-full border-[2px] border-slate-50 p-5 hover:border-[#EFEFEF] hover:text-[#EFEFEF]',
    },
    size: {
      sm: 'flex gap-5 text-4xl  text-white-0',
      md: 'flex justify-center gap-5 text-[50px]  sm:text-[60px] xl:text-[70px]',
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
