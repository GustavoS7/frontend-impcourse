'use client';

import { _buscarAulaRequest, _buscarMeuCursoRequest } from '@/service';
import { TCourseInfo } from '@/core/entities';
import { Navbar } from '@/components/navbar';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
  const [curso, setCurso] = useState<TCourseInfo | null>(null);
  const [content, setContent] = useState<any>(null);

  const { id, aulaId } = useParams();

  const getCurso = async () => {
    const data = await _buscarMeuCursoRequest(String(id));
    if (data.error) setCurso(null);
    else {
      setCurso(data.curso);
    }
  };

  const getContent = async () => {
    const data = await _buscarAulaRequest(String(aulaId));
    if (data.error) setCurso(null);
    else {
      setContent(data.content);
    }
  };

  useEffect(() => {
    getCurso();
    getContent();
  }, []);

  return (
    <div>
      <Navbar variant="secondary" />

      <div className="max-w-screen-lg mx-auto w-full flex gap-10 my-10">
        <div className="flex-1 flex flex-col gap-6">
          {!content ? (
            <>
              <div>Curso não encontrado</div>
            </>
          ) : (
            <>
              <video
                controls
                width="100%"
                poster="/preview.jpg"
              >
                <source
                  src={content.url}
                  type="video/mp4"
                />
                Seu navegador não suporta vídeos HTML5.
              </video>

              <h2 className="text-3xl font-bold">{content?.title}</h2>

              <div className="w-full flex flex-col gap-2">
                <div className="text-lg text-black60 w-full">
                  {content?.description}
                </div>
              </div>
            </>
          )}

          <div className="w-[40rem]">
            <div className="flex flex-col gap-10">
              {curso?.content.map((el: any) => (
                <div
                  key={el.position}
                  className="mx-4 border w-full flex justify-between py-1 px-10 items-center rounded-md"
                >
                  <div className="flex gap-1 items-center">
                    <p>{el.position}</p>
                    <p className="text-xl font-bold">{el.title}</p>
                  </div>

                  <Link
                    href={`/user/acessar/${id}/${el.id}`}
                    className="px-4 bg-primary py-1 rounded-md text-white"
                  >
                    Acessar aula
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
