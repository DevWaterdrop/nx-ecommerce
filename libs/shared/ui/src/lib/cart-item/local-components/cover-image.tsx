import { Product } from '@nx-ecommerce/shared/graphql/refactored-types';
import { getStrapiURL } from '@nx-ecommerce/shared/utils/get-strapi-url';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export interface CartItemProps {
  images: Product['images'];
  name: Product['name'];
  href: string;
}

export const CoverImage: React.FC<CartItemProps> = (props) => {
  const { href, images, name } = props;

  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <div
          className={clsx(
            'relative aspect-square w-28',
            'object-cover bg-gray-100'
          )}
        >
          {images && !!images?.data?.length && (
            <Image
              src={getStrapiURL(images.data[0].attributes?.url)}
              alt={name}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
      </a>
    </Link>
  );
};
