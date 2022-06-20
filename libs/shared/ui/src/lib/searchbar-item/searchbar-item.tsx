import Image from 'next/image';
import { Item } from '../item-card';
import { createItemHref } from '@nx-ecommerce/shared/utils/create-item-href';

export interface SearchbarItemProps {
  item: Item;
}

export const SearchbarItem: React.FC<SearchbarItemProps> = (props) => {
  const { item } = props;

  return (
    <li className="list-none py-2" key={item.id}>
      <a href={createItemHref(item.id)} title={item.name}>
        <div className="flex gap-2 items-center">
          <div className="h-12 w-12">
            <Image
              src={item.images[0]}
              width={48}
              height={48}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-sm uppercase hover:(underline)">
              {item.name}
            </span>
            <span className="text-xs text-gray-500">
              {item.smallDescription}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
};
