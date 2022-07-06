import { ButtonProps } from '../lib/button';
import { CategoryCardProps } from '../lib/category-card';
import { IconProps } from '../lib/icon/icon';
import { ItemCardProps } from '../lib/item-card';
import { NavButtonProps } from '../lib/nav-button';
import { SearchbarItemProps } from '../lib/searchbar-item';
import flowerJPEG from './flower.jpeg';
import roomJPEG from './room.jpeg';

export const ITEM: ItemCardProps['item'] = {
  slug: 'lovely-flower',
  price: 65,
  name: 'Lovely flower',
  images: {
    data: [
      {
        attributes: {
          url: flowerJPEG,
        },
      },
      {
        attributes: {
          url: roomJPEG,
        },
      },
    ],
  },
  smallDescription: 'For you, for me, for us',
  description: 'Lovely description',
};

export const ITEM_SECOND: ItemCardProps['item'] = {
  slug: 'roomy',
  price: 50,
  name: 'Roomy',
  images: {
    data: [
      {
        attributes: {
          url: flowerJPEG,
        },
      },
      {
        attributes: {
          url: roomJPEG,
        },
      },
    ],
  },
  smallDescription: 'Hmmm, nice vase',
  description: 'Vaaaase',
};

export const ITEM_CARD_DEFAULT_PROPS: ItemCardProps = {
  item: ITEM,
  size: 'base',
  handleCartClick: () => console.log('cart clicked'),
  handleFavoriteClick: () => console.log('favorite clicked'),
};

export const CATEGORY_CARD_DEFAULT_PROPS: CategoryCardProps = {
  category: {
    smallDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: {
      data: {
        attributes: {
          url: roomJPEG,
        },
      },
    },
    slug: '1',
  },
};

export const NAV_BUTTON_DEFAULT_PROPS: NavButtonProps = {
  type: 'heart',
};

export const ICON_DEFAULT_PROPS: IconProps = {
  icon: 'cart',
};

export const BUTTON_DEFAULT_PROPS: ButtonProps = {
  children: 'hello',
  tag: 'button',
  size: 'base',
  type: 'primary',
  round: 'full',
};

export const SEARCHBAR_ITEM_DEFAULT_PROPS: SearchbarItemProps = {
  item: {
    slug: 'lovely-flower',
    smallDescription: 'For you, for me, for us',
    name: 'Lovely flower',
    images: {
      data: [
        {
          attributes: {
            url: flowerJPEG,
          },
        },
      ],
    },
  },
};
