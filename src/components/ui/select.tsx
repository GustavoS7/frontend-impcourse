import { UseFormRegister } from 'react-hook-form';

type TSelectProps = {
  id: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  register: UseFormRegister<any>;
};

export function Select({
  id,
  options,
  placeholder = '',
  register,
}: TSelectProps) {
  return (
    <select
      id={id}
      className="w-full bg-black30 text-lg py-1 px-3 outline-none rounded-md"
      {...register(id)}
    >
      <option
        value=""
        disabled
        hidden
      >
        {placeholder}
      </option>
      {options.map((opt) => (
        <option
          key={opt.value}
          value={opt.value}
        >
          {opt.label}
        </option>
      ))}
    </select>
  );
}
