import { api } from './lib/api';

export type TLoginRequest = {
  password: string;
  email: string;
};

export const loginRequest = async ({ password, email }: TLoginRequest) => {
  try {
    const { data } = await api.post('/user/login', {
      password,
      email,
    });

    const { accessToken, refreshToken, ...user } = data;

    return {
      accessToken,
      refreshToken,
      user,
    };
  } catch (error: any) {
    if (error.message === 'Invalid credentials') {
      return {
        error: true,
        message: 'Email não cadastrado',
      };
    } else {
      return {
        error: true,
        message: 'Erro no envio do e-mail',
      };
    }
  }
};
