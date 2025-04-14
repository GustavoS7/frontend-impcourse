import { _buscarCursoInstrutorRequest } from '@/service';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { TCourse } from '@/core/entities';

export default function UserCurso() {
  const [curso, setCurso] = useState<TCourse | null>(null);

  const { id } = useParams();

  const getCurso = async () => {
    const data = await _buscarCursoInstrutorRequest(String(id));
    if (data.error) setCurso(null);
    else setCurso(data.curso);
  };

  useEffect(() => {
    getCurso();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-center container mx-auto my-10 items-center">
      <div className="max-w-sm md:max-w-none md:w-1/2 flex justify-center items-center">
        <div className="max-w-lg flex flex-col gap-4 items-center md:items-auto">
          <h1 className="text-4xl self-start text-primary">{curso?.title}</h1>
          <div>{curso?.description}</div>

          <h2>Aulas</h2>
          <hr />

          <div></div>
        </div>
      </div>
    </div>
  );
}
