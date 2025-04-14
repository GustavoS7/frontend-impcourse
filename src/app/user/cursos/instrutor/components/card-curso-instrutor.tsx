import { TCourse } from '@/core/entities';
import Link from 'next/link';

type TCardCursoInstrutor = {
  curso: TCourse;
};

export function CardCursoInstrutor({ curso }: TCardCursoInstrutor) {
  return (
    <div className="w-68 h-68 flex flex-col gap-2">
      <div className="h-36">
        <img
          src={curso?.cover ?? ''}
          alt={curso.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-black90 font-bold text-lg">{curso.title}</p>

          <div className="text-black60">{curso.description}</div>
        </div>

        <Link
          href={`/user/curso/${curso.id}/`}
          className="w-full text-center p-1 bg-primary text-white rounded-md"
        >
          Editar
        </Link>
      </div>
    </div>
  );
}
