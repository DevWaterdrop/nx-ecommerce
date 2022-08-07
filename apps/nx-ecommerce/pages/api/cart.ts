import { OrderEntityResponse } from '@nx-ecommerce/shared/graphql/types';
import { getStrapiURL } from '@nx-ecommerce/shared/utils/get-strapi-url';
import { init } from '../../lib/strapi';
import type { NextApiRequest, NextApiResponse } from 'next';

const cartAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { cookies, body: preBody } = req;

    if (req.method !== 'POST') {
      return res.status(405).send({ message: 'Only POST requests allowed' });
    }

    if (!('userToken' in cookies)) throw new Error('No user provided');
    if (!preBody) throw new Error('No body provided');

    const body = JSON.parse(preBody);
    if (!('userID' in body)) throw new Error('No userID provided');
    if (!('orders' in body)) throw new Error('No orders provided');
    if (!('amount' in body)) throw new Error('No amount provided');

    const { orders, userID, amount } = body;

    const { data }: OrderEntityResponse = await fetch(
      getStrapiURL('/api/orders'),
      {
        method: 'POST',
        ...init,
        body: JSON.stringify({
          data: {
            amount,
            item: [...new Map(orders).entries()].map(([id, amount]) => ({
              product: id,
              amount,
            })),
            user: userID,
          },
        }),
      }
    ).then((res) => res.json());

    if (!data || !data.id) throw new Error('Something went wrong');

    return res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(500).json({ error: 'Unknown error' });
  }
};

export default cartAPI;
