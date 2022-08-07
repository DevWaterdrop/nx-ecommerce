import { render, RenderResult, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { Footer } from './footer';

describe('Footer', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Footer />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });

  it('should have author link', () => {
    expect(screen.getByRole('link', { name: 'DevWaterdrop' })).toBeTruthy();
  });
});
