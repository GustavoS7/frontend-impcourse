'use client';

import { CursoContainer, Hero } from './components';
import { _listarCursosRequest } from '@/service';
import { TCourseInfo } from '@/core/entities';
import { Navbar } from '@/components/navbar';
import { useEffect, useState } from 'react';
import Filtro from './components/filtro';

export default function Home() {
  const [cursos, setCursos] = useState<TCourseInfo[] | null>([]);

  const fetchCourses = async () => {
    const response = await _listarCursosRequest({});
    if (response.error) {
      setCursos(null);
    } else {
      setCursos(response.cursos);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="">
      <Navbar />

      <Hero />

      <Filtro setCursos={setCursos} />

      <CursoContainer cursos={cursos} />
    </div>
  );
}
