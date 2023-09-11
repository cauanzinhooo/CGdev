import Image from 'next/image';

import socialImage from '@/public/assets/images/social.svg';

const ContactSection = () => {
  return (
    <section className=" relative before:absolute before:h-[500px] before:w-full before:rounded-r-xl before:bg-[#405230] before:content-[''] after:absolute after:right-0 after:h-[500px] after:w-full after:rounded-l-xl after:bg-[#405230] after:content-[''] lg:before:inset-y-0 lg:before:block lg:before:w-[45%] lg:after:top-0 lg:after:block lg:after:w-[45%]   ">
      <div className="container relative z-10 mx-auto">
        <div className=" flex flex-col  justify-center text-center lg:flex lg:h-[600px] lg:flex-row lg:justify-between">
          <div className="relative">
            <Image
              className="relative"
              width={500}
              height={500}
              alt="SocialImage"
              src={socialImage}
            />
          </div>
          <div className="px-[-15px] text-slate-50">
            <h1 className="text-5xl">Entre Em Contato</h1>
            <p className="text-3xl">Para conferir mais sobre o meu trabalho</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
