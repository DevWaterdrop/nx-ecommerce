import clsx from 'clsx';
import Image from 'next/image';
import type { Item, ItemMap } from '../select';
import chevronDownSVG from '../../../assets/icons/chevron-down.svg';

interface Props {
  selected: Item | ItemMap | null;
  placeholder: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Button: React.FC<Props> = (props) => {
  const { selected, placeholder, open, setOpen } = props;

  const handleClick = () => void setOpen((prev) => !prev);

  return (
    <button
      className={clsx(
        'py-2.5 px-4',
        'flex items-end gap-2',
        'bg-gray-100',
        'text-sm font-medium',
        'rounded-full border border-transparent',
        'sm:(px-6)',
        (selected instanceof Map ? selected.size > 0 : selected !== null) &&
          'border-black'
      )}
      type="button"
      onClick={handleClick}
    >
      {placeholder}
      <div
        className={clsx(
          'h-4.5 w-4.5 relative',
          'transition-transform transform-gpu',
          open && 'rotate-180'
        )}
        aria-hidden="true"
      >
        <Image width={18} height={18} src={chevronDownSVG} alt="" />
      </div>
    </button>
  );
};
