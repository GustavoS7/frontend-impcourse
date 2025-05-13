import { TCourseInfo } from '@/core/entities';
import { Curso } from './curso';

type TCursoContainerProps = {
  cursos: TCourseInfo[] | null;
};

export function CursoContainer({ cursos }: TCursoContainerProps) {
  return (
    <div className="p-10 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Cursos</h2>

      <div className="flex gap-10 flex-wrap w-full justify-center">
        {cursos ? (
          cursos.length > 0 ? (
            cursos.map((el, idx) => (
              <Curso
                course={el}
                key={idx}
              />
            ))
          ) : (
            <p className="text-3xl">Nenhum curso encontrado</p>
          )
        ) : (
          <>Erro na busca</>
        )}
      </div>
    </div>
  );
}
