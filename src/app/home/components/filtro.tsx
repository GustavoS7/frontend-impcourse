import { Select } from '@/components/ui';
import { TCourseInfo } from '@/core/entities';
import { _listarCursosRequest } from '@/service';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  category: string;
};

type TFiltroProps = {
  setCursos: Dispatch<SetStateAction<TCourseInfo[] | null>>;
};

export default function Filtro({ setCursos }: TFiltroProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const response = await _listarCursosRequest({
      filter: {
        category: data.category,
      },
    });
    if (response.error) {
      setCursos(null);
    } else {
      setCursos(response.cursos);
    }
  };

  return (
    <div className="p-6 shadow-lg max-w-screen-md rounded-md -mt-10 bg-white mx-auto flex flex-col gap-6">
      <div>
        <p className="text-2xl">O que você quer aprender?</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-between"
      >
        <div className="w-72">
          <Select
            id="category"
            placeholder="Selecione a categoria"
            options={[
              {
                label: 'Web Development',
                value: 'Web Development',
              },
              {
                label: 'Data Science',
                value: 'Data Science',
              },
              {
                label: 'Mobile Development',
                value: 'Mobile Development',
              },
              {
                label: 'Hardware',
                value: 'Hardware',
              },
              {
                label: 'Software Engineering',
                value: 'Software Engineering',
              },
            ]}
            register={register}
          />
        </div>

        <button
          className="w-42 bg-primary rounded-md text-white text-xl font-bold py-1 disabled:opacity-60"
          disabled={isSubmitting}
        >
          {!isSubmitting ? 'Buscar' : 'Buscando'}
        </button>
      </form>
    </div>
  );
}
