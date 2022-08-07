import { GlobalSeo } from '../../utils/get-global-seo';
import { propsWithGlobalSeo } from '../../utils/props-with-global-seo';
import {
  ProductSlugDocument,
  ProductSlugQuery,
  useProductSlugQuery,
} from '@nx-ecommerce/shared/graphql/types';
import { client } from '../../lib/client';
import { Layout } from '../../components/Layout';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { LOVELY_ERROR } from '../../lib/constants';
import { Product } from '../../scenes/Product';
import { withGlobalSeo } from '../../hocs/with-global-seo';

interface Props {
  globalSeo: GlobalSeo;
  products: ProductSlugQuery;
}

const preGetServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  if (!params) throw new Error('No Params');

  const data = await client.request<ProductSlugQuery>(ProductSlugDocument, {
    value: params.slug,
  });

  if (data.products && data.products?.data.length < 1) {
    return { redirect: { destination: '/' }, props: {} };
  }

  return {
    props: {
      products: data,
    },
  };
};

export const getServerSideProps = propsWithGlobalSeo(preGetServerSideProps);

export const User: React.FC<Props> = ({ globalSeo, products }) => {
  const router = useRouter();

  const { data } = useProductSlugQuery(
    client,
    { value: router.query.slug as string },
    { initialData: products }
  );

  const product = useMemo(() => data?.products?.data[0].attributes, [data]);

  if (!product) {
    throw new Error(LOVELY_ERROR);
  }

  return (
    <Layout defaultSeo={globalSeo} seo={{ title: product.name }}>
      <Product product={product} />
    </Layout>
  );
};

export default withGlobalSeo(User);
