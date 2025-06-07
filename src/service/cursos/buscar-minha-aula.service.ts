/* eslint-disable @typescript-eslint/no-unused-vars */
import { TContent } from '@/core/entities';
import { api } from '../lib/api';

export const _buscarAulaRequest = async (id: string) => {
  try {
    const { data } = await api.get<TContent>('/content/' + id);

    return {
      content: data,
      error: false,
    };
  } catch (_) {
    return {
      error: true,
      content: null,
      message: 'Não encontrado',
    };
  }
};
