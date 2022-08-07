import { Select } from '@nx-ecommerce/shared/ui/select';
import clsx from 'clsx';
import { PRICES, SORT } from '../../../lib/constants';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { CategoriesSearchQuery } from '@nx-ecommerce/shared/graphql/types';

interface Props {
  categories: NonNullable<CategoriesSearchQuery['categories']>['data'];
}

export const FilterSection: React.FC<Props> = (props) => {
  const { categories } = props;

  const router = useRouter();

  const readyCategories = useMemo(
    () =>
      categories.flatMap((category) =>
        category.attributes
          ? { value: category.attributes.slug, label: category.attributes.name }
          : []
      ),
    [categories]
  );

  const handleChange = (key: string, value?: string | string[]) => {
    const copyQuery = { ...router.query };

    delete copyQuery[key];
    if (value) copyQuery[key] = value;

    return void router.push({
      pathname: '/s',
      query: copyQuery,
    });
  };

  return (
    <section
      className={clsx(
        'mb-8 py-4 top-0 z-10 sticky',
        'flex flex-wrap gap-4',
        'bg-white border-b'
      )}
    >
      <Select
        placeholder="Sort"
        items={SORT}
        onChange={(item) => handleChange('s', item)}
        initial={router.query['s']}
      />
      <Select
        placeholder="Price"
        items={PRICES}
        onChange={(item) => handleChange('p', item)}
        initial={router.query['p']}
      />
      <Select
        placeholder="Category"
        items={readyCategories}
        onChange={(item) => handleChange('c', item)}
        multiple
        initial={router.query['c']}
      />
    </section>
  );
};
