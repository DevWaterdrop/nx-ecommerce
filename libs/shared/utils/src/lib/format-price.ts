export function formatPrice(price: number) {
  return `${Math.max(price, 0).toFixed(2)}$`;
}
