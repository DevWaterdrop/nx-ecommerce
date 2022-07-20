import { Story, Meta } from '@storybook/react';
import { Footer } from './footer';

export default {
  component: Footer,
  title: 'Components/Footer',
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
