import clsx from 'clsx';
import { Button } from '../../button';
import { Icon } from '../../icon';

interface Props {
  handleClick: () => void;
  hovered: boolean;
  isFavorite: boolean;
}

export const Favorite: React.FC<Props> = (props) => {
  const { handleClick, hovered, isFavorite } = props;

  return (
    <Button
      classes={clsx('flex items-center', !hovered && 'sm:(opacity-0)')}
      tag="button"
      type="transparent"
      elProps={{
        onClick: handleClick,
        title: 'add to favorite',
        type: 'button',
      }}
    >
      <Icon icon={isFavorite ? 'heartFilled' : 'heart'} size="sm" />
    </Button>
  );
};
