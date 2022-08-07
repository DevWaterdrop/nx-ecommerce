import { Product } from '@nx-ecommerce/shared/graphql/types';
import { atom } from 'jotai';
import { atomWithLocalStorage } from '../helpers/atom-with-local-storage';
import { MAXIMUM_IN_CART } from './constants';

export interface User {
  id: string;
  token: string;
  orders: {
    id: string;
    amount: number;
    items: { id: string; amount: number; product: Product }[];
  }[];
}

export const userAtom = atom<User | null>(null);
export const searchAtom = atom('');

//* Favorite
export const favoritesAtom = atomWithLocalStorage(
  'favorite',
  new Set<string>()
);
export const toggleFavoriteAtom = atom(
  null,
  (_get, set, { slug }: { slug: string }) => {
    set(favoritesAtom, (prev) => {
      const copy = new Set([...prev]);

      copy.has(slug) ? copy.delete(slug) : copy.add(slug);

      return copy;
    });
  }
);

//* Cart
export const cartAtom = atomWithLocalStorage('cart', new Map<string, number>());

interface AddCartAtomProps {
  amount: number;
  slug: string | string[];
}

export const addCartAtom = atom(
  null,
  (_get, set, { amount, slug }: AddCartAtomProps) => {
    set(cartAtom, (prev) => {
      const copy = new Map([...prev.entries()]);

      const isAll = slug === 'all';

      const preSlugKeys = isAll ? [...copy.keys()] : (slug as string[]);
      const slugs = Array.isArray(slug) || isAll ? preSlugKeys : [slug];

      slugs.forEach((currentSlug) => {
        const foundItem = copy.get(currentSlug);

        const nextValue = Math.min((foundItem || 0) + amount, MAXIMUM_IN_CART);

        nextValue < 1
          ? copy.delete(currentSlug)
          : copy.set(currentSlug, nextValue);
      });

      return copy;
    });
  }
);
