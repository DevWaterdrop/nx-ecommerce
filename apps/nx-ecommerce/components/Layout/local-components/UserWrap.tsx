import { userAtom } from '../../../lib/stores';
import { getBaseURL } from '../../../utils/get-base-url';
import { useAtom } from 'jotai';
import Cookies from 'js-cookie';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

export const UserWrap: React.FC<Props> = (props) => {
  const { children } = props;

  const [userValue, updateUser] = useAtom(userAtom);

  useEffect(() => {
    if (!userValue) {
      console.log(1);
      fetch(getBaseURL('/api/user'))
        .then((res) => res.json())
        .then(({ token, orders, id }) => {
          Cookies.set('userToken', token);
          updateUser({ id, token, orders });
        });
    }
  }, [userValue, updateUser]);

  return <>{children}</>;
};
