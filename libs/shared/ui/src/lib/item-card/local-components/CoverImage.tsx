import type { Product } from '@nx-ecommerce/shared/graphql/refactored-types';
import { getStrapiURL } from '@nx-ecommerce/shared/utils/get-strapi-url';
import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  product: Product;
  hovered: boolean;
}

export const CoverImage: React.FC<Props> = (props) => {
  const { product, hovered } = props;

  if (!(product.images && !!product.images?.data?.length)) return null;

  return (
    <>
      <Image
        src={getStrapiURL(product.images.data[0].attributes?.url)}
        alt={product.name}
        layout="fill"
        objectFit="cover"
      />
      {product.images.data[1] && (
        <div
          className={clsx(
            'absolute left-0 top-0 h-full w-full',
            'transition-opacity',
            hovered ? 'opacity-100' : 'opacity-0'
          )}
          aria-hidden="true"
          data-testid="second-image"
        >
          <Image
            src={getStrapiURL(product.images.data[1].attributes?.url)}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
    </>
  );
};
