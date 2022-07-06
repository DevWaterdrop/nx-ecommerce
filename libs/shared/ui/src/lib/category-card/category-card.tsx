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
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { smallDescription, image, slug } = category;

  return (
    <Link href={`/c/${slug}`}>
      <a className="flex flex-col h-full hover:(underline) focus:(underline)">
        <div
          className={clsx(
            'bg-gray-100 w-full relative',
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
        <div className="flex flex-col bg-blue-400 flex-1 p-5 gap-4 sm:(p-8 gap-8) ">
          <h3 className="font-bold text-xl leading-relaxed sm:(text-2xl)">
            {smallDescription}
          </h3>
          <Button tag="button" type="black" classes="w-max mt-auto">
            <div className="h-6 w-6 relative sm:(h-8 w-8) " aria-hidden="true">
              <Image src={arrowRightSVG} layout="fill" alt="" />
            </div>
          </Button>
        </div>
      </a>
    </Link>
  );
};
