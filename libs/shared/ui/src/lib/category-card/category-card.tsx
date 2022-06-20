import Image from 'next/image';
import { Button } from '../button';
import arrowRightSVG from '../../assets/icons/arrow-right.svg';

export interface CategoryCardProps {
  image: string;
  smallDescription: string;
  slug: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  const { smallDescription, image, slug } = props;

  return (
    <a
      className="flex flex-col h-full hover:(underline) focus:(underline)"
      href={`/c/${slug}`}
    >
      <div className="h-64 w-full relative">
        <Image
          src={image}
          alt=""
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col bg-blue-400 flex-1 p-8 gap-8">
        <h3 className="font-bold leading-relaxed text-2xl">
          {smallDescription}
        </h3>
        <Button tag="button" type="black" classes="w-max mt-auto">
          <div className="h-8 w-8 relative" aria-hidden="true">
            <Image src={arrowRightSVG} layout="fill" alt="" />
          </div>
        </Button>
      </div>
    </a>
  );
};
