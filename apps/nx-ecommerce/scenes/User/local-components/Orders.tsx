import { OrdersTable } from '@nx-ecommerce/shared/ui/orders-table';
import { User } from '../../../lib/stores';

interface Props {
  orders: User['orders'];
}

export const Orders: React.FC<Props> = (props) => {
  const { orders } = props;

  if (orders.length < 1) return <p>No orders</p>;
  return <OrdersTable orders={orders} />;
};
