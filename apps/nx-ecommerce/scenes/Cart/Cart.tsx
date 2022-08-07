import { addCartAtom, cartAtom, userAtom } from '../../lib/stores';
import { useAtomValue, useSetAtom } from 'jotai';
import { ProductCartQuery } from '@nx-ecommerce/shared/graphql/types';
import { useMemo, useState } from 'react';
import { getBaseURL } from '../../utils/get-base-url';
import { CartSidebar } from '@nx-ecommerce/shared/ui/cart-sidebar';
import { useRouter } from 'next/router';
import { List } from './local-components/List';
import clsx from 'clsx';

interface Props {
  products?: ProductCartQuery;
}

export const Cart: React.FC<Props> = (props) => {
  const { products } = props;

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const addCart = useSetAtom(addCartAtom);

  const cartValue = useAtomValue(cartAtom);
  const userValue = useAtomValue(userAtom);

  const cartTotal = useMemo(() => {
    if (!products?.products?.data) return 0;

    return products.products.data.reduce((prev, cur) => {
      if (!cur.attributes) return prev;

      const amount = cartValue.get(cur.attributes.slug);
      const calculation = prev + cur.attributes.price * (amount || 0);

      return calculation;
    }, 0);
  }, [cartValue, products]);

  const cartIDMap = useMemo(() => {
    if (!products?.products?.data) return new Map();

    return products.products.data.reduce((prev, cur) => {
      if (!cur.attributes || !cur.id) return prev;

      const amount = cartValue.get(cur.attributes.slug);
      if (!amount) return prev;

      prev.set(cur.id, amount);

      return prev;
    }, new Map<string, number>());
  }, [products, cartValue]);

  const handleCheckoutClick = async () => {
    setLoading(true);

    const data = await fetch(getBaseURL('/api/cart'), {
      method: 'POST',
      body: JSON.stringify({
        orders: [...cartIDMap.entries()],
        amount: cartTotal,
        userID: userValue?.id,
      }),
    }).then((res) => res.json());

    setLoading(false);

    if (data) {
      addCart({ slug: 'all', amount: -16 });
      router.push('/user').then(() => router.reload());
    }
  };

  return (
    <section>
      <h1 className="font-semibold mb-4 text-3xl">Shopping Bag</h1>
      {products && products.products?.data.length ? (
        <div className={clsx('flex flex-col gap-24', 'md:(flex-row)')}>
          <List products={products.products.data} cartValue={cartValue} />
          <CartSidebar
            isLoading={loading}
            cartTotal={cartTotal}
            handleCheckoutClick={handleCheckoutClick}
            isUser={!!userValue}
          />
        </div>
      ) : (
        <p>Cart is empty</p>
      )}
    </section>
  );
};
