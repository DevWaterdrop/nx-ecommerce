import { ButtonProps } from '../lib/button';
import { CartItemProps } from '../lib/cart-item';
import { CartSidebarProps } from '../lib/cart-sidebar';
import { CategoryCardProps } from '../lib/category-card';
import { IconProps } from '../lib/icon/icon';
import { ItemCardProps } from '../lib/item-card';
import { NavButtonProps } from '../lib/nav-button';
import { OrdersTableProps } from '../lib/orders-table';
import { ProductGalleryProps } from '../lib/product-gallery';
import { ProductInformationProps } from '../lib/product-information';
import { ProductSidebarProps } from '../lib/product-sidebar';
import { SearchbarProps } from '../lib/searchbar';
import { SearchbarItemProps } from '../lib/searchbar-item';
import { SelectProps } from '../lib/select';
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
  handleAmountCartClick: () => console.log('amount cart clicked'),
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

export const SEARCHBAR_ITEM: SearchbarProps['items'][number] = {
  id: '111',
  attributes: {
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
  handleClick: () => void 1,
};

export const SELECT_ITEM = {
  label: 'Label1',
  value: 'value1',
};

export const SELECT_DEFAULT_PROPS: Required<
  Omit<SelectProps, 'placeholder' | 'multiple'>
> = {
  items: [SELECT_ITEM],
  initial: ['value1'],
  onChange: () => console.log('changed'),
};

export const PRODUCT: ProductSidebarProps['product'] = {
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
  information: [
    {
      title: 'Title1',
      content: 'content1',
    },
  ],
};

export const PRODUCT_SIDEBAR_DEFAULT_PROPS: ProductSidebarProps = {
  product: PRODUCT,
  handleCartClick: () => {
    console.log('cart');
  },
  handleRemoveCartClick: () => {
    console.log('remove cart');
  },
  handleFavoriteClick: () => {
    console.log('favorite');
  },
  cartValue: new Map([]),
  favoritesValue: new Set('lovely-flower'),
};

export const PRODUCT_INFORMATION_DEFAULT_PROPS: ProductInformationProps = {
  information: [...Array(10).keys()].map((_value, index) => ({
    title: `Title${index + 1}`,
    content: `content${index + 1}`,
  })),
};

export const PRODUCT_GALLERY_DEFAULT_PROPS: ProductGalleryProps = {
  images: [
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
};

const PRODUCT_ORDER_TABLE: OrdersTableProps['orders'][number]['items'][number]['product'] =
  {
    name: 'Flower',
    slug: 'slug-flower',
    description: '',
    smallDescription: '',
    price: 50,
  };

export const ORDERS_TABLE_DEFAULT_PROPS: OrdersTableProps = {
  orders: [
    {
      id: 'id-1',
      amount: 50,
      items: [{ id: '1', amount: 1, product: PRODUCT_ORDER_TABLE }],
    },
    {
      id: 'id-2',
      amount: 100,
      items: [{ id: '2', amount: 2, product: PRODUCT_ORDER_TABLE }],
    },
  ],
};

export const CART_SIDEBAR_DEFAULT_PROPS: CartSidebarProps = {
  cartTotal: 100,
  isUser: true,
  handleCheckoutClick: async () => {
    console.log('checkout');
  },
  isLoading: false,
};

export const CART_ITEM_DEFAULT_PROPS: CartItemProps = {
  inCartAmount: 1,
  item: PRODUCT,
  handleCartMinusClick: () => {
    console.log('cart minus');
  },
  handleCartPlusClick: () => {
    console.log('cart plus');
  },
  handleRemoveFromCart: () => {
    console.log('cart remove');
  },
  toggleFavorite: () => {
    console.log('favorite');
  },
};
