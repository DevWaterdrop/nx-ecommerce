import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

export function propsWithAuth(getServerSideProps: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    const { req } = context;
    const { cookies } = req;

    if (!('userToken' in cookies)) {
      return {
        redirect: {
          destination: '/',
        },
        props: {},
      };
    }

    const getServerSidePropsResult = await getServerSideProps(context);

    return getServerSidePropsResult;
  };
}
