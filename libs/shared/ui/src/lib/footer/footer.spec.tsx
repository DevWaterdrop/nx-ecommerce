import { render, RenderResult, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Footer } from './footer';

describe('Footer', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Footer />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;
    expect(baseElement).toBeTruthy();
  });

  it('should have author link', () => {
    expect(screen.getByRole('link', { name: 'DevWaterdrop' })).toBeTruthy();
  });
});
