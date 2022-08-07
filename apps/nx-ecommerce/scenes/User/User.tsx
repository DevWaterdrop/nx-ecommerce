import clsx from 'clsx';
import type { User as IUser } from '../../lib/stores';
import { Orders } from './local-components/Orders';

interface Props {
  userValue: IUser | null;
}

export const User: React.FC<Props> = (props) => {
  const { userValue } = props;

  return (
    <section className="mb-8">
      <h1 className={clsx('mb-4', 'font-semibold text-3xl')}>Orders</h1>
      {userValue ? <Orders orders={userValue.orders} /> : <Loading />}
    </section>
  );
};

const Loading: React.FC = () => {
  return <small className="text-xs">Waiting...</small>;
};
