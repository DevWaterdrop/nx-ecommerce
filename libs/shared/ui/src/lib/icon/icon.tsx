import shoppingCartSVG from '../../assets/icons/shopping-cart.svg';
import heartSVG from '../../assets/icons/heart.svg';
import userSVG from '../../assets/icons/user.svg';
import shoppingCartBlackSVG from '../../assets/icons/shopping-cart-black.svg';
import arrowRightSVG from '../../assets/icons/arrow-right.svg';
import Image from 'next/image';
import clsx from 'clsx';
import { Spinner } from './components/spinner';

export interface IconProps {
  icon?: keyof typeof ICONS;
  loading?: boolean;
  classes?: string;
  size?: typeof SIZES[number];
}

export const ICONS = {
  cart: shoppingCartSVG,
  cartBlack: shoppingCartBlackSVG,
  heart: heartSVG,
  user: userSVG,
  arrowRight: arrowRightSVG,
} as const;

const SIZES = ['sm', 'base', 'lg'] as const;

export const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { icon = 'cart', classes, size = 'base', loading } = props;

  return (
    <div
      className={clsx(
        'flex relative select-none pointer-events-none items-center',
        // SIZES
        size === 'sm' && 'h-4 w-4  sm:(h-6 w-6)',
        size === 'base' && 'h-5 w-5',
        size === 'lg' && 'h-8 w-8',
        //
        classes
      )}
      aria-hidden="true"
    >
      {loading ? <Spinner /> : <Image src={ICONS[icon]} layout="fill" alt="" />}
    </div>
  );
};
