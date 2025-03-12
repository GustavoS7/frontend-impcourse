import { UseFormRegister } from 'react-hook-form';

type TInputProps = {
  type?: 'password' | 'text' | 'number';
  id?: string;
  placeholder?: string;
  register?: UseFormRegister<any>;
};

export function Input({
  type = 'text',
  id = '',
  placeholder = '',
  register = () => ({}) as any,
}: TInputProps) {
  return (
    <input
      type={type}
      id={id}
      className="w-full bg-black30 text-lg py-1 px-3 outline-none rounded-md"
      placeholder={placeholder}
      {...register(id)}
    />
  );
}
