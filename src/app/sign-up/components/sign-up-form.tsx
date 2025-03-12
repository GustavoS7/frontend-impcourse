import { Input } from '@/components/ui';

export function SignUpForm() {
  return (
    <form className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Nome</label>
        <Input
          id="name"
          placeholder="Digite seu nome..."
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">E-mail</label>
        <Input
          id="email"
          placeholder="Digite seu e-mail..."
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password">Senha</label>
        <Input
          type="password"
          id="password"
          placeholder="Digite sua senha..."
        />
      </div>

      <button className="bg-primary w-full text-white90 text-xl py-2 rounded-md hover:bg-success font-bold">
        Cadastrar
      </button>
    </form>
  );
}
