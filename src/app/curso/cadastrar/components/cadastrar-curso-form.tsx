'use client';

import { Input, MoneyInput, Select, Textarea } from '@/components/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { cadastrarCursoRequest } from '@/service';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';

const cadastrarCursoSchema = z.object({
  title: z
    .string({
      required_error: 'Título precisa ser especificado',
      invalid_type_error: 'Título precisa ser especificado',
    })
    .min(3, { message: 'Título precisa ter no mínimo 3 letras' }),
  price: z.number({
    required_error: 'Preço precisa ser especificado',
    invalid_type_error: 'Preço precisa ser especificado',
  }),
  category: z.string({
    required_error: 'Categoria precisa ser especificado',
    invalid_type_error: 'Categoria precisa ser especificado',
  }),
  description: z.string({
    required_error: 'Categoria precisa ser especificado',
    invalid_type_error: 'Categoria precisa ser especificado',
  }),
});

type TCadastrarCursoProps = z.infer<typeof cadastrarCursoSchema>;

export function CadastrarCursoForm() {
  const [error, setError] = useState<string>('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(cadastrarCursoSchema),
  });

  const handleLogin = async (data: TCadastrarCursoProps) => {
    setError('');
    const response = await cadastrarCursoRequest(data);
    if (response?.error) {
      setError('Erro na autenticação, tente novamente mais tarde');
    }
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="title">Título</label>
        <Input
          id="title"
          placeholder="Digite o título"
          register={register}
        />
        {errors?.title?.message && (
          <span className="text-xs text-error">{errors?.title?.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password">Preço</label>
        <MoneyInput
          id="price"
          placeholder="Digite o preço"
          setValue={setValue}
        />
        {errors?.price?.message && (
          <span className="text-xs text-error">{errors?.price?.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="category">Categoria</label>
        <Select
          id="category"
          placeholder="Selecione a categoria"
          options={[
            {
              label: 'Web Development',
              value: 'Web Development',
            },
            {
              label: 'Data Science',
              value: 'Data Science',
            },
            {
              label: 'Mobile Development',
              value: 'Mobile Development',
            },
            {
              label: 'Hardware',
              value: 'Hardware',
            },
            {
              label: 'Software Engineering',
              value: 'Software Engineering',
            },
          ]}
          register={register}
        />
        {errors?.category?.message && (
          <span className="text-xs text-error">
            {errors?.category?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description">Descrição</label>
        <Textarea
          id="description"
          placeholder="Digite a descrição..."
          register={register}
        />
        {errors?.description?.message && (
          <span className="text-xs text-error">
            {errors?.description?.message}
          </span>
        )}
      </div>

      {error && <span className="text-sm text-error">{error}</span>}

      <button className="bg-primary w-full text-white90 text-xl py-2 rounded-md hover:bg-success font-bold">
        Cadastrar
      </button>
    </form>
  );
}
