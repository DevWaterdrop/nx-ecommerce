import debounce from 'lodash.debounce';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSearchbarSearchQuery } from '@nx-ecommerce/shared/graphql/types';
import { client } from '../../../lib/client';
import { Searchbar } from '@nx-ecommerce/shared/ui/searchbar';
import { searchAtom } from '../../../lib/stores';
import { useAtom } from 'jotai';

export const NavSearch: React.FC = () => {
  const router = useRouter();
  const [inputValue, updateInput] = useAtom(searchAtom);

  const { status, data, refetch } = useSearchbarSearchQuery(
    client,
    { value: inputValue },
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
  const debounceRef = useRef<ReturnType<typeof debounce> | null>(null);

  useEffect(() => {
    if (debounceRef.current) debounceRef.current.cancel();
    if (inputValue) {
      debounceRef.current = debounce(async () => {
        if (inputValue) refetch();
      }, 300);
      debounceRef.current();
    }
  }, [inputValue, refetch]);

  return (
    <Searchbar
      items={data?.products?.data || []}
      input={inputValue}
      loading={status === 'loading'}
      handleInput={(e) => {
        const { value } = e.currentTarget;
        updateInput(value);
      }}
      handleSubmit={(e) => {
        e.preventDefault();
        router.push({
          pathname: '/s',
          query: { i: inputValue },
        });
      }}
      handleClear={() => void updateInput('')}
    />
  );
};
