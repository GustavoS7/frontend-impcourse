'use client';

import { _listarMeusCursosRequest } from '@/service';
import { TCourseInfo } from '@/core/entities';
import { useEffect, useState } from 'react';
import { CardCurso } from './components';

export default function Curso() {
  const [cursos, setCursos] = useState<TCourseInfo[] | null>([]);

  const listarCurso = async () => {
    const response = await _listarMeusCursosRequest({});
    if (response.error) {
      setCursos(null);
    } else {
      setCursos(response.cursos);
    }
  };

  useEffect(() => {
    listarCurso();
  }, []);

  return (
    <div>
      <div className="flex flex-col container mx-auto my-10 items-center justify-center">
        {!cursos || cursos.length < 1 ? (
          <>
            <img
              src="/sign-up-cover.svg"
              alt="Menina com computador e planilhas"
              className="w-72"
            />

            <div className="max-w-sm md:max-w-none md:w-1/2 flex justify-center items-center">
              <h1 className="text-primary text-5xl">Página em construção</h1>
            </div>
          </>
        ) : (
          <>
            {cursos.map((el) => (
              <CardCurso
                curso={el}
                key={el.id}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
