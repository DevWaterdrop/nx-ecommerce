import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import shoppingCartSVG from '../../assets/icons/shopping-cart.svg';
import { formatPrice } from '@nx-ecommerce/shared/utils/format-price';

type Tags = 'new';

type Item = {
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
  handleClick: () => void;
  size?: typeof SIZES[number];
  elementProps?: JSX.IntrinsicElements['li'];
}

export const SIZES = ['base', 'lg', 'parent'] as const;

export function createLabel(item: Item) {
  const { name, smallDescription, price } = item;

  return `${name}, ${smallDescription}, price: ${price}`;
}

export function ItemCard(props: ItemCardProps) {
  const { item, elementProps, size = 'parent', handleClick } = props;

  const [{ hover, focus }, setFocusHover] = useState({
    focus: false,
    hover: false,
  });

  const price = useMemo(() => formatPrice(item.price), [item.price]);
  const hovered = useMemo(() => focus || hover, [focus, hover]);
  const href = useMemo(() => `/${item.id}`, [item.id]);

  const handleBlur = (e: React.FocusEvent<HTMLElement, Element>) => {
    const currentTarget = e.currentTarget;

    // Give browser time to focus the next element
    requestAnimationFrame(() => {
      // Check if the new focused element is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        setFocusHover((prev) => ({ ...prev, focus: false }));
      }
    });
  };

  return (
    <li
      className={clsx(
        'relative list-none',
        size === 'base' ? 'w-60' : false,
        size === 'lg' ? 'w-72' : false,
        size === 'parent' ? 'w-full h-full' : false
      )}
      {...elementProps}
      onMouseOver={() => setFocusHover((prev) => ({ ...prev, hover: true }))}
      onMouseLeave={() => setFocusHover((prev) => ({ ...prev, hover: false }))}
      onFocus={() => setFocusHover((prev) => ({ ...prev, focus: true }))}
      onBlur={handleBlur}
    >
      <a href={href} title={item.name}>
        <figure>
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
          {item.tag && (
            <span className="font-medium text-orange-400 capitalize">
              {item.tag}
            </span>
          )}
          <figcaption
            className={clsx(
              `text-base font-semibold uppercase`,
              hovered ? 'underline' : false
            )}
          >
            {item.name}
          </figcaption>
        </figure>
      </a>
      <div>
        <a className="flex flex-col" href={href} title={createLabel(item)}>
          <span className="text-sm">{item.smallDescription}</span>
          <span className="font-bold mt-2 text-xl">{price}</span>
        </a>
        <button
          className={clsx(
            'cursor-pointer absolute flex items-center justify-center p-3',
            'right-0 bottom-0 bg-sky-600 rounded-full transition',
            'hover:(bg-sky-700)',
            !hovered ? 'opacity-0' : false
          )}
          title="add to basket"
          type="button"
          onClick={handleClick}
        >
          <div className="h-6 w-6 relative" aria-hidden="true">
            <Image src={shoppingCartSVG} layout="fill" />
          </div>
        </button>
      </div>
    </li>
  );
}

export default ItemCard;
