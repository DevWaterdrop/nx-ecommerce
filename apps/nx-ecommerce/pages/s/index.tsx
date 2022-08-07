import { GlobalSeo } from '../../utils/get-global-seo';
import { propsWithGlobalSeo } from '../../utils/props-with-global-seo';
import {
  CategoriesSearchDocument,
  CategoriesSearchQuery,
  ProductSearchDocument,
  ProductSearchQuery,
  useCategoriesSearchQuery,
  useProductSearchQuery,
} from '@nx-ecommerce/shared/graphql/types';
import { client } from '../../lib/client';
import { Layout } from '../../components/Layout';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { searchGraphqlFilters, searchSafeQuery } from '../../lib/search';
import { useSetAtom } from 'jotai';
import { searchAtom } from '../../lib/stores';
import { Search } from '../../scenes/Search';
import { withGlobalSeo } from '../../hocs/with-global-seo';

interface Props {
  globalSeo: GlobalSeo;
  products: ProductSearchQuery;
  filters: ReturnType<typeof searchGraphqlFilters>;
  categories: CategoriesSearchQuery;
}

const preGetServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const safeQuery = searchSafeQuery(query);

  const filters = searchGraphqlFilters(safeQuery);

  const data = await client.request<ProductSearchQuery>(
    ProductSearchDocument,
    filters
  );

  const categories = await client.request<CategoriesSearchQuery>(
    CategoriesSearchDocument
  );

  return {
    props: {
      products: data,
      filters,
      categories,
    },
  };
};

export const getServerSideProps = propsWithGlobalSeo(preGetServerSideProps);

export const User: React.FC<Props> = ({
  globalSeo,
  products,
  filters,
  categories,
}) => {
  const { data } = useProductSearchQuery(client, filters, {
    initialData: products,
  });

  const { data: categoriesData } = useCategoriesSearchQuery(client, undefined, {
    initialData: categories,
  });

  const updateInput = useSetAtom(searchAtom);

  useEffect(() => {
    if (filters.i) {
      updateInput(filters.i);
    }
  }, [filters, updateInput]);

  return (
    <Layout defaultSeo={globalSeo}>
      <Search
        products={data?.products?.data || []}
        categories={categoriesData?.categories?.data || []}
      />
    </Layout>
  );
};

export default withGlobalSeo(User);
