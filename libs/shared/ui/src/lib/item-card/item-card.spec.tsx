import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import ItemCard, { createLabel } from './item-card';
import { DEFAULT_PROPS } from '../../props/constants';
import { formatPrice } from '@nx-ecommerce/shared/utils/format-price';

describe('ItemCard', () => {
  let element: HTMLElement;
  const props = DEFAULT_PROPS;

  beforeEach(() => {
    const { baseElement } = render(<ItemCard {...props} />);

    element = baseElement;
  });

  it('should render successfully', () => {
    expect(element).toBeTruthy();
  });

  it('main elements are exists and properly formatted', () => {
    const { price, name, smallDescription, tag } = props.item;

    const properPrice = formatPrice(price);

    screen.getByText(name);
    screen.getByText(properPrice);
    screen.getByText(smallDescription);
    screen.getByText(tag || 'new');
  });

  it('proper link title', () => {
    const { price, name, smallDescription } = props.item;

    const title = createLabel(props.item);
    expect(title).toBe(`${name}, ${smallDescription}, price: ${price}`);

    screen.queryByTitle(title);
  });

  it('proper state on focus/hover', () => {
    const { name } = props.item;

    const container = screen.getByRole('listitem');

    const figcaption = screen.getByText(name);
    expect(figcaption).not.toHaveClass('underline');

    const button = screen.getByRole('button');
    expect(button).toHaveClass('opacity-0');

    const secondImage = screen.getByTestId('second-image');
    expect(secondImage).toHaveClass('opacity-0');

    fireEvent.mouseOver(container);

    expect(figcaption).toHaveClass('underline');
    expect(button).not.toHaveClass('opacity-0');
    expect(secondImage).toHaveClass('opacity-100');
  });
});
