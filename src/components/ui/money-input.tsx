import { UseFormSetValue } from 'react-hook-form';
import { useEffect, useState } from 'react';

type TMoneyInputProps = {
  id: string;
  placeholder: string;
  setValue: UseFormSetValue<any>;
};

export function MoneyInput({
  id = '',
  placeholder = '',
  setValue,
}: TMoneyInputProps) {
  const [displayValue, setDisplayValue] = useState('');

  const handleMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    const formatted = (Number(raw) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    setDisplayValue(formatted);
    if (setValue) {
      setValue(id, Number(raw) / 100);
    }
  };

  useEffect(() => {
    setValue?.(id, 0);
    setDisplayValue('R$ 0,00');
  }, [id, setValue]);

  return (
    <input
      type="text"
      id={id}
      className="w-full bg-black30 text-lg py-1 px-3 outline-none rounded-md"
      placeholder={placeholder}
      value={displayValue}
      onChange={handleMoneyChange}
    />
  );
}
