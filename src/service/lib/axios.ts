import { parseCookies, setCookie } from 'nookies';
import { signOut } from '@/context/auth-context';
import { AuthTokenError } from '../errors';
import axios, { AxiosError } from 'axios';

let isRefreshing = false;
let failedRequestsQueue: any = [];

export function setupAPIClient(context: any = undefined) {
  let cookies = parseCookies(context);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + '/api',
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${cookies['nextauth.token']}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: any) => {
      if (error.response.status === 403) {
        if (error.response.data.error === 'Forbidden') {
          cookies = parseCookies(context);

          const { 'nextauth.refreshToken': refreshToken } = cookies;

          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            api
              .post('/user/refreshToken', {
                refreshToken,
              })
              .then((response) => {
                const { accessToken } = response.data;

                setCookie(context, 'nextauth.token', accessToken, {
                  maxAge: 60 * 10, // 10 minutos
                  path: '/',
                });

                setCookie(
                  context,
                  'nextauth.refreshToken',
                  response.data.refreshToken,
                  {
                    maxAge: 60 * 10, // 10 minutos
                    path: '/',
                  },
                );

                api.defaults.headers.Authorization = `Bearer ${accessToken}`;

                failedRequestsQueue.forEach((request: any) =>
                  request.onSuccess(accessToken),
                );
                failedRequestsQueue = [];
              })
              .catch((err) => {
                failedRequestsQueue.forEach((request: any) =>
                  request.onFailure(err),
                );
                failedRequestsQueue = [];

                signOut();
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers.Authorization = `Bearer ${token}`;

                resolve(api(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        } else {
          signOut();
          if (!window) {
            return Promise.reject(new AuthTokenError());
          }
        }
      }
      return Promise.reject(error);
    },
  );

  return { api };
}
