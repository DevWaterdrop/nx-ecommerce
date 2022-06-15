import { Story, Meta } from '@storybook/react';
import { DEFAULT_PROPS } from '../../props/constants';
import { ItemCard, ItemCardProps } from './item-card';

export default {
  component: ItemCard,
  title: 'Components/ItemCard',
} as Meta;

const Template: Story<ItemCardProps> = (args) => <ItemCard {...args} />;

export const Primary = Template.bind({});
Primary.args = DEFAULT_PROPS;
