/* eslint-disable @typescript-eslint/no-unused-vars */
import { TCourseInfo } from '@/core/entities';
import { api } from '../lib/api';

type TListarCursosRequestInput = {
  filter?: {
    category?: string;
  };
  page?: number;
};

type TListarCursosRequestOutput = {
  courses: TCourseInfo[];
  page: number;
  total: number;
};

export const _listarCursosRequest = async ({
  filter,
  page,
}: TListarCursosRequestInput) => {
  try {
    const { data } = await api.post<TListarCursosRequestOutput>(
      '/course/listar',
      {
        filter,
        page,
      },
    );

    return {
      cursos: data.courses,
      pagina: data.page,
      total: data.total,
      error: false,
    };
  } catch (_) {
    return {
      error: true,
      cursos: null,
      message: 'Erro no cadastro',
    };
  }
};
