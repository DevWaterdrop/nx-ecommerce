import { Logo } from '@nx-ecommerce/shared/ui/logo';
import { NavButton } from '@nx-ecommerce/shared/ui/nav-button';
import { NavSearch } from './local-components/Search';
import { CartIcon } from './local-components/CartIcon';
import { UserIcon } from './local-components/UserIcon';
import clsx from 'clsx';

export const Header: React.FC = () => {
  return (
    <header
      className={clsx(
        'mx-auto max-w-screen-xl my-4 w-full p-4',
        'flex flex-wrap gap-4 justify-between items-center'
      )}
    >
      <Logo />
      <div className={clsx('order-3 w-full', 'sm:(order-none w-2/5)')}>
        <NavSearch />
      </div>
      <nav>
        <ul className="flex gap-2 items-center">
          <li>
            <UserIcon />
          </li>
          <li>
            <NavButton type="heart" />
          </li>
          <li>
            <CartIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
};
