import Image from 'next/image';
import { createItemHref } from '@nx-ecommerce/shared/utils/create-item-href';
import { SearchbarSearchQuery } from '@nx-ecommerce/shared/graphql/types';
import { getStrapiImageURL } from '@nx-ecommerce/shared/utils/get-strapi-image-url';
import Link from 'next/link';
import clsx from 'clsx';

export interface SearchbarItemProps {
  item: NonNullable<
    NonNullable<SearchbarSearchQuery['products']>['data'][0]['attributes']
  >;
  handleClick: () => void;
}

export const SearchbarItem: React.FC<SearchbarItemProps> = (props) => {
  const { item, handleClick } = props;

  return (
    <li className="list-none py-2" key={item.slug}>
      <Link href={createItemHref(item.slug)}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a title={item.name} onClick={handleClick}>
          <div className="flex gap-2 items-center">
            <div className="bg-gray-100 h-12 w-12">
              {item.images && !!item.images?.data.length && (
                <Image
                  src={getStrapiImageURL(item.images.data[0].attributes?.url)}
                  width={48}
                  height={48}
                  objectFit="cover"
                />
              )}
            </div>
            <div className="flex flex-col justify-between">
              <span className={clsx('text-sm uppercase', 'hover:(underline)')}>
                {item.name}
              </span>
              <span className="text-xs text-gray-500">
                {item.smallDescription}
              </span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};
