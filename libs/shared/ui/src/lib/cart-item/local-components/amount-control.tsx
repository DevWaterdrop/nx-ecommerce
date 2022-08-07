import clsx from 'clsx';

interface Props {
  inCartAmount: number;
  handleCartMinusClick: () => void;
  handleCartPlusClick: () => void;
}

export const AmountControl: React.FC<Props> = (props) => {
  const { inCartAmount, handleCartMinusClick, handleCartPlusClick } = props;

  return (
    <div className={clsx('h-8', 'flex')}>
      <button
        className={clsx(
          'h-full w-8 relative',
          'flex items-center justify-center',
          'border rounded-l-xl',
          'text-semibold text-xl',
          'transition',
          'hover:(bg-black text-white border-black)'
        )}
        onClick={handleCartMinusClick}
        type="button"
      >
        <span className="pb-0.75">-</span>
      </button>
      <span
        className={clsx(
          'w-8',
          'flex items-center justify-center',
          'border-t border-b'
        )}
      >
        {inCartAmount}
      </span>
      <button
        className={clsx(
          'h-full w-8',
          'border rounded-r-xl',
          'text-semibold text-xl',
          'transition',
          'hover:(bg-black text-white border-black)'
        )}
        onClick={handleCartPlusClick}
        type="button"
      >
        +
      </button>
    </div>
  );
};
