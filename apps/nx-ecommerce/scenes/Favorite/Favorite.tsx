import type { FavoriteProductsQuery } from '@nx-ecommerce/shared/graphql/types';
import React from 'react';
import { QueryStatus } from 'react-query';
import { List } from './local-components/List';

interface Props {
  products?: FavoriteProductsQuery;
  status: QueryStatus;
}

export const Favorite: React.FC<Props> = (props) => {
  const { products, status } = props;

  return (
    <section>
      <h1 className="font-semibold mb-4 text-3xl">Favorites</h1>
      {status === 'loading' || !products ? (
        <small className="text-xs">Waiting...</small>
      ) : (
        <List products={products} />
      )}
    </section>
  );
};
