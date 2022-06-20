import { Button } from '../button';
import { Icon, ICONS } from '../icon';

type TypeProp<T extends keyof typeof ICONS> = keyof Pick<typeof ICONS, T>;

export type NavButtonProps =
  | {
      type: TypeProp<'user'>;
      loading: boolean;
    }
  | {
      type: TypeProp<'cartBlack' | 'heart'>;
      loading?: boolean;
    };

export const NavButton: React.FC<NavButtonProps> = (props) => {
  const { type, loading } = props;

  return (
    <Button
      tag="a"
      type="transparent"
      elProps={{
        href: `/${type}`,
        title: `${type} page`,
      }}
      disabled={loading}
    >
      <Icon icon={type} loading={loading} />
    </Button>
  );
};
