import { Layout } from '../components/Layout';
import { client } from '../lib/client';
import { withAuth } from '../hocs/with-auth';
import { ReturnGetGlobalSeo } from '../utils/get-global-seo';
import { useGlobalSeoQuery } from '@nx-ecommerce/shared/graphql/types';
import { withGlobalSeo } from '../hocs/with-global-seo';
import { LOVELY_ERROR } from '../lib/constants';
import { useAtomValue } from 'jotai';
import { userAtom } from '../lib/storage';

interface Props {
  globalSeo: ReturnGetGlobalSeo;
}

export const getServerSideProps = withAuth(withGlobalSeo());

export const User: React.FC<Props> = ({ globalSeo }) => {
  const userValue = useAtomValue(userAtom);

  const { data: seo } = useGlobalSeoQuery(client, undefined, {
    initialData: globalSeo,
  });

  if (!seo?.globalSeo?.data?.attributes) {
    throw new Error(LOVELY_ERROR);
  }

  return (
    <Layout defaultSeo={seo.globalSeo.data.attributes}>
      <section className="mb-8">
        <small className="text-sm opacity-30">{userValue}</small>
      </section>
    </Layout>
  );
};

export default User;
