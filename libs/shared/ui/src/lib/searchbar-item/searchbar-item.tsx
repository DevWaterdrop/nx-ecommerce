import Image from 'next/image';
import { createItemHref } from '@nx-ecommerce/shared/utils/create-item-href';
import { SearchbarSearchQuery } from '@nx-ecommerce/shared/graphql/types';
import { getStrapiURL } from '@nx-ecommerce/shared/utils/get-strapi-url';
import Link from 'next/link';

export interface SearchbarItemProps {
  item: NonNullable<
    NonNullable<SearchbarSearchQuery['products']>['data'][0]['attributes']
  >;
}

export const SearchbarItem: React.FC<SearchbarItemProps> = (props) => {
  const { item } = props;

  return (
    <li className="list-none py-2" key={item.slug}>
      <Link href={createItemHref(item.slug)}>
        <a title={item.name}>
          <div className="flex gap-2 items-center">
            <div className="bg-gray-100 h-12 w-12">
              {item.images && !!item.images?.data.length && (
                <Image
                  src={getStrapiURL(item.images.data[0].attributes?.url)}
                  width={48}
                  height={48}
                  objectFit="cover"
                />
              )}
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
      </Link>
    </li>
  );
};
