import 'animate.css/animate.min.css';

import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef, useState } from 'react';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { useForm } from 'react-hook-form';
import { tv } from 'tailwind-variants';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required('Campo obrigatório'),
    email: yup
      .string()
      .email('Precisa ser um e-mail válido')
      .required('Campo obrigatório'),
    message: yup.string().required('Campo obrigatório'),
  })
  .required();

const form = tv({
  slots: {
    base: 'flex flex-col justify-center gap-6 lg:flex lg:flex-col lg:items-end ',
    subtitle: `my-10 font-mono text-4xl text-green-950 after:mt-3  after:block after:h-1 after:w-20 after:bg-green-950
    after:content-['']`,
    input:
      'w-[565px] rounded-md bg-green-50 px-5  py-6 text-right font-mono text-xl text-slate-50 placeholder-slate-50 focus:outline-none focus:ring focus:ring-green-50 active:bg-green-950 lg:mx-0',
    submit:
      ' h-[64px] w-[164px] rounded-md bg-green-950 font-mono text-2xl font-bold text-white-0 ',
  },
});
type FormProps = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({ resolver: yupResolver(schema) });

  const { base, subtitle, input, submit } = form();
  const formm = useRef(null);
  const submitForm = (data: FormProps) => {
    emailjs
      .sendForm(
        'service_bhhg1kw',
        'template_ccyccrg',
        formm.current!,
        'WAK_C_0eZD0pjZXXp',
      )
      .then((response) => {
        console.log(data.name);
        data.name.trim();
        console.log(data.name);
        setValue('name', '');
        setValue('email', '');
        setValue('message', '');
      });
  };
  return (
    <form ref={formm} onSubmit={handleSubmit(submitForm)}>
      <ScrollAnimation className={base()} animateIn="animate__fadeInLeft">
        <h2 className={subtitle()}>Saiba mais sobre o meu trabalho</h2>
        <input
          className={input()}
          placeholder="Seu nome"
          {...register('name')}
        />
        {errors?.name && (
          <p className="mt-1  font-normal text-rose-600">
            {errors?.name?.message}
          </p>
        )}
        <input
          className={input()}
          placeholder="Seu E-mail"
          {...register('email')}
          type="email"
        />
        {errors?.email && (
          <p className="mt-1  font-normal text-rose-600">
            {errors?.email?.message}
          </p>
        )}
        <input
          placeholder="Assunto"
          className={input()}
          {...register('message')}
          type="text"
        />
        {errors?.message && (
          <p className="mt-1  font-normal text-rose-600">
            {errors?.message?.message}
          </p>
        )}
        <button className={submit()} type="submit">
          Enviar
        </button>
      </ScrollAnimation>
    </form>
  );
};

export default Form;
