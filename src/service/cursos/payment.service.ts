/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from '../lib/api';

type TPaymentRequest = {
  id: string;
};

type TPaymentResponse = {
  initPoint: string;
};

export const _paymentRequest = async ({ id }: TPaymentRequest) => {
  try {
    const { data } = await api.post<TPaymentResponse>('/course/purchase', {
      courseId: id,
    });

    return {
      initPoint: data.initPoint,
      error: false,
    };
  } catch (_) {
    return {
      error: true,
      initPoint: '',
    };
  }
};
