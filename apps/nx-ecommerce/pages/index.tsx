import {
  HomePageDocument,
  HomePageQuery,
  useHomePageQuery,
} from '@nx-ecommerce/shared/graphql/types';
import { GetServerSideProps } from 'next';
import { Layout } from '../components/Layout';
import { client } from '../lib/client';
import { propsWithGlobalSeo } from '../utils/props-with-global-seo';
import { LOVELY_ERROR } from '../lib/constants';
import { Home } from '../scenes/Home';
import { withGlobalSeo } from '../hocs/with-global-seo';
import { GlobalSeo } from '../utils/get-global-seo';

interface Props {
  homePage: HomePageQuery;
  globalSeo: GlobalSeo;
}

// TODO: Change to GetStaticProps
export const getServerSideProps: GetServerSideProps = propsWithGlobalSeo(
  async () => {
    const homePage = await client.request<HomePageQuery>(HomePageDocument);

    return {
      props: {
        homePage,
      },
    };
  }
);

export const Index: React.FC<Props> = ({ homePage, globalSeo }) => {
  const { data } = useHomePageQuery(client, undefined, {
    initialData: homePage,
  });

  if (
    !(
      data?.homePage?.data?.attributes?.categories?.data &&
      data?.homePage?.data?.attributes?.products?.data
    )
  ) {
    throw new Error(LOVELY_ERROR);
  }

  return (
    <Layout defaultSeo={globalSeo}>
      <Home
        products={data.homePage.data.attributes.products}
        categories={data.homePage.data.attributes.categories}
      />
    </Layout>
  );
};

export default withGlobalSeo(Index);
