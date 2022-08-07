import { createItemHref } from '@nx-ecommerce/shared/utils/create-item-href';
import { formatPrice } from '@nx-ecommerce/shared/utils/format-price';
import clsx from 'clsx';
import Link from 'next/link';
import type { Order as TOrder } from '../orders-table';

interface Props {
  order: TOrder;
}

export const Order: React.FC<Props> = (props) => {
  const { order } = props;

  return (
    <tr className="divide-x divide-gray-200">
      <td
        className={clsx(
          'py-4 pr-4 pl-4',
          'font-medium text-sm whitespace-nowrap',
          'sm:(pl-6)'
        )}
      >
        <ul className="flex flex-col gap-1">
          {order.items.map((item) => (
            <li
              key={item.id}
              className={clsx('py-2', 'flex gap-4 items-center', 'border-b')}
            >
              <span>{item.amount}</span>
              <Link href={createItemHref(item.product.slug)}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className={clsx(
                    'text-sky-600 uppercase',
                    'hover:(underline)'
                  )}
                >
                  {item.product.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </td>
      <td
        className={clsx(
          'py-4 pr-4 pl-4 w-4',
          'font-medium text-xl whitespace-nowrap',
          'sm:(pr-6)'
        )}
      >
        {formatPrice(order.amount)}
      </td>
    </tr>
  );
};
