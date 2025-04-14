/* eslint-disable @typescript-eslint/no-unused-vars */
import { TCourse } from '@/core/entities';
import { api } from '../lib/api';

export const _buscarCursoInstrutorRequest = async (id: string) => {
  try {
    const { data } = await api.get<TCourse>('/course/autor/' + id);

    return {
      curso: data,
      error: false,
    };
  } catch (_) {
    return {
      error: true,
      curso: null,
      message: 'Erro no cadastro',
    };
  }
};
