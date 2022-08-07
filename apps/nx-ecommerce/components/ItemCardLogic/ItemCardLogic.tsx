import { ItemCard, ItemCardProps } from '@nx-ecommerce/shared/ui/item-card';
import {
  addCartAtom,
  cartAtom,
  favoritesAtom,
  toggleFavoriteAtom,
} from '../../lib/stores';
import { useAtomValue, useSetAtom } from 'jotai';
import { useSsrFallback } from '../../utils/use-ssr-fallback';

type Props = Omit<
  ItemCardProps,
  | 'handleCartClick'
  | 'handleFavoriteClick'
  | 'isFavorite'
  | 'inCartAmount'
  | 'handleAmountCartClick'
>;

export const ItemCardLogic: React.FC<Props> = ({ item }) => {
  const favoritesValue = useSsrFallback(useAtomValue(favoritesAtom), new Set());
  const cartValue = useSsrFallback(useAtomValue(cartAtom), new Map());
  const addCart = useSetAtom(addCartAtom);
  const toggleFavorite = useSetAtom(toggleFavoriteAtom);

  return (
    <ItemCard
      handleAmountCartClick={() => addCart({ slug: item.slug, amount: -16 })}
      handleCartClick={() => addCart({ slug: item.slug, amount: 1 })}
      handleFavoriteClick={() => toggleFavorite({ slug: item.slug })}
      isFavorite={favoritesValue.has(item.slug)}
      inCartAmount={cartValue.get(item.slug)}
      item={item}
    />
  );
};
