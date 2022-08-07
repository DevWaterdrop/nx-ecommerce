import { SELECT_DEFAULT_PROPS } from '../../props/constants';
import { Story, Meta } from '@storybook/react';
import { Select, SelectProps } from './select';

export default {
  component: Select,
  title: 'Components/Select',
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = { ...SELECT_DEFAULT_PROPS };
