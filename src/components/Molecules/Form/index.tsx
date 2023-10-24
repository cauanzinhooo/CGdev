import 'animate.css/animate.min.css';

import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { useForm } from 'react-hook-form';
import { tv } from 'tailwind-variants';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required('Campo obrigatório'),
  })
  .required();
type FormProps = {
  name: 'string';
};

const form = tv({
  slots: {
    base: 'flex flex-col justify-center gap-6 lg:flex lg:flex-col lg:items-end',
    subtitle: `my-10 font-mono text-4xl text-green-950 after:mt-3  after:block after:h-1 after:w-20 after:bg-green-950
    after:content-['']`,
    input:
      'mx-auto w-[565px] rounded-md bg-green-50 px-5 py-6 font-mono text-xl text-slate-50 placeholder-slate-50 lg:mx-0',
    submit:
      ' h-[64px] w-[164px] rounded-md bg-green-950 font-mono text-2xl font-bold text-white-0 ',
  },
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ resolver: yupResolver(schema) });
  const { base, subtitle, input, submit } = form();
  const [name, Setname] = useState('');
  const [email, Setemail] = useState('');
  const [message, Setmessage] = useState('');
  function SendEmail(e: any) {
    const templateParams = {
      from_name: name,
      message,
      email,
    };
    emailjs.send(
      'service_eri6mxg',
      'template_ahcd2ak',
      templateParams,
      'GxSF1qCjMP8PCOYag',
    );
  }
  return (
    <form onSubmit={handleSubmit(SendEmail)}>
      <ScrollAnimation className={base()} animateIn="animate__fadeInLeft">
        <h2 className={subtitle()}>Saiba mais sobre o meu trabalho</h2>
        <input
          placeholder="Seu Nome"
          className={input()}
          onChange={(e) => Setname(e.target.value)}
          {...register('name')}
          type="text"
        />
        {errors?.name && (
          <p className="mt-4  pl-3 font-normal text-rose-600">
            {errors?.name?.message}
          </p>
        )}
        <input
          className={input()}
          placeholder="Seu E-mail"
          onChange={(e) => Setemail(e.target.value)}
          value={email}
          type="email"
        />
        <input
          placeholder="Assunto"
          className={input()}
          onChange={(e) => Setmessage(e.target.value)}
          value={message}
          type="text"
        />
        <input className={submit()} type="submit" />
      </ScrollAnimation>
    </form>
  );
};

export default Form;
