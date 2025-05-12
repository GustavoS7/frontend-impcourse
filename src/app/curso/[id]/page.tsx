'use client';

import { Navbar } from '@/components/navbar';
import { TCourseInfo } from '@/core/entities';
import { _buscarCursoRequest } from '@/service';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const [curso, setCurso] = useState<TCourseInfo | null>(null);

  const { id } = useParams();

  const getCurso = async () => {
    const data = await _buscarCursoRequest(String(id));
    if (data.error) setCurso(null);
    else setCurso(data.curso);
  };

  useEffect(() => {
    getCurso();
  }, []);

  return (
    <div className="">
      <Navbar variant="secondary" />

      <div className="max-w-xl border mx-auto">
        <img
          src={curso?.cover ?? ''}
          alt=""
          className="w-[24rem] h-[16rem]"
        />
      </div>
    </div>
  );
}
