/* eslint-disable @typescript-eslint/no-unused-vars */
import { TCourseInfo } from '@/core/entities';
import { api } from '../lib/api';

export const _buscarCursoRequest = async (id: string) => {
  try {
    const { data } = await api.get<TCourseInfo>('/course/' + id);

    return {
      curso: data,
      error: false,
    };
  } catch (_) {
    return {
      error: true,
      curso: null,
      message: 'Não encontrado',
    };
  }
};
