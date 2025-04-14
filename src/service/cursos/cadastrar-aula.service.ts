/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from '../lib/api';

export type TCadastrarAulaRequest = {
  title: string;
  description: string;
  file: File;
};

export const _cadastrarAulaRequest = async ({
  title,
  description,
  file,
}: TCadastrarAulaRequest) => {
  try {
    const { data } = await api.post(
      '/content/cadastro',
      {
        title,
        description,
        file,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

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
