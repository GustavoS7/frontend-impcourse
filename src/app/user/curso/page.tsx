'use client';

import { _listarCursosAutorRequest } from '@/service/cursos';
import { Navbar } from '@/components/navbar';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TCourse } from '@/core/entities';

export default function Curso() {
  const [cursos, setCursos] = useState<TCourse[] | null>([]);

  const listarCursosAutor = async () => {
    const response = await _listarCursosAutorRequest();
    if (response.error) {
      setCursos(null);
    } else {
      setCursos(response.cursos);
    }
  };

  useEffect(() => {
    listarCursosAutor();
  }, []);

  return (
    <div>
      <Navbar variant="secondary" />

      <div className="flex flex-col lg:flex-row gap-10 justify-center container mx-auto my-10 items-center">
        <div className="max-w-sm md:max-w-none w-full md:w-1/2">
          <img
            src="/sign-up-cover.svg"
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

            <p>
              <span className="text-black60">Já possui uma conta? </span>
              <Link
                href="/login"
                className="text-primary font-bold hover:underline"
              >
                Clique para entrar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
