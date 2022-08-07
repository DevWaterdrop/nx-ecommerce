import clsx from 'clsx';
import type { Item, ItemMap } from '../select';

interface Props {
  selected: Item | ItemMap | null;
  items: Item[];
  handleItemChange: (item: Item) => void;
}

export const Dropdown: React.FC<Props> = (props) => {
  const { items, handleItemChange, selected } = props;

  return (
    <ul
      className={clsx(
        'absolute top-13 left-0 p-4 z-20',
        'flex flex-col',
        'bg-white border rounded-md'
      )}
    >
      {items.map((item) => (
        <li
          key={item.value}
          className={clsx('min-w-max w-full p-2 relative', 'accent-black')}
        >
          <label
            className={clsx(
              'flex gap-8 justify-between items-center',
              'cursor-pointer select-none'
            )}
          >
            {item.label}
            <input
              className="cursor-pointer"
              checked={
                selected instanceof Map
                  ? selected.has(item.value)
                  : selected?.value === item.value
              }
              onChange={() => handleItemChange(item)}
              type="checkbox"
            />
          </label>
        </li>
      ))}
    </ul>
  );
};
