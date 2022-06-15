import Image from 'next/image';
import searchSVG from '../../assets/icons/search.svg';
import xSVG from '../../assets/icons/x.svg';
import { useState } from 'react';
import clsx from 'clsx';
import { handleBlur } from '@nx-ecommerce/shared/utils/handle-blur';
import { Item } from '../item-card/item-card';
import SearchbarItem from '../searchbar-item/searchbar-item';

/* eslint-disable-next-line */
export interface SearchbarProps {
  input: string;
  items: Item[];
  handleClear: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Searchbar(props: SearchbarProps) {
  const { handleClear, handleSubmit, handleInput, input, items } = props;

  const [focus, setFocus] = useState(false);

  return (
    <div className="w-full z-10 relative">
      <form
        className="flex bg-gray-100 rounded-3xl w-full items-center relative"
        role="search"
        onSubmit={handleSubmit}
        onFocus={() => setFocus(true)}
        onBlur={(e) => {
          handleBlur(e)(() => void setFocus(false));
        }}
      >
        <div
          className={clsx(
            'h-4 transition-all w-4 absolute left-4 flex items-center',
            input ? 'opacity-0 scale-0' : 'w-4 mr-4'
          )}
          aria-hidden="true"
        >
          <Image src={searchSVG} alt="" layout="fill" />
        </div>
        <input
          className={clsx(
            'bg-transparent outline-none py-3 transition-all w-full',
            input ? 'pl-6 pr-10' : 'px-10'
          )}
          title="search"
          role="searchbox"
          placeholder="Search"
          autoComplete="off"
          value={input}
          onChange={handleInput}
        />
        <div
          className={clsx(
            'flex right-4 gap-2 items-center absolute transition-opacity h-full',
            input ? 'opacity-100' : 'opacity-0 pointer-events-none invisible'
          )}
          data-testid="search-controls"
        >
          <button
            className="flex h-4 w-4 items-center relative"
            type="button"
            title="clear input"
            onClick={handleClear}
          >
            <Image src={xSVG} alt="" layout="fill" aria-hidden="true" />
          </button>
          <div className="bg-gray-300 h-1/2 w-px" aria-hidden="true" />
          <button
            className="flex h-4 transition-colors w-4 items-center relative"
            type="submit"
            title="submit search"
          >
            <Image src={searchSVG} alt="" layout="fill" aria-hidden="true" />
          </button>
        </div>
        {focus && (
          <div className="bg-white rounded-md max shadow-sm min-h-[calc(100%+2rem)] -top-4 -left-4 w-[calc(100%+2rem)] -z-1 absolute">
            {items.length > 0 && (
              <div className="mt-20 px-10 pb-2">
                <ul className="flex flex-col max-h-[50vh] overflow-scroll">
                  {items.map((item) => (
                    <SearchbarItem key={item.id} item={item} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </form>
      {focus && (
        <div
          className="h-full bg-gray-300 w-full opacity-40 top-0 left-0 -z-2 fixed"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default Searchbar;
