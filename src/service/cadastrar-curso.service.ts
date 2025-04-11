/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from './lib/api';

export type TCadastrarCursoRequest = {
  title: string;
  price: number;
  category: string;
  description: string;
};

export const cadastrarCursoRequest = async ({
  title,
  price,
  category,
  description,
}: TCadastrarCursoRequest) => {
  try {
    const { data } = await api.post('/course/cadastro', {
      title,
      price,
      category,
      description,
    });

    const { id } = data;

    return {
      id,
      error: false,
    };
  } catch (_) {
    return {
      error: true,
      message: 'Erro no cadastro',
    };
  }
};
