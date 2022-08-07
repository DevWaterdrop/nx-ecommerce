import {
  CategoriesSearchQuery,
  ProductSearchQuery,
} from '@nx-ecommerce/shared/graphql/types';
import { FilterSection } from './local-components/FiltersSection';
import { ProductsSection } from './local-components/ProductsSection';

interface Props {
  products: NonNullable<ProductSearchQuery['products']>['data'];
  categories: NonNullable<CategoriesSearchQuery['categories']>['data'];
}

export const Search: React.FC<Props> = (props) => {
  const { products, categories } = props;

  return (
    <div>
      <FilterSection categories={categories} />
      <ProductsSection products={products} />
    </div>
  );
};
