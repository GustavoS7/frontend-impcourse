'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AuthContext } from '@/context/auth-context';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui';
import { z } from 'zod';

const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email precisa ser especificado',
      invalid_type_error: 'Email precisa ser especificado',
    })
    .email({ message: 'email inválido' }),
  password: z.string({
    required_error: 'Senha precisa ser especificado',
    invalid_type_error: 'Senha precisa ser especificado',
  }),
});

type TLoginProps = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [error, setError] = useState<string>('');

  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: TLoginProps) => {
    setError('');
    const response = await login(data);
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
        <label htmlFor="email">E-mail</label>
        <Input
          id="email"
          placeholder="Digite seu e-mail..."
          register={register}
        />
        {errors?.email?.message && (
          <span className="text-xs text-error">{errors?.email?.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password">Senha</label>
        <Input
          type="password"
          id="password"
          placeholder="Digite sua senha..."
          register={register}
        />
        {errors?.password?.message && (
          <span className="text-xs text-error">
            {errors?.password?.message}
          </span>
        )}
      </div>

      {error && <span className="text-sm text-error">{error}</span>}

      <button className="bg-primary w-full text-white90 text-xl py-2 rounded-md hover:bg-success font-bold">
        Entrar
      </button>
    </form>
  );
}
