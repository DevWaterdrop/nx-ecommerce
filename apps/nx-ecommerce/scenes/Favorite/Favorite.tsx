import type { FavoriteProductsQuery } from '@nx-ecommerce/shared/graphql/types';
import React from 'react';
import { List } from './local-components/List';

interface Props {
  products?: FavoriteProductsQuery;
}

export const Favorite: React.FC<Props> = ({ products }) => {
  return (
    <section>
      <h1 className="font-semibold mb-4 text-3xl">Favorites</h1>
      {products ? (
        <List products={products} />
      ) : (
        <small className="text-xs">Waiting...</small>
      )}
    </section>
  );
};
