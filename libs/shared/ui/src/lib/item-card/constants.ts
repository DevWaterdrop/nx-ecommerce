import { ItemCardProps } from './item-card';
import flowerJPEG from '../../props/flower.jpeg';
import roomJPEG from '../../props/room.jpeg';

const ITEM: Required<ItemCardProps['item']> = {
  price: 65,
  name: 'Lovely flower',
  id: '#',
  images: [flowerJPEG, roomJPEG],
  smallDescription: 'For you, for me, for us',
  tag: 'new',
};

export const DEFAULT_PROPS: ItemCardProps = {
  item: ITEM,
  size: 'base',
  handleClick: () => console.log('clicked'),
};
