import debounce from 'lodash.debounce';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchbarSearchQuery } from '@nx-ecommerce/shared/graphql/types';
import { client } from '../../../lib/client';
import { Searchbar } from '@nx-ecommerce/shared/ui/searchbar';

export const NavSearch: React.FC = () => {
  const router = useRouter();
  const [input, setInput] = useState('');

  const { status, data, refetch } = useSearchbarSearchQuery(
    client,
    { value: input },
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
  const debounceRef = useRef<ReturnType<typeof debounce> | null>(null);

  useEffect(() => {
    if (debounceRef.current) debounceRef.current.cancel();
    if (input) {
      debounceRef.current = debounce(async () => {
        if (input) refetch();
      }, 300);
      debounceRef.current();
    }
  }, [input, refetch]);

  return (
    <Searchbar
      items={data?.products?.data || []}
      input={input}
      loading={status === 'loading'}
      handleInput={(e) => {
        const { value } = e.currentTarget;
        setInput(value);
      }}
      handleSubmit={(e) => {
        e.preventDefault();
        router.push(`/s/${input}`);
      }}
      handleClear={() => void setInput('')}
    />
  );
};
