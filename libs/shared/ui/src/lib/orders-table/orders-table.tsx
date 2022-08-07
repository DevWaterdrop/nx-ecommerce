import { Product } from '@nx-ecommerce/shared/graphql/types';
import clsx from 'clsx';
import { Head } from './local-components/head';
import { Order } from './local-components/item';

export type Order = {
  id: string;
  amount: number;
  items: { id: string; amount: number; product: Product }[];
};

export interface OrdersTableProps {
  orders: Order[];
}

export const OrdersTable: React.FC<OrdersTableProps> = (props) => {
  const { orders } = props;

  return (
    <table className={clsx('min-w-full', 'divide-y border divide-gray-300')}>
      <Head />
      <tbody className="divide-y bg-white divide-gray-200">
        {orders.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </tbody>
    </table>
  );
};
