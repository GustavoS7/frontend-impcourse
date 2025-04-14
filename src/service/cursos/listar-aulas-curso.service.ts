/* eslint-disable @typescript-eslint/no-unused-vars */
import { TContent } from '@/core/entities';
import { api } from '../lib/api';

export const _listarAulasCursoRequest = async (courseId: string) => {
  try {
    const { data } = await api.get<TContent[]>('/content/listar/' + courseId);

    return {
      content: data,
      error: false,
    };
  } catch (_) {
    return {
      error: true,
      content: [],
      message: 'Erro na listagem',
    };
  }
};
