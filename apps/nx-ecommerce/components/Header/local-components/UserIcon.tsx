import { NavButton } from '@nx-ecommerce/shared/ui/nav-button';
import { useAtomValue } from 'jotai';
import { userAtom } from '../../../lib/stores';

export const UserIcon: React.FC = () => {
  const user = useAtomValue(userAtom);

  return <NavButton type="user" loading={!user} />;
};
