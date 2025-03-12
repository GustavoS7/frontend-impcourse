import { parseCookies } from 'nookies';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

type TObj = {
  [key: string]: any;
};

export function withSSRGuest<P extends TObj>(fn: GetServerSideProps<P>) {
  return async (
    context: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(context);

    if (cookies['nextauth.token']) {
      return {
        redirect: {
          destination: '/home',
          permanent: false,
        },
      };
    }

    return await fn(context);
  };
}
