
import { tv } from 'tailwind-variants'
import FileImage from '@/public/assets/images/olive tree-rafiki.svg'
import Image from 'next/image'
import 'animate.css/animate.min.css';
import Next from '@/public/assets/images/next.png'
import JS from '@/public/assets/images/JS.png'
import CSS from '@/public/assets/images/CSS.png'
import TailwindImage from '@/public/assets/images/tailwind.svg'
import ReactImage from '@/public/assets/images/React.png'
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import Tec from '@/components/Atoms/Tec';


const showCase = tv({
  slots: {
    base: '',
    wrap: 'container flex justify-between  mx-auto h-[800px]',
    row: 'w-[750px]  flex flex-col justify-center font-mono text-white-0',
    row1: 'flex flex-wrap w-[750px]',
    title: 'text-6xl text-green-950 font-mono font-bold  text-center',
    tecs: 'w-[150px] h-[150px]'
    
  }
})
const ShowCase = () => {
  const {base , wrap , row, row1 ,title , tecs} = showCase()
  return (
    <section className={base()}>
       <h2 className={title()}>Minhas Tecnologias</h2>
      <div className={wrap()}>
        <div className={row()}>
        <ScrollAnimation  animateIn="animate__fadeInDown">
          <Image className='w-full' alt='image' src={FileImage}/>
        </ScrollAnimation>
        </div>
        <div className={row1()}>
            <Tec title='NextJS'>
              <Image className={tecs()} alt='nextJsImage' src={Next}/>
            </Tec>
            <Tec title='JavaScript'>
              <Image className={tecs()} alt='nextJsImage' src={JS}/>
            </Tec>
            <Tec title='CSS'>
              <Image className={tecs()} alt='nextJsImage' src={CSS}/>
            </Tec>
            <Tec title='TailwindCSS'>
              <Image className={tecs()} alt='TailwindCSS' src={TailwindImage}/>
            </Tec>
            <Tec title='React'>
              <Image className={tecs()} alt='TailwindCSS' src={ReactImage}/>
            </Tec>
        </div>

      </div>
    </section>
  )
}

export default ShowCase