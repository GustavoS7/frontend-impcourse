'use client';

import { TContent, TCourse } from '@/core/entities';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import {
  _buscarCursoInstrutorRequest,
  _listarAulasCursoRequest,
} from '@/service';

export default function UserCurso() {
  const [curso, setCurso] = useState<TCourse | null>(null);
  const [content, setContent] = useState<TContent[]>([]);

  const { id } = useParams();

  const getCurso = async () => {
    const data = await _buscarCursoInstrutorRequest(String(id));
    if (data.error) setCurso(null);
    else setCurso(data.curso);
  };

  const getContent = async () => {
    const data = await _listarAulasCursoRequest(String(id));
    setContent(data.content);
  };

  useEffect(() => {
    getCurso();
  }, []);

  useEffect(() => {
    if (curso?.id) {
      getContent();
    }
  }, [curso]);

  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-center container mx-auto my-10 items-center">
      <div className="w-full max-w-sm md:max-w-none md:w-1/2 flex justify-center items-center">
        <div className="max-w-lg w-full flex flex-col gap-4 items-center md:items-auto">
          <h1 className="text-5xl font-bold self-start text-primary">
            {curso?.title}
          </h1>
          <div className="w-full">{curso?.description}</div>

          <h2 className="text-3xl mt-8">Aulas</h2>
          <hr className="border w-full" />

          <ul className="my-5 flex flex-col gap-4 w-full">
            {content.map((el) => (
              <li
                key={el.id}
                className="flex w-full border-b border-black60 text-xl gap-6 p-4 hover:bg-black30"
              >
                <p className="text">{el.position}.</p>
                <p>{el.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
