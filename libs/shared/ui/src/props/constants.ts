import { ButtonProps } from '../lib/button';
import { CategoryCardProps } from '../lib/category-card';
import { IconProps } from '../lib/icon/icon';
import { ItemCardProps } from '../lib/item-card';
import { NavButtonProps } from '../lib/nav-button';
import flowerJPEG from './flower.jpeg';
import roomJPEG from './room.jpeg';

export const ITEM: Required<ItemCardProps['item']> = {
  price: 65,
  name: 'Lovely flower',
  id: '#',
  images: [flowerJPEG, roomJPEG],
  smallDescription: 'For you, for me, for us',
  tag: 'new',
};

export const ITEM_SECOND: ItemCardProps['item'] = {
  price: 50,
  name: 'Roomy',
  id: '#1',
  images: [roomJPEG, flowerJPEG],
  smallDescription: 'Hmmm, nice vase',
};

export const ITEM_CARD_DEFAULT_PROPS: ItemCardProps = {
  item: ITEM,
  size: 'base',
  handleCartClick: () => console.log('cart clicked'),
  handleFavoriteClick: () => console.log('favorite clicked'),
};

export const CATEGORY_CARD_DEFAULT_PROPS: CategoryCardProps = {
  smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  image: roomJPEG,
  slug: '#',
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
