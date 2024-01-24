import 'animate.css/animate.min.css';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef } from 'react';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { tv } from 'tailwind-variants';
import * as yup from 'yup';

import Button from '@/components/Atoms/Button';

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
    base: 'relative z-20 flex flex-col items-center justify-center gap-7',
    input:
      ' relative  w-[310px] rounded-md bg-white-0 px-3  py-4  text-left  font-serif text-lg text-slate-900 placeholder-green-100 focus:outline-none focus:ring focus:ring-green-150 active:bg-none min-[400px]:w-[400px] lg:mx-0 ',
    submit:
      ' h-[64px] w-[164px] rounded-md bg-green-950 font-sans text-2xl font-bold text-green-100 ',
  },
});
type FormProps = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({ resolver: yupResolver(schema) });

  const { base, input } = form();
  const formm = useRef(null);
  const submitForm = async () => {
    try {
      emailjs.sendForm(
        'service_bhhg1kw',
        'template_ccyccrg',
        formm.current!,
        'WAK_C_0eZD0pjZXXp',
      );
      reset();
      toast.success('Formulário Enviado !', {
        position: toast.POSITION.TOP_LEFT,
      });
    } catch (error) {
      toast.error('Erro ao enviar Formulário !', {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };
  return (
    <>
      <form
        className="mt-7  px-2"
        ref={formm}
        onSubmit={handleSubmit(submitForm)}
      >
        <div className={base()}>
          <ScrollAnimation
            animateOnce
            className={base()}
            animateIn="animate__fadeInLeft"
          >
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
          <ScrollAnimation
            animateOnce
            className={base()}
            animateIn="animate__fadeInDown"
          >
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
          <ScrollAnimation
            animateOnce
            className={base()}
            animateIn="animate__fadeInLeft"
          >
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
          <ScrollAnimation
            animateOnce
            className={base()}
            animateIn="animate__fadeInLeft"
          >
            <Button color="green" size="xxl" type="submit">
              Enviar
            </Button>
          </ScrollAnimation>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={4000}
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
