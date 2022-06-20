import { render, RenderResult, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Logo } from './logo';

describe('Logo', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Logo />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;
    expect(baseElement).toBeTruthy();
  });

  it('contain all chars in two words', () => {
    const [firstWord, secondWord] = 'fake shop'.split(' ');

    const firsWordContainerElement = screen.getByTestId('first-word');

    firstWord.split('').forEach((char) => {
      const charElement = screen.getByText(char);
      expect(charElement).toBeInTheDocument();
      expect(charElement.parentElement).toBe(firsWordContainerElement);
    });

    const secondWordContainerElement = screen.getByTestId('second-word');
    secondWord.split('').forEach((char) => {
      const charElement = screen.getByText(char);
      expect(charElement).toBeInTheDocument();
      expect(charElement.parentElement).toBe(secondWordContainerElement);
    });
  });
});
