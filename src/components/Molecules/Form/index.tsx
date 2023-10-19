import emailjs  from '@emailjs/browser'
import 'animate.css/animate.min.css';

// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import React from 'react'
import { useState } from 'react'
import { tv } from 'tailwind-variants'
const form = tv({
  slots: {
    base: 'flex flex-col gap-6',
    input: 'bg-green-50 text-xl font-mono rounded-md py-6 w-[565px] px-5 text-slate-50 placeholder-slate-50',
    submit: 'bg-green-950 text-white-0 text-2xl font-bold font-mono h-[64px] w-[164px] rounded-md '
  }
})
const Form = () => {
  const {base,input,submit} = form()
  const [name, Setname] = useState('')
  const [email, Setemail] = useState('')
  const [message, Setmessage] = useState('')
  function SendEmail (e:any){
   e.preventDefault()
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }
    emailjs.send('service_eri6mxg','template_ahcd2ak', templateParams, 'GxSF1qCjMP8PCOYag')
  }
  return (
      <form  onSubmit={SendEmail}>
         <ScrollAnimation  className={base()} animateIn="animate__fadeInLeft">
          <input placeholder='Seu Nome' className={input()} onChange={(e) => Setname(e.target.value)} value={name}  type='text'/>
          <input className={input()} placeholder='Seu E-mail' onChange={(e) => Setemail(e.target.value)} value={email} type='email'/>
          <input placeholder='Assunto' className={input()} onChange={(e) => Setmessage(e.target.value)} value={message}  type='text'/>
          <input className={submit()} type='submit'></input>
         </ScrollAnimation>
      </form>
  )
}
  

export default Form
