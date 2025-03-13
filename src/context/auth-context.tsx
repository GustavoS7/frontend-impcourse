'use client';

import { parseCookies, destroyCookie, setCookie } from 'nookies';
import { createContext, useEffect, useState } from 'react';
import { loginRequest, signUpRequest } from '@/service';
import { useRouter } from 'next/navigation';
import { api } from '@/service/lib/api';

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
  signUp: (data: TSignUpProps) => Promise<{ error: boolean } | undefined>;
  login: (data: TLoginProps) => Promise<{ error: boolean } | undefined>;
  returnMe: () => Promise<void>;
  signOut: () => void;
}

export const signOut = async () => {
  destroyCookie(undefined, 'nextauth.token');
  destroyCookie(undefined, 'nextauth.refreshToken');

  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }
};

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();

    if (token) {
      api
        .get('/user/me')
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

    await router.push('/');
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

    await router.push('/');
  };

  const returnMe = async () => {
    const { 'nextauth.token': token } = parseCookies();

    if (token) {
      api
        .get('/user/me')
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
