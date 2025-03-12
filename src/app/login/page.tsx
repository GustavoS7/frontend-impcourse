import { Navbar } from '@/components/navbar';
import { LoginForm } from './components';
import Link from 'next/link';

export default function Login() {
  return (
    <div>
      <Navbar variant="secondary" />

      <div className="flex flex-col lg:flex-row gap-10 justify-center container mx-auto my-10 items-center">
        <div className="max-w-sm md:max-w-none w-full md:w-1/2">
          <img
            src="/login-cover.svg"
            alt="Menina com computador e planilhas"
            className=" lg:w-full"
          />
        </div>

        <div className="max-w-sm md:max-w-none md:w-1/2 flex justify-center items-center">
          <div className="max-w-lg flex flex-col gap-4 items-center md:items-auto">
            <p className="text-primary font-bold text-4xl">ImpCourse</p>
            <p className="text-black60 text-xl">
              Junte-se a nós e obtenha mais benefícios. Prometemos manter seus
              dados seguros.
            </p>

            <LoginForm />

            <p>
              <span className="text-black60">Não possui uma conta? </span>
              <Link
                href="/sign-up"
                className="text-primary font-bold hover:underline"
              >
                Clique para se cadastrar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
