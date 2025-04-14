'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { _cadastrarAulaRequest } from '@/service';
import { Input, Textarea } from '@/components/ui';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { AulaInput } from './aula-input';
import { useState } from 'react';
import { z } from 'zod';

const cadastrarAulaSchema = z.object({
  title: z
    .string({
      required_error: 'Título precisa ser especificado',
      invalid_type_error: 'Título precisa ser especificado',
    })
    .min(3, { message: 'Título precisa ter no mínimo 3 letras' }),
  description: z.string({
    required_error: 'Categoria precisa ser especificado',
    invalid_type_error: 'Categoria precisa ser especificado',
  }),
  file: z.custom<File>(
    (file) => {
      if (!file) return false;

      const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4'];
      const maxSizeInBytes = 50 * 1024 * 1024;

      return allowedTypes.includes(file.type) && file.size <= maxSizeInBytes;
    },
    {
      message: 'Arquivo inválido. Formato ou tamanho não permitido.',
    },
  ),
});

type TCadastrarAulaInput = z.infer<typeof cadastrarAulaSchema>;

type TCadastrarAulaFormProps = {
  courseId: string;
};

export function CadastrarAulaForm({ courseId }: TCadastrarAulaFormProps) {
  const [error, setError] = useState<string>('');

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(cadastrarAulaSchema),
  });

  const handleCadastrarAula = async (data: TCadastrarAulaInput) => {
    setError('');
    const response = await _cadastrarAulaRequest({
      ...data,
      courseId,
    });
    if (response?.error) {
      setError('Erro na criação, tente novamente mais tarde');
    } else {
      await router.push('/user/curso/' + courseId);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 w-full items-center"
      onSubmit={handleSubmit(handleCadastrarAula)}
    >
      <AulaInput setValue={setValue} />
      {errors?.file?.message && (
        <span className="text-xs text-error">{errors?.file?.message}</span>
      )}

      <div className="flex flex-col gap-1 w-full">
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

      <div className="flex flex-col gap-1 w-full">
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
