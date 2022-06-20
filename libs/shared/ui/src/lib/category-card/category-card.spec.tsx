import { CATEGORY_CARD_DEFAULT_PROPS } from '../../props/constants';
import { render, RenderResult } from '@testing-library/react';

import { CategoryCard } from './category-card';

describe('CategoryCard', () => {
  let renderResult: RenderResult;
  const props = CATEGORY_CARD_DEFAULT_PROPS;

  beforeEach(() => {
    renderResult = render(<CategoryCard {...props} />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;
    expect(baseElement).toBeTruthy();
  });
});
