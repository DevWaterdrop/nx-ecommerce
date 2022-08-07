import {
  addCartAtom,
  favoritesAtom,
  toggleFavoriteAtom,
} from '../../lib/stores';
import { useAtomValue, useSetAtom } from 'jotai';
import { useSsrFallback } from '../../utils/use-ssr-fallback';
import { ProductCartQuery } from '@nx-ecommerce/shared/graphql/types';
import { CartItem } from '@nx-ecommerce/shared/ui/cart-item';

interface Props {
  item: NonNullable<
    NonNullable<ProductCartQuery['products']>['data'][number]['attributes']
  >;
  isFavorite?: boolean;
  inCartAmount?: number;
}

export const CartItemLogic: React.FC<Props> = ({ item, inCartAmount = 0 }) => {
  const favoritesValue = useSsrFallback(useAtomValue(favoritesAtom), new Set());

  const addCart = useSetAtom(addCartAtom);
  const toggleFavorite = useSetAtom(toggleFavoriteAtom);

  return (
    <CartItem
      item={item}
      isFavorite={favoritesValue.has(item.slug)}
      inCartAmount={inCartAmount}
      handleCartMinusClick={() => void addCart({ amount: -1, slug: item.slug })}
      handleCartPlusClick={() => void addCart({ amount: 1, slug: item.slug })}
      handleRemoveFromCart={() =>
        void addCart({ amount: -16, slug: item.slug })
      }
      toggleFavorite={() => void toggleFavorite({ slug: item.slug })}
    />
  );
};
