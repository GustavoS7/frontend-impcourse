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
          cursos.map((el) => (
            <>
              <Curso
                course={el}
                key={el.id}
              />
              <Curso
                course={el}
                key={el.id}
              />
              <Curso
                course={el}
                key={el.id}
              />
              <Curso
                course={el}
                key={el.id}
              />
            </>
          ))
        ) : (
          <>Erro na busca</>
        )}
      </div>
    </div>
  );
}
