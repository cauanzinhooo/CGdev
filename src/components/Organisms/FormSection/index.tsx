import  Form  from '@/components/Molecules/Form'
import { tv } from 'tailwind-variants'
import ChecklistImage from '@/public/assets/images/Mailbox-amico.svg'
import Image from 'next/image'
import 'animate.css/animate.min.css';

// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
const formSection = tv({
  slots: {
    wrap: 'bg-[#ebebeb] w-full py-32',
    title: 'text-[70px] mb-20 text-center font-mono font-bold  text-green-50',
    subtitle: 'text-left mb-10 text-4xl text-green-950 font-mono',
    base: 'container mx-auto justify-between  flex',
    iconsWrapper: 'flex items-center gap-2 text-2xl  text-green-950',
    iconsColor: 'text-lg text-[#EFEFEF;]',
  }
})

const FormSection = () => {
  const {base,title,subtitle,wrap,iconsWrapper,iconsColor} = formSection()
  return(
    <section className={wrap()}>
      <h2 className={title()}>Entre em contato</h2>
      <div className={base()}>
        <div className=''>
        <h2 className={subtitle()}>Saiba mais sobre o meu trabalho</h2>
          <Form/>
          </div>
          <div className='justify-end flex w-full'>
            <ScrollAnimation animateIn='animate__fadeInDown'>
             <Image className='w-[700px]' src={ChecklistImage} alt='ChecklistImage'/>
            </ScrollAnimation>
          </div> 
      </div>
    
    </section>
  )
}
export default FormSection;