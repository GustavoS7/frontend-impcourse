/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from '../lib/api';

export const _listarCursosAutorRequest = async () => {
  try {
    const { data } = await api.get('/course/autor');

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
