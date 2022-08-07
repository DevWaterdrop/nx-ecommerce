import dynamic from 'next/dynamic';
import clsx from 'clsx';
import type { Items } from '../searchbar';
import type { SearchbarItemProps } from '../../searchbar-item';

interface Props {
  items: Items;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const LazySearchbarItem = dynamic<SearchbarItemProps>(() =>
  import('../../searchbar-item').then(({ SearchbarItem }) => SearchbarItem)
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
      {items.length > 0 && (
        <div className="mt-20 px-10 pb-2">
          <ul className={clsx('max-h-[50vh] overflow-scroll', 'flex flex-col')}>
            {items.map(
              (item) =>
                item.attributes && (
                  <LazySearchbarItem
                    key={item.id}
                    item={item.attributes}
                    handleClick={() => setFocus(false)}
                  />
                )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
