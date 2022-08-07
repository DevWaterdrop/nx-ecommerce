import { Layout } from '../components/Layout';
import { propsWithGlobalSeo } from '../utils/props-with-global-seo';
import { withGlobalSeo } from '../hocs/with-global-seo';
import { GlobalSeo } from '../utils/get-global-seo';
import { propsWithAuth } from '../utils/props-with-auth';
import { Cart } from '../scenes/Cart';
import { client } from '../lib/client';
import { useProductCartQuery } from '@nx-ecommerce/shared/graphql/types';
import { cartAtom } from '../lib/stores';
import { useAtomValue } from 'jotai';

interface Props {
  globalSeo: GlobalSeo;
}

export const getServerSideProps = propsWithAuth(propsWithGlobalSeo());

export const Index: React.FC<Props> = ({ globalSeo }) => {
  const cartValue = useAtomValue(cartAtom);

  const { data } = useProductCartQuery(client, {
    value: [...cartValue.keys()],
  });

  return (
    <Layout defaultSeo={globalSeo}>
      <Cart products={data} />
    </Layout>
  );
};

export default withGlobalSeo(Index);
