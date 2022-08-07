import { Button } from '../../button';
import { Icon } from '../../icon';

interface Props {
  handleFavoriteClick: () => void;
  favoritesValue: Set<string>;
  slug: string;
}

export const Favorite: React.FC<Props> = (props) => {
  const { favoritesValue, handleFavoriteClick, slug } = props;

  return (
    <Button
      classes="flex justify-center items-center"
      tag="button"
      size="lg"
      type="transparent-border"
      elProps={{
        onClick: handleFavoriteClick,
        title: 'add to favorite',
        type: 'button',
      }}
    >
      <Icon
        icon={favoritesValue.has(slug) ? 'heartFilled' : 'heart'}
        size="sm"
      />
    </Button>
  );
};
