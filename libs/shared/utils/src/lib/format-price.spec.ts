import { formatPrice } from './format-price';

describe('format price', () => {
  it('positive number', () => {
    const price = 10;
    expect(formatPrice(price)).toBe('10.00$');
  });

  it('negative number', () => {
    const price = -2;
    expect(formatPrice(price)).toBe('0.00$');
  });

  it('with digits (lower)', () => {
    const price = 5.045;
    expect(formatPrice(price)).toBe('5.04$');
  });

  it('with digits (upper)', () => {
    const price = 5.046;
    expect(formatPrice(price)).toBe('5.05$');
  });
});
