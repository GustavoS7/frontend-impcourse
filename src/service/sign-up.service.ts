import { api } from './lib/api';

export type TSignUpRequest = {
  password: string;
  email: string;
  name: string;
};

export const signUpRequest = async ({
  password,
  email,
  name,
}: TSignUpRequest) => {
  try {
    const { data } = await api.post('/user/cadastro', {
      password,
      email,
      name,
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
