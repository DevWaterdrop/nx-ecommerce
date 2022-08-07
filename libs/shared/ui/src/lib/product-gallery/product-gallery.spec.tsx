import { render, RenderResult, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ProductGallery } from './product-gallery';
import { PRODUCT_GALLERY_DEFAULT_PROPS } from '../../props/constants';

describe('ProductGallery', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <ProductGallery {...PRODUCT_GALLERY_DEFAULT_PROPS} />
    );
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;
    expect(baseElement).toBeTruthy();
  });

  it('should have proper amount of images', () => {
    const listItems = screen.getAllByRole('listitem');

    expect(listItems.length).toBe(PRODUCT_GALLERY_DEFAULT_PROPS.images.length);
  });
});
