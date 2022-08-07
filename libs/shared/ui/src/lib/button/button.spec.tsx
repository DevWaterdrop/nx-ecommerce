import { BUTTON_DEFAULT_PROPS } from '../../props/constants';
import { render, RenderResult, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { Button } from './button';

describe('Button', () => {
  let renderResult: RenderResult;
  const props = BUTTON_DEFAULT_PROPS;

  beforeEach(() => {
    renderResult = render(<Button {...props} />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = renderer.create(<Button {...props} />).toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });

  it('should render as "a" or "button" tag', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByRole('link')).toBeFalsy();

    renderResult.rerender(<Button tag="a">test</Button>);

    expect(screen.getByText('test').closest('a')).toBeInTheDocument();
    expect(screen.queryByRole('button')).toBeFalsy();
  });
});
