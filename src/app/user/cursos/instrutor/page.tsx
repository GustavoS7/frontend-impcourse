'use client';

import { _listarCursosAutorRequest } from '@/service';
import { CardCursoInstrutor } from './components';
import { useEffect, useState } from 'react';
import { TCourse } from '@/core/entities';

export default function UserCursoInstrutor() {
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
    <div className="my-8 grid gap-y-10 grid-cols-3 place-items-center">
      {cursos?.map((el) => (
        <>
          <CardCursoInstrutor
            curso={el}
            key={el.id}
          />
        </>
      ))}
    </div>
  );
}
