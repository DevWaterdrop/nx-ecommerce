import { Product } from '@nx-ecommerce/shared/graphql/refactored-types';
import { formatPrice } from '@nx-ecommerce/shared/utils/format-price';
import clsx from 'clsx';
import { useMemo } from 'react';

interface Props {
  hovered: boolean;
  product: Product;
}

export const Information: React.FC<Props> = (props) => {
  const { hovered, product } = props;

  const { name, smallDescription, price: prePrice } = product;
  const price = useMemo(() => formatPrice(prePrice), [prePrice]);

  return (
    <div className="flex flex-col gap-1">
      <span
        className={clsx(
          'text-sm font-semibold uppercase',
          'sm:(text-base)',
          hovered && 'underline'
        )}
      >
        {name}
      </span>
      <span className={clsx('text-xs', 'sm:(text-sm max-w-3/5)')}>
        {smallDescription}
      </span>
      <span className={clsx('font-bold text-md', 'sm:(text-xl)')}>{price}</span>
    </div>
  );
};
