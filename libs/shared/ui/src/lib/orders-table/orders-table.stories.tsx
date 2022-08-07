import { Story, Meta } from '@storybook/react';
import { ORDERS_TABLE_DEFAULT_PROPS } from '../../props/constants';
import { OrdersTable, OrdersTableProps } from './orders-table';

export default {
  component: OrdersTable,
  title: 'Components/OrdersTable',
} as Meta;

const Template: Story<OrdersTableProps> = (args) => <OrdersTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...ORDERS_TABLE_DEFAULT_PROPS,
};
