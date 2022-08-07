import { NavButton } from '@nx-ecommerce/shared/ui/nav-button';
import { cartAtom } from '../../../lib/stores';
import { useSsrFallback } from '../../../utils/use-ssr-fallback';
import { useAtomValue } from 'jotai';
import clsx from 'clsx';

export const CartIcon: React.FC = () => {
  const cartValue = useSsrFallback(useAtomValue(cartAtom), new Map());

  return (
    <NavButton type="cartBlack">
      {cartValue.size > 0 && (
        <span
          className={clsx(
            'h-4.75 top-0 right-0 w-4.75 absolute',
            'flex items-center justify-center',
            'bg-sky-600',
            'rounded-full',
            'text-xs text-white'
          )}
          aria-hidden="true"
        >
          {cartValue.size}
        </span>
      )}
    </NavButton>
  );
};
