import { ItemCardProps } from '../lib/item-card/item-card';
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

export const DEFAULT_PROPS: ItemCardProps = {
  item: ITEM,
  size: 'base',
  handleClick: () => console.log('clicked'),
};
