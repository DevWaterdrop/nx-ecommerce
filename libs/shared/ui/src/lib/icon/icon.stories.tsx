import { Story, Meta } from '@storybook/react';
import { Icon, IconProps } from './icon';

export default {
  component: Icon,
  title: 'Components/Icon',
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
