import Image from 'next/image';
import { Button } from '../button';
import arrowRightSVG from '../../assets/icons/arrow-right.svg';
import { Category } from '@nx-ecommerce/shared/graphql/refactored-types';
import classes from './category-card.module.css';
import clsx from 'clsx';
import Link from 'next/link';
import { getStrapiURL } from '@nx-ecommerce/shared/utils/get-strapi-url';

export interface CategoryCardProps {
  category: Category;
  color?: 'yellow' | 'green' | 'blue';
}

export const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  const { category, color = 'blue' } = props;

  const { smallDescription, image, slug } = category;

  return (
    <Link href={`/s?c=${slug}`}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={clsx(
          'h-full',
          'flex flex-col',
          'hover:(underline)',
          'focus:(underline)'
        )}
      >
        <div
          className={clsx(
            'w-full relative',
            'bg-gray-100',
            classes['category-card-aspect']
          )}
        >
          {image && image.data && (
            <Image
              src={getStrapiURL(image.data.attributes?.url)}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <div
          className={clsx(
            'p-5',
            'flex flex-col flex-1 gap-4',
            color === 'blue' && 'bg-blue-400',
            color === 'green' && 'bg-green-400',
            color === 'yellow' && 'bg-yellow-400',
            'sm:(p-8 gap-8)'
          )}
        >
          <h3
            className={clsx(
              'font-bold text-xl leading-relaxed',
              'sm:(text-2xl)'
            )}
          >
            {smallDescription}
          </h3>
          <Button classes="w-max mt-auto" tag="button" type="black">
            <div
              className={clsx('h-6 w-6 relative', 'sm:(h-8 w-8)')}
              aria-hidden="true"
            >
              <Image src={arrowRightSVG} layout="fill" alt="" />
            </div>
          </Button>
        </div>
      </a>
    </Link>
  );
};
