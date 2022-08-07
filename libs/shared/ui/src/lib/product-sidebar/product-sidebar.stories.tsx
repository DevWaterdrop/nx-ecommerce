import { Story, Meta } from '@storybook/react';
import { PRODUCT_SIDEBAR_DEFAULT_PROPS } from '../../props/constants';
import { ProductSidebar, ProductSidebarProps } from './product-sidebar';

export default {
  component: ProductSidebar,
  title: 'Components/Product/Sidebar',
} as Meta;

const Template: Story<ProductSidebarProps> = (args) => (
  <ProductSidebar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...PRODUCT_SIDEBAR_DEFAULT_PROPS,
};
