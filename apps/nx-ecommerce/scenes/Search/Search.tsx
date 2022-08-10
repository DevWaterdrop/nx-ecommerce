import {
  CategoriesSearchQuery,
  ProductSearchQuery,
} from '@nx-ecommerce/shared/graphql/types';
import { Filters } from './local-components/Filters';
import { Products } from './local-components/Products';

interface Props {
  products: NonNullable<ProductSearchQuery['products']>['data'];
  categories: NonNullable<CategoriesSearchQuery['categories']>['data'];
}

export const Search: React.FC<Props> = (props) => {
  const { products, categories } = props;

  return (
    <section>
      <h1 className="font-semibold text-3xl">Search</h1>
      <Filters categories={categories} />
      <Products products={products} />
    </section>
  );
};
