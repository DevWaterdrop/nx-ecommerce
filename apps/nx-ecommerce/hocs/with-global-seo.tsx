import { useGlobalSeoQuery } from '@nx-ecommerce/shared/graphql/types';
import { client } from '../lib/client';
import { LOVELY_ERROR } from '../lib/constants';
import { ReturnGetGlobalSeo } from '../utils/get-global-seo';

interface Props {
  globalSeo: ReturnGetGlobalSeo;
}

export function withGlobalSeo<P>(WrappedComponent: React.ComponentType<P>) {
  // eslint-disable-next-line react/display-name
  return (props: P & Props) => {
    const { globalSeo } = props;

    const { data: seo } = useGlobalSeoQuery(client, undefined, {
      initialData: globalSeo,
    });

    if (!seo?.globalSeo?.data?.attributes) {
      throw new Error(LOVELY_ERROR);
    }

    return (
      <WrappedComponent
        {...props}
        globalSeo={seo?.globalSeo?.data?.attributes}
      />
    );
  };
}
