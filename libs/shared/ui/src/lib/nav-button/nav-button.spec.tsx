import { NAV_BUTTON_DEFAULT_PROPS } from '../../props/constants';
import { render, RenderResult, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { getHref, NavButton } from './nav-button';

describe('NavButton', () => {
  let renderResult: RenderResult;
  const props = NAV_BUTTON_DEFAULT_PROPS;

  beforeEach(() => {
    renderResult = render(<NavButton {...props} />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;
    expect(baseElement).toBeTruthy();
  });

  it('proper href and title', () => {
    const href = getHref(props.type);

    const title = `${href} page`;
    const link = `/${href}`;

    const linkElement = screen.getByRole('link', { name: title });
    expect(linkElement).toHaveAttribute('href', link);
  });

  it('disabled if loading', () => {
    renderResult.rerender(<NavButton {...props} loading={true} />);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveClass('opacity-50 pointer-events-none');
  });
});
