/* eslint-disable @typescript-eslint/no-unused-vars */
import { TCourseInfo } from '@/core/entities';
import { api } from '../lib/api';

export const _buscarCursoRequest = async (id: string) => {
  try {
    const { data } = await api.get<{
      course: TCourseInfo;
      hasUserPurchased: boolean;
    }>('/course/' + id);

    return {
      curso: data.course,
      hasUserPurchased: data.hasUserPurchased,
      error: false,
    };
  } catch (_) {
    return {
      error: true,
      curso: null,
      hasUserPurchased: false,
      message: 'Não encontrado',
    };
  }
};
