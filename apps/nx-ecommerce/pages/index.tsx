import {
  HomePageDocument,
  HomePageQuery,
  useGlobalSeoQuery,
  useHomePageQuery,
} from '@nx-ecommerce/shared/graphql/types';
import { GetStaticProps } from 'next';
import { Layout } from '../components/Layout';
import { client } from '../lib/client';
import { ItemCard } from '@nx-ecommerce/shared/ui/item-card';
import { CategoryCard } from '@nx-ecommerce/shared/ui/category-card';
import { ReturnGetGlobalSeo } from '../utils/get-global-seo';
import { withGlobalSeo } from '../hocs/with-global-seo';
import { LOVELY_ERROR } from '../lib/constants';

interface Props {
  homePage: HomePageQuery;
  globalSeo: ReturnGetGlobalSeo;
}

export const getStaticProps: GetStaticProps = withGlobalSeo(async () => {
  const homePage = await client.request<HomePageQuery>(HomePageDocument);

  return {
    props: {
      homePage,
    },
  };
});

export const Index: React.FC<Props> = ({ homePage, globalSeo }) => {
  const { data } = useHomePageQuery(client, undefined, {
    initialData: homePage,
  });

  const { data: seo } = useGlobalSeoQuery(client, undefined, {
    initialData: globalSeo,
  });

  if (
    !(
      seo?.globalSeo?.data?.attributes &&
      data?.homePage?.data?.attributes?.categories?.data &&
      data?.homePage?.data?.attributes?.products?.data
    )
  ) {
    throw new Error(LOVELY_ERROR);
  }

  return (
    <Layout defaultSeo={seo.globalSeo.data.attributes}>
      <section className="mb-8">
        <h2 className="font-semibold mb-4 text-3xl">Categories</h2>
        <ul className="flex flex-wrap gap-y-4 justify-between">
          {data.homePage.data.attributes.categories.data.map(
            (category) =>
              category.attributes && (
                <li
                  className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.3%-1rem)]"
                  key={category.id}
                >
                  <CategoryCard category={category.attributes} />
                </li>
              )
          )}
        </ul>
      </section>
      <section>
        <h2 className="font-semibold mb-4 text-3xl">Products</h2>
        <ul className="flex flex-wrap gap-4">
          {data.homePage.data.attributes.products.data.map(
            (product) =>
              product.attributes && (
                <li
                  className="w-[calc(50%-0.5rem)] sm:w-[calc(33.3%-1rem)] lg:w-[calc(25%-0.75rem)]"
                  key={product.id}
                >
                  <ItemCard
                    handleCartClick={() => console.log(1)}
                    handleFavoriteClick={() => console.log(2)}
                    item={product.attributes}
                  />
                </li>
              )
          )}
        </ul>
      </section>
    </Layout>
  );
};

export default Index;
