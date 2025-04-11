'use client';

import { CadastrarCursoForm } from './components';
import { Navbar } from '@/components/navbar';

export default function CadastrarCurso() {
  return (
    <div>
      <Navbar variant="secondary" />

      <div className="flex flex-col lg:flex-row gap-10 justify-center container mx-auto my-10 items-center">
        <div className="max-w-sm md:max-w-none md:w-1/2 flex justify-center items-center">
          <div className="max-w-lg flex flex-col gap-4 items-center md:items-auto">
            <p className="text-primary font-bold text-4xl">
              Cadastrar novo curso
            </p>

            <div className="max-w-xs md:max-w-none w-full md:w-1/2">
              <img
                src="/cadastrar-curso-cover.svg"
                alt="Menina com computador e planilhas"
                className=" lg:w-full"
              />
            </div>

            <CadastrarCursoForm />
          </div>
        </div>
      </div>
    </div>
  );
}
