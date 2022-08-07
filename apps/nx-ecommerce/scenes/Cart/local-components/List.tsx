import { CartItemLogic } from '../../../components/CartItemLogic';
import { ProductCartQuery } from '@nx-ecommerce/shared/graphql/types';
import clsx from 'clsx';

interface Props {
  products: NonNullable<ProductCartQuery['products']>['data'];
  cartValue: Map<string, number>;
}

export const List: React.FC<Props> = (props) => {
  const { products, cartValue } = props;

  return (
    <ul className={clsx('w-full', 'flex flex-col gap-4')}>
      {products.map(
        (product) =>
          product.attributes && (
            <li key={product.id}>
              <CartItemLogic
                item={product.attributes}
                inCartAmount={cartValue.get(product.attributes.slug)}
              />
            </li>
          )
      )}
    </ul>
  );
};
