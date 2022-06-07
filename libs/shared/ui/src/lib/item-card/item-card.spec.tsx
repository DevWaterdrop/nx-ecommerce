import { render } from '@testing-library/react';

import ItemCard from './item-card';

describe('ItemCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemCard />);
    expect(baseElement).toBeTruthy();
  });
});
