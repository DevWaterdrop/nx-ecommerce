import { Logo } from '@nx-ecommerce/shared/ui/logo';
import { NavButton } from '@nx-ecommerce/shared/ui/nav-button';
import { NavSearch } from './local-components/Search';
import { useAtomValue } from 'jotai';
import { userAtom } from '../../lib/storage';

export const Nav: React.FC = () => {
  const user = useAtomValue(userAtom);

  return (
    <nav className="flex flex-wrap mx-auto max-w-screen-xl my-4 w-full p-4 gap-4 justify-between items-center">
      <Logo />
      <div className="order-3 w-full sm:(order-none w-2/5) ">
        <NavSearch />
      </div>
      <ul className="flex gap-2 items-center">
        <NavButton type="user" loading={!user} />
        <NavButton type="cartBlack" />
        <NavButton type="heart" />
      </ul>
    </nav>
  );
};
