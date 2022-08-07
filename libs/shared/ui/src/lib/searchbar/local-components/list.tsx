import clsx from 'clsx';
import { SearchbarItem } from '../../searchbar-item';
import type { Items } from '../searchbar';

interface Props {
  items: Items;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

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
                  <SearchbarItem
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
