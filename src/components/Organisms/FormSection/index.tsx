import Form from "@/components/Molecules/Form";
import { tv } from "tailwind-variants";
import ChecklistImage from "@/public/assets/images/Mailbox-amico (1).svg";
import Image from "next/image";
import "animate.css/animate.min.css";

// @ts-ignore
import ScrollAnimation from "react-animate-on-scroll";
const formSection = tv({
  slots: {
    wrap: "bg-[#ebebeb] w-full py-26 my-20",
    title: `text-[70px] mb-20 text-center font-mono font-bold  text-green-50 after:mx-auto after:mt-3 after:block after:h-1 after:w-20
    after:bg-green-50 after:content-['']`,
    base: "container mx-auto lg:flex lg:justify-between ",
  },
});

const FormSection = () => {
  const { base, title, wrap } = formSection();
  return (
    <section className={wrap()}>
      <h2 className={title()}>Entre em contato</h2>
      <div className={base()}>
        <ScrollAnimation animateIn="animate__fadeInDown">
          <Image
            className="w-[700px]"
            src={ChecklistImage}
            alt="ChecklistImage"
          />
        </ScrollAnimation>
        <Form />
      </div>
    </section>
  );
};
export default FormSection;
