/* eslint-disable @typescript-eslint/no-unused-vars */
import { TCourse } from '@/core/entities';
import { api } from '../lib/api';

export const _listarCursosAutorRequest = async () => {
  try {
    const { data } = await api.get<TCourse[]>('/course/autor');

    return {
      cursos: data,
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
