/* eslint-disable @typescript-eslint/no-unused-vars */
import { TCourseInfo } from '@/core/entities';
import { api } from '../lib/api';

type TListarMeusCursosRequestInput = {
  page?: number;
};

type TMeusListarCursosRequestOutput = {
  courses: TCourseInfo[];
  page: number;
  total: number;
};

export const _listarMeusCursosRequest = async ({
  page,
}: TListarMeusCursosRequestInput) => {
  try {
    const { data } = await api.post<TMeusListarCursosRequestOutput>(
      '/course/user',
      {
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
