import type { NextApiRequest, NextApiResponse } from 'next';
import { user } from '../../lib/user';

const userAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { cookies } = req;
    let checkData: Awaited<ReturnType<typeof user['check']>> = [];

    if ('userToken' in cookies) {
      checkData = await user.check(cookies.userToken);
    }

    if (checkData.length < 1) {
      const token = await user.create();
      return res.status(200).json({ token });
    }

    if (!checkData[0].attributes?.token) throw new Error('No token received');
    return res.status(200).json({ token: checkData[0].attributes.token });
  } catch {
    res.status(500);
  }
};

export default userAPI;
