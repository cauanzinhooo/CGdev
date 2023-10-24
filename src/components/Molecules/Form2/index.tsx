import classNames from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
  })
  .required();
type FormProps = {
  name: string;
};
const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<FormProps> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className={`h-16 w-full rounded bg-zinc-300 indent-3  placeholder:text-sm placeholder:text-zinc-900  focus:outline-none focus:ring-0 ${classNames(
          {
            "!bg-rose-500/20 placeholder:text-rose-900 border-rose-700 border-[1px]":
              errors.name?.message,
          },
        )}`}
        {...register("name")}
        placeholder="Nome"
        type="text"
      />
      {errors?.name && (
        <p className="mt-4  pl-3 font-normal text-rose-600">
          {errors?.name?.message}
        </p>
      )}

      <input type="submit" />
    </form>
  );
};
export default Form2;
