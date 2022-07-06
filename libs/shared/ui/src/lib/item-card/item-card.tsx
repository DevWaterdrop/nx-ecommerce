import { useMemo, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { formatPrice } from '@nx-ecommerce/shared/utils/format-price';
import { handleBlur } from '@nx-ecommerce/shared/utils/handle-blur';
import { createItemHref } from '@nx-ecommerce/shared/utils/create-item-href';
import type { Product } from '@nx-ecommerce/shared/graphql/refactored-types';
import { Button } from '../button';
import { Icon } from '../icon';
import { getStrapiURL } from '@nx-ecommerce/shared/utils/get-strapi-url';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface ItemCardProps {
  item: Product;
  handleCartClick: () => void;
  handleFavoriteClick: () => void;
  size?: typeof SIZES[number];
  elementProps?: JSX.IntrinsicElements['div'];
  loadingFavorite?: boolean;
}

const SIZES = ['base', 'lg', 'parent'] as const;

export function createLabel(item: Product) {
  const { name, smallDescription, price } = item;

  return `${name}, ${smallDescription}, price: ${price}`;
}

export const ItemCard: React.FC<ItemCardProps> = (props) => {
  const {
    item,
    elementProps,
    size = 'parent',
    handleCartClick,
    handleFavoriteClick,
    loadingFavorite,
  } = props;

  const [{ hover, focus }, setFocusHover] = useState({
    focus: false,
    hover: false,
  });

  const price = useMemo(() => formatPrice(item.price), [item.price]);
  const hovered = useMemo(() => focus || hover, [focus, hover]);
  const href = useMemo(() => createItemHref(item.slug), [item.slug]);

  return (
    <div
      className={clsx(
        'relative list-none flex flex-col',
        size === 'base' && 'w-60',
        size === 'lg' && 'w-72',
        size === 'parent' && 'w-full h-full'
      )}
      {...elementProps}
      onMouseOver={() => setFocusHover((prev) => ({ ...prev, hover: true }))}
      onMouseLeave={() => setFocusHover((prev) => ({ ...prev, hover: false }))}
      onFocus={() => setFocusHover((prev) => ({ ...prev, focus: true }))}
      onBlur={(e) => {
        handleBlur(e)(
          () => void setFocusHover((prev) => ({ ...prev, focus: false }))
        );
      }}
      data-testid="item-card"
    >
      <Link href={href}>
        <a className="mb-1" title={createLabel(item)}>
          <div
            className={clsx(
              'relative w-full object-cover mb-2 bg-gray-100',
              size === 'parent' && 'aspect-square',
              size === 'base' && 'h-72',
              size === 'lg' && 'h-80'
            )}
          >
            {item.images && !!item.images?.data?.length && (
              <>
                <Image
                  src={getStrapiURL(item.images.data[0].attributes?.url)}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
                {item.images.data[1] && (
                  <div
                    className={clsx(
                      'absolute left-0 top-0 h-full w-full transition-opacity',
                      hovered ? 'opacity-100' : 'opacity-0'
                    )}
                    aria-hidden="true"
                    data-testid="second-image"
                  >
                    <Image
                      src={getStrapiURL(item.images.data[1].attributes?.url)}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
              </>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span
              className={clsx(
                `text-sm font-semibold uppercase sm:(text-base)`,
                hovered && 'underline'
              )}
            >
              {item.name}
            </span>
            <span className="text-xs sm:(text-sm max-w-3/5) ">
              {item.smallDescription}
            </span>
            <span className="font-bold text-md sm:(text-xl)">{price}</span>
          </div>
        </a>
      </Link>
      <div className="flex gap-2 md:(absolute right-0 bottom-0) ">
        <Button
          classes={clsx('flex items-center', !hovered && 'sm:(opacity-0)')}
          tag="button"
          elProps={{
            onClick: handleCartClick,
            title: 'add to cart',
            type: 'button',
          }}
        >
          <Icon icon="cart" size="sm" />
        </Button>
        <Button
          classes={clsx('flex items-center', !hovered && 'sm:(opacity-0)')}
          tag="button"
          type="transparent"
          elProps={{
            onClick: handleFavoriteClick,
            title: 'add to favorite',
            type: 'button',
          }}
        >
          <Icon icon="heart" loading={loadingFavorite} size="sm" />
        </Button>
      </div>
    </div>
  );
};
