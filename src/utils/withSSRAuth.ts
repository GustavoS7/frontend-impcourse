import { destroyCookie, parseCookies } from 'nookies';
import { AuthTokenError } from '@/service/errors';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

type TObj = {
  [key: string]: any;
};

export function withSSRAuth<P extends TObj>(fn: GetServerSideProps<P>) {
  return async (
    context: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(context);

    if (!cookies['nextauth.token']) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    try {
      return await fn(context);
    } catch (error) {
      if (error instanceof AuthTokenError) {
        destroyCookie(context, 'nextauth.token');
        destroyCookie(context, 'nextauth.refreshToken');

        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        };
      }
      return {} as any;
    }
  };
}
