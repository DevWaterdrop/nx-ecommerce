import clsx from 'clsx';
import { Button } from '../../button';

interface Props {
  handleCartClick: () => void;
  handleRemoveCartClick: () => void;
  cartValue: Map<string, number>;
  slug: string;
}

export const Cart: React.FC<Props> = (props) => {
  const { cartValue, slug, handleCartClick, handleRemoveCartClick } = props;

  return (
    <div className="flex-1 relative">
      <Button
        size="parent"
        tag="button"
        elProps={{
          onClick: handleCartClick,
        }}
      >
        <span className="font-semibold">Add to bag</span>
      </Button>
      {(cartValue.get(slug) || 0) > 0 && (
        <Button
          classes={clsx(
            'absolute z-10 -top-2 -right-2 w-8 h-8',
            'flex items-center justify-center',
            'bg-black rounded-full',
            'text-white text-sm select-none',
            'active:(bg-red-500)',
            'focus:(bg-red-500)',
            'hover:(bg-red-500)'
          )}
          basic
          tag="button"
          elProps={{
            onClick: handleRemoveCartClick,
            type: 'button',
          }}
        >
          {cartValue.get(slug)}
        </Button>
      )}
    </div>
  );
};
