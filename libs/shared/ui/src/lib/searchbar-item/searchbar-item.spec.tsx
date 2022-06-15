import { ITEM } from '../../props/constants';
import { render, screen } from '@testing-library/react';
import SearchbarItem from './searchbar-item';

describe('SearchbarItem', () => {
  let element: HTMLElement;

  beforeEach(() => {
    const { baseElement } = render(<SearchbarItem item={ITEM} />);

    element = baseElement;
  });

  it('should render successfully', () => {
    expect(element).toBeTruthy();
  });

  it('proper name and small description', () => {
    screen.getByText(ITEM.name);
    screen.getByText(ITEM.smallDescription);
  });
});
