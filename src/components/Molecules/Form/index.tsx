import 'animate.css/animate.min.css';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef, useState } from 'react';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
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
    base: 'flex flex-col items-center justify-center gap-6',
    input:
      'w-[500px] rounded-md bg-green-950 px-5  py-6  text-left font-serif text-xl text-white-0 placeholder-slate-50 focus:outline-none focus:ring focus:ring-green-50 active:bg-green-950 lg:mx-0 ',
    submit:
      ' h-[64px] w-[164px] rounded-md bg-green-100 font-sans text-2xl font-bold text-white-0 ',
  },
});
type FormProps = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({ resolver: yupResolver(schema) });

  const { base, input, submit } = form();
  const formm = useRef(null);
  const submitForm = async () => {
    setIsSubmit(true);
    try {
      emailjs.sendForm(
        'service_bhhg1kw',
        'template_ccyccrg',
        formm.current!,
        'WAK_C_0eZD0pjZXXp',
      );
      setValue('name', '');
      setValue('email', '');
      setValue('message', '');
      toast.success('Formulário Enviado !', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error('Erro ao enviar Formulário !', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsSubmit(false);
    }
  };
  return (
    <>
      <form
        className="mt-14 px-2"
        ref={formm}
        onSubmit={handleSubmit(submitForm)}
      >
        <div className={base()}>
          <ScrollAnimation className={base()} animateIn="animate__fadeInLeft">
            <input
              className={input()}
              placeholder="Seu nome"
              {...register('name')}
            />
          </ScrollAnimation>
          {errors?.name && (
            <p className="mt-1  font-normal text-rose-600">
              {errors?.name?.message}
            </p>
          )}
          <ScrollAnimation className={base()} animateIn="animate__fadeInDown">
            <input
              className={input()}
              placeholder="Seu E-mail"
              {...register('email')}
              type="email"
            />
          </ScrollAnimation>
          {errors?.email && (
            <p className="mt-1  font-normal text-rose-600">
              {errors?.email?.message}
            </p>
          )}
          <ScrollAnimation className={base()} animateIn="animate__fadeInLeft">
            <input
              placeholder="Assunto"
              className={input()}
              {...register('message')}
              type="text"
            />
          </ScrollAnimation>
          {errors?.message && (
            <p className="mt-1  font-normal text-rose-600">
              {errors?.message?.message}
            </p>
          )}
          <ScrollAnimation className={base()} animateIn="animate__fadeInLeft">
            <button className={isSubmit ? 'disabled' : submit()} type="submit">
              Enviar
            </button>
          </ScrollAnimation>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default Form;
