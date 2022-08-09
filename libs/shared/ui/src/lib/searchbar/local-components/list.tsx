import dynamic from 'next/dynamic';
import clsx from 'clsx';
import type { Items } from '../searchbar';
import type { Props as ItemsProps } from './items';

interface Props {
  items: Items;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const LazyItems = dynamic<ItemsProps>(() =>
  import('./items').then(({ Items }) => Items)
);

export const List: React.FC<Props> = (props) => {
  const { setFocus, items } = props;

  return (
    <div
      className={clsx(
        'min-h-[calc(100%+2rem)] -top-4 -left-4 w-[calc(100%+2rem)] -z-1 absolute',
        'bg-white shadow-sm',
        'rounded-md'
      )}
    >
      {items.length > 0 && <LazyItems setFocus={setFocus} items={items} />}
    </div>
  );
};
