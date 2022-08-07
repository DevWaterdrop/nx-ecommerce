import { render, RenderResult, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ProductSidebar } from './product-sidebar';
import { PRODUCT_SIDEBAR_DEFAULT_PROPS } from '../../props/constants';
import { formatPrice } from '@nx-ecommerce/shared/utils/format-price';

describe('ProductSidebar', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <ProductSidebar {...PRODUCT_SIDEBAR_DEFAULT_PROPS} />
    );
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;
    expect(baseElement).toBeTruthy();
  });

  it('should have proper information', () => {
    const { smallDescription, name, price } =
      PRODUCT_SIDEBAR_DEFAULT_PROPS.product;

    expect(screen.getByText(smallDescription)).toBeInTheDocument();

    expect(screen.getByText(name)).toBeInTheDocument();

    expect(screen.queryByText(price)).not.toBeInTheDocument();
    expect(screen.queryByText(formatPrice(price))).toBeInTheDocument();

    const bannerInfo = '100% of the net profits will be donated to Ukraine!';
    expect(screen.queryByText(bannerInfo)).toBeInTheDocument();
  });
});
