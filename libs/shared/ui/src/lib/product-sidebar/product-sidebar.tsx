import { ProductSlugQuery } from '@nx-ecommerce/shared/graphql/types';
import { formatPrice } from '@nx-ecommerce/shared/utils/format-price';
import clsx from 'clsx';
import { Cart } from './local-components/cart';
import { Favorite } from './local-components/favorite';

export interface ProductSidebarProps {
  product: NonNullable<
    NonNullable<ProductSlugQuery['products']>['data'][0]['attributes']
  >;
  handleCartClick: () => void;
  handleRemoveCartClick: () => void;
  handleFavoriteClick: () => void;
  cartValue: Map<string, number>;
  favoritesValue: Set<string>;
}

export const ProductSidebar: React.FC<ProductSidebarProps> = (props) => {
  const {
    product,
    handleCartClick,
    handleFavoriteClick,
    handleRemoveCartClick,
    cartValue,
    favoritesValue,
  } = props;

  const { name, price, smallDescription, slug } = product;

  return (
    <aside
      className={clsx(
        'h-full min-w-56 w-full',
        'flex flex-col',
        'md:(order-2 top-12 sticky w-2/5)'
      )}
    >
      <div className={clsx('mb-2', 'flex items-center justify-between')}>
        <h1
          className={clsx(
            'max-w-3/5',
            'font-bold text-3xl uppercase break-words'
          )}
        >
          {name}
        </h1>
        <span className="font-semibold text-base">{formatPrice(price)}</span>
      </div>
      <p className={clsx('text-sm', 'opacity-75')}>{smallDescription}</p>
      <div
        className={clsx(
          'mt-8 py-6 px-4',
          'flex flex-col gap-1',
          'border rounded-md',
          'text-base',
          'md:(text-sm py-4)'
        )}
      >
        <p>100% of the net profits will be donated to Ukraine!</p>
      </div>
      <div className={clsx('mt-8', 'flex gap-4 justify-between')}>
        <Cart
          handleCartClick={handleCartClick}
          cartValue={cartValue}
          handleRemoveCartClick={handleRemoveCartClick}
          slug={slug}
        />
        <Favorite
          handleFavoriteClick={handleFavoriteClick}
          slug={slug}
          favoritesValue={favoritesValue}
        />
      </div>
    </aside>
  );
};
