import type { GetServerSideProps, GetStaticProps } from 'next';
import { getGlobalSeo } from '../utils/get-global-seo';

type Context<T extends GetServerSideProps | GetStaticProps> = Parameters<T>[0];

type GetProps = GetServerSideProps | GetStaticProps;
type GeneralContext = Context<GetProps> &
  Pick<Context<GetServerSideProps>, 'req' | 'res' | 'query' | 'resolvedUrl'>;

export function withGlobalSeo(getProps?: GetServerSideProps | GetStaticProps) {
  return async (context: Context<GetProps>) => {
    const globalSeo = await getGlobalSeo();

    if (getProps) {
      const getPropsResult = await getProps(context as GeneralContext);

      return {
        ...getPropsResult,
        props: {
          globalSeo,
          ...('props' in getPropsResult ? getPropsResult['props'] : {}),
        },
      };
    }

    return { props: { globalSeo } };
  };
}
