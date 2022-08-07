import clsx from 'clsx';
import { Button } from '../../button';
import { Icon } from '../../icon';

interface Props {
  handleClick: () => void;
}

export const Cart: React.FC<Props> = (props) => {
  const { handleClick } = props;

  return (
    <Button
      classes={clsx('flex items-center')}
      tag="button"
      elProps={{
        onClick: handleClick,
        title: 'add to cart',
        type: 'button',
      }}
    >
      <Icon icon="cart" size="sm" />
    </Button>
  );
};
