import { UseFormRegister } from 'react-hook-form';

type TTextareaProps = {
  id: string;
  placeholder?: string;
  rows?: number;
  register: UseFormRegister<any>;
};

export function Textarea({
  id,
  placeholder = '',
  rows = 4,
  register,
}: TTextareaProps) {
  return (
    <textarea
      id={id}
      className="w-full bg-black30 text-lg py-1 px-3 outline-none rounded-md resize-none"
      placeholder={placeholder}
      rows={rows}
      {...register(id)}
    />
  );
}
