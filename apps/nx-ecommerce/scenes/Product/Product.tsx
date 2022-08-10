import { ProductSlugQuery } from '@nx-ecommerce/shared/graphql/types';
import { ProductSidebar } from '@nx-ecommerce/shared/ui/product-sidebar';
import { ProductInformation } from '@nx-ecommerce/shared/ui/product-information';
import { ProductGallery } from '@nx-ecommerce/shared/ui/product-gallery';
import {
  addCartAtom,
  cartAtom,
  favoritesAtom,
  toggleFavoriteAtom,
} from '../../lib/stores';
import { useAtomValue, useSetAtom } from 'jotai';
import { useSsrFallback } from '../../utils/use-ssr-fallback';
import clsx from 'clsx';

interface Props {
  product: NonNullable<
    NonNullable<ProductSlugQuery['products']>['data'][0]['attributes']
  >;
}

export const Product: React.FC<Props> = (props) => {
  const { product } = props;

  const favoritesValue = useSsrFallback(useAtomValue(favoritesAtom), new Set());
  const toggleFavorite = useSetAtom(toggleFavoriteAtom);
  const cartValue = useSsrFallback(useAtomValue(cartAtom), new Map());
  const addCart = useSetAtom(addCartAtom);

  return (
    <section
      className={clsx(
        'flex flex-col gap-12 justify-between',
        'sm:(mt-12)',
        'md:(flex-row)'
      )}
    >
      <div className="order-2 w-full relative">
        {product.images && <ProductGallery images={product.images.data} />}
        <div className="my-12">
          <p className="text-xl">{product.description}</p>
        </div>
        {product.information && (
          <ProductInformation information={product.information} />
        )}
      </div>
      <ProductSidebar
        product={product}
        handleCartClick={() => addCart({ slug: product.slug, amount: 1 })}
        handleRemoveCartClick={() =>
          addCart({ slug: product.slug, amount: -16 })
        }
        handleFavoriteClick={() => toggleFavorite({ slug: product.slug })}
        cartValue={cartValue}
        favoritesValue={favoritesValue}
      />
    </section>
  );
};
