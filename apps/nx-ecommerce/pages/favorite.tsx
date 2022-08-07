import { useFavoriteProductsQuery } from '@nx-ecommerce/shared/graphql/types';
import { Layout } from '../components/Layout';
import { client } from '../lib/client';
import { withGlobalSeo } from '../hocs/with-global-seo';
import { GlobalSeo } from '../utils/get-global-seo';
import { useAtomValue } from 'jotai';
import { favoritesAtom } from '../lib/stores';
import { propsWithGlobalSeo } from '../utils/props-with-global-seo';
import { Favorite } from '../scenes/Favorite';

interface Props {
  globalSeo: GlobalSeo;
}

export const getStaticProps = propsWithGlobalSeo();

export const Index: React.FC<Props> = ({ globalSeo }) => {
  const favoritesValue = useAtomValue(favoritesAtom);

  const { data } = useFavoriteProductsQuery(client, {
    value: [...favoritesValue],
  });

  return (
    <Layout defaultSeo={globalSeo}>
      <Favorite products={data} />
    </Layout>
  );
};

export default withGlobalSeo(Index);
