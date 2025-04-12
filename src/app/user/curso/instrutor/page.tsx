'use client';

import { _listarCursosAutorRequest } from '@/service';
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

  return <div>User Curso Instrutor</div>;
}
