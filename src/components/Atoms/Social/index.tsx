import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Social = () => {
  return (
    <div className=" mb-4 flex justify-center sm:mt-9 sm:justify-between ">
      <a
        className=" mx-4 text-4xl no-underline hover:border-none "
        href="https://www.instagram.com/caua_gm/?next=%2F"
      >
        <FaInstagram className=" ml-5 text-green-100 hover:text-slate-200" />
      </a>
      <a
        className=" mx-4  text-4xl no-underline hover:border-none  "
        href="https://www.linkedin.com/in/cau%C3%A3-gomes-138150216/"
      >
        <FaLinkedin className="text-green-100 hover:text-slate-200" />
      </a>
      <a
        className=" mx-4 text-4xl  no-underline hover:border-none "
        href="https://github.com/cauanzinhooo"
      >
        <FaGithub className="text-green-100 hover:text-slate-200" />
      </a>
    </div>
  );
};
export default Social;
