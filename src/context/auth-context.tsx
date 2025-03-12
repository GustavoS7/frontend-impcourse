import { parseCookies, destroyCookie, setCookie } from 'nookies';
import { createContext, useEffect, useState } from 'react';
import { loginRequest, signUpRequest } from '@/service';
import { api } from '@/service/lib/api';
import Router from 'next/router';

type User = {
  email: string;
  id: string;
  name: string;
};

type TLoginProps = {
  email: string;
  password: string;
};

type TSignUpProps = {
  email: string;
  password: string;
  name: string;
};

interface IAuthContext {
  isAuthenticated: boolean;
  user: User | null;
  signUp: (data: TSignUpProps) => Promise<any>;
  login: (data: TLoginProps) => Promise<any>;
  returnMe: () => Promise<void>;
  signOut: () => void;
}

export const signOut = async () => {
  destroyCookie(undefined, 'nextauth.token');
  destroyCookie(undefined, 'nextauth.refreshToken');

  await Router.push(process.env.NEXT_PUBLIC_API_URL_FRONT_END + '/login');
};

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();

    if (token) {
      api
        .get('/returnMe')
        .then((response) => {
          const { id, email, name } = response.data;
          setUser({ id, email, name });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  const login = async ({ password, email }: TLoginProps) => {
    const data = await loginRequest({ password, email });

    if (data.error) {
      setUser(null);
      return { error: true };
    }

    setCookie(undefined, 'nextauth.token', data.accessToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      path: '/',
    });

    setCookie(undefined, 'nextauth.refreshToken', data.refreshToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      path: '/',
    });

    api.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

    setUser(data.user);

    await Router.push('/');
  };

  const signUp = async ({ password, email, name }: TSignUpProps) => {
    const data = await signUpRequest({ password, email, name });

    if (data.error) {
      setUser(null);
      return { error: true };
    }

    setCookie(undefined, 'nextauth.token', data.accessToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      path: '/',
    });

    setCookie(undefined, 'nextauth.refreshToken', data.refreshToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      path: '/',
    });

    api.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

    setUser(data.user);

    await Router.push('/');
  };

  const returnMe = async () => {
    const { 'nextauth.token': token } = parseCookies();

    if (token) {
      api
        .get('/returnMe')
        .then((response) => {
          const { id, email, name } = response.data;
          setUser({ id, email, name });
        })
        .catch(() => {
          signOut();
        });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        returnMe,
        signOut,
        signUp,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
