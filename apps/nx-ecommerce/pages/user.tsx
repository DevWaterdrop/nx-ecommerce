import { Layout } from '../components/Layout';
import { propsWithAuth } from '../utils/props-with-auth';
import { GlobalSeo } from '../utils/get-global-seo';
import { propsWithGlobalSeo } from '../utils/props-with-global-seo';
import { useAtomValue } from 'jotai';
import { userAtom } from '../lib/stores';
import { User as UserScene } from '../scenes/User';
import { withGlobalSeo } from '../hocs/with-global-seo';

interface Props {
  globalSeo: GlobalSeo;
}

export const getServerSideProps = propsWithAuth(propsWithGlobalSeo());

export const User: React.FC<Props> = ({ globalSeo }) => {
  const userValue = useAtomValue(userAtom);

  return (
    <Layout defaultSeo={globalSeo}>
      <UserScene userValue={userValue} />
    </Layout>
  );
};

export default withGlobalSeo(User);
