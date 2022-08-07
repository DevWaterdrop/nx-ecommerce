import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';

import { OrdersTable } from './orders-table';
import { ORDERS_TABLE_DEFAULT_PROPS } from '../../props/constants';
import { formatPrice } from '@nx-ecommerce/shared/utils/format-price';

describe('OrdersTable', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<OrdersTable {...ORDERS_TABLE_DEFAULT_PROPS} />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;
    expect(baseElement).toBeTruthy();
  });

  it('should have proper head structure', () => {
    const { baseElement } = renderResult;

    const tableHead = baseElement.querySelector('thead');
    expect(tableHead).toBeInTheDocument();

    const headRow = tableHead?.querySelector('tr');
    expect(headRow).toBeInTheDocument();

    const tableDataCells = headRow?.querySelectorAll('td');
    expect(tableDataCells?.length).toBe(2);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [products, total] = Array.from(tableDataCells!);

    expect(products.textContent).toBe('Products');
    expect(total.textContent).toBe('Total');
  });

  it('should have proper body structure', () => {
    const { baseElement } = renderResult;

    const { orders } = ORDERS_TABLE_DEFAULT_PROPS;

    const tableBody = baseElement.querySelector('tbody');
    expect(tableBody).toBeInTheDocument();

    orders.forEach((order, index) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const BodyRow = Array.from(tableBody!.querySelectorAll('tr'))[index];
      expect(BodyRow).toBeInTheDocument();

      const tableDataCells = BodyRow?.querySelectorAll('td');
      expect(tableDataCells?.length).toBe(2);

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const [products, amount] = Array.from(tableDataCells!);

      expect(products.querySelectorAll('li').length).toBe(order.items.length);
      expect(amount.textContent).toBe(formatPrice(order.amount));
    });
  });
});
