import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

import { ItemCard, createLabel } from './item-card';
import { ITEM_CARD_DEFAULT_PROPS } from '../../props/constants';
import { formatPrice } from '@nx-ecommerce/shared/utils/format-price';

describe('ItemCard', () => {
  let element: HTMLElement;
  const props = ITEM_CARD_DEFAULT_PROPS;

  beforeEach(() => {
    const { baseElement } = render(<ItemCard {...props} />);

    element = baseElement;
  });

  it('should render successfully', () => {
    const tree = renderer.create(<ItemCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();

    expect(element).toBeTruthy();
  });

  it('main elements are exists and properly formatted', () => {
    const { price, name, smallDescription } = props.item;

    const properPrice = formatPrice(price);

    screen.getByText(name);
    screen.getByText(properPrice);
    screen.getByText(smallDescription);
  });

  it('proper link title', () => {
    const { price, name, smallDescription } = props.item;

    const title = createLabel(props.item);
    expect(title).toBe(`${name}, ${smallDescription}, price: ${price}`);

    screen.queryByTitle(title);
  });

  it('proper state on focus/hover', () => {
    const { name } = props.item;

    const container = screen.getByTestId('item-card');

    const figcaption = screen.getByText(name);
    expect(figcaption).not.toHaveClass('underline');

    const buttonCartContainer = screen.getByRole('button', {
      name: 'add to cart',
    }).parentElement;
    expect(buttonCartContainer).toHaveClass('sm:(opacity-0)');

    const buttonFavorite = screen.getByRole('button', {
      name: 'add to favorite',
    });
    expect(buttonFavorite).toHaveClass('sm:(opacity-0)');

    const secondImage = screen.getByTestId('second-image');
    expect(secondImage).toHaveClass('opacity-0');

    fireEvent.mouseOver(container);

    expect(figcaption).toHaveClass('underline');
    expect(buttonCartContainer).not.toHaveClass('sm:(opacity-0)');
    expect(buttonFavorite).not.toHaveClass('sm:(opacity-0)');
    expect(secondImage).toHaveClass('opacity-100');
  });
});
