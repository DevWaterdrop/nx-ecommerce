import { ProductSlugQuery } from '@nx-ecommerce/shared/graphql/types';
import { getStrapiURL } from '@nx-ecommerce/shared/utils/get-strapi-url';
import clsx from 'clsx';
import Image from 'next/image';

export interface ProductGalleryProps {
  images: NonNullable<
    NonNullable<
      NonNullable<ProductSlugQuery['products']>['data'][0]['attributes']
    >['images']
  >['data'];
}

export const ProductGallery: React.FC<ProductGalleryProps> = (props) => {
  const { images } = props;

  return (
    <ul className={clsx('w-full', 'flex flex-wrap gap-4')}>
      {images.map(
        (image) =>
          image.attributes && (
            <li
              className={clsx(
                'w-full aspect-square relative',
                'bg-gray-100',
                'pointer-events-none select-none',
                'sm:(w-[calc(50%-0.5rem)])'
              )}
              key={image.attributes.url}
            >
              <Image
                layout="fill"
                src={getStrapiURL(image.attributes.url)}
                objectFit="cover"
                alt="/"
              />
            </li>
          )
      )}
    </ul>
  );
};
