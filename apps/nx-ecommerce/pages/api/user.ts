import { Order } from '@nx-ecommerce/shared/graphql/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { user } from '../../lib/user';

function createOrder(id: string, order: Order) {
  const items = order.item.flatMap((item) => {
    if (!item || !item?.product?.data?.attributes) return [];

    return {
      id: item.id,
      amount: item.amount,
      product: item.product.data.attributes,
    };
  });

  return { amount: order.amount, items, id };
}

const userAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { cookies } = req;
    let checkData: Awaited<ReturnType<typeof user['check']>> = [];

    if ('userToken' in cookies) {
      checkData = await user.check(cookies.userToken);
    }

    if (checkData.length < 1) {
      const { token, id } = await user.create();
      return res.status(200).json({ id, token, orders: [] });
    }

    if (!checkData[0].id || !checkData[0].attributes?.token) {
      throw new Error('No token received');
    }

    const orders = checkData[0].attributes.orders?.data.flatMap((item) =>
      item.attributes && item.id ? createOrder(item.id, item.attributes) : []
    );

    return res.status(200).json({
      id: checkData[0].id,
      token: checkData[0].attributes.token,
      orders,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(500).json({ error: 'Unknown error' });
  }
};

export default userAPI;
