import { useMemo, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { formatPrice } from '@nx-ecommerce/shared/utils/format-price';
import { handleBlur } from '@nx-ecommerce/shared/utils/handle-blur';
import { createItemHref } from '@nx-ecommerce/shared/utils/create-item-href';
import { Button } from '../button';
import { Icon } from '../icon';

type Tags = 'new';

export type Item = {
  id: string;
  price: number;
  name: string;
  images: string[];
  smallDescription: string;
  tag?: Tags;
};

/* eslint-disable-next-line */
export interface ItemCardProps {
  item: Item;
  handleCartClick: () => void;
  handleFavoriteClick: () => void;
  size?: typeof SIZES[number];
  elementProps?: JSX.IntrinsicElements['li'];
  loadingFavorite?: boolean;
}

const SIZES = ['base', 'lg', 'parent'] as const;

export function createLabel(item: Item) {
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
  const href = useMemo(() => createItemHref(item.id), [item.id]);

  return (
    <li
      className={clsx(
        'relative list-none flex flex-col',
        size === 'base' ? 'w-60' : false,
        size === 'lg' ? 'w-72' : false,
        size === 'parent' ? 'w-full h-full' : false
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
    >
      <a className="mb-1" href={href} title={createLabel(item)}>
        <div
          className={clsx(
            'relative w-full object-cover mb-2',
            size === 'parent' ? 'aspect-square' : false,
            size === 'base' ? 'h-72' : false,
            size === 'lg' ? 'h-80' : false
          )}
        >
          <Image
            src={item.images[0]}
            alt={item.name}
            layout="fill"
            placeholder="blur"
            objectFit="cover"
          />
          {item.images[1] && (
            <div
              className={clsx(
                'absolute left-0 top-0 h-full w-full transition-opacity',
                hovered ? 'opacity-100' : 'opacity-0'
              )}
              aria-hidden="true"
              data-testid="second-image"
            >
              <Image
                data-testid="second-image"
                src={item.images[1]}
                alt=""
                layout="fill"
                placeholder="blur"
                objectFit="cover"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          {item.tag && (
            <span className="font-medium text-sm text-orange-400 capitalize sm:(text-base)">
              {item.tag}
            </span>
          )}
          <span
            className={clsx(
              `text-sm font-semibold uppercase sm:(text-base)`,
              hovered ? 'underline' : false
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
      <div className="flex gap-2 md:(absolute right-0 bottom-0) ">
        <Button
          classes={clsx(
            'flex items-center',
            !hovered ? 'sm:(opacity-0)' : false
          )}
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
          classes={clsx(
            'flex items-center',
            !hovered ? 'sm:(opacity-0)' : false
          )}
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
    </li>
  );
};
