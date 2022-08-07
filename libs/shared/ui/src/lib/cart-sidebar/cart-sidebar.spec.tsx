import { render, RenderResult, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { CartSidebar } from './cart-sidebar';
import { CART_SIDEBAR_DEFAULT_PROPS } from '../../props/constants';
import { formatPrice } from '@nx-ecommerce/shared/utils/format-price';

describe('CartSidebar', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<CartSidebar {...CART_SIDEBAR_DEFAULT_PROPS} />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = renderer
      .create(<CartSidebar {...CART_SIDEBAR_DEFAULT_PROPS} />)
      .toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });

  it('should have proper price', () => {
    const { cartTotal } = CART_SIDEBAR_DEFAULT_PROPS;

    expect(screen.getByText(formatPrice(cartTotal))).toBeInTheDocument();
  });
});
