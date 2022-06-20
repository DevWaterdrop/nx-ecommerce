import { Story, Meta } from '@storybook/react';
import { ITEM } from '../../props/constants';
import { SearchbarItem, SearchbarItemProps } from './searchbar-item';

export default {
  component: SearchbarItem,
  title: 'Components/Searchbar/Item',
} as Meta;

const Template: Story<SearchbarItemProps> = (args) => (
  <SearchbarItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  item: ITEM,
};
