import { Meta, Story } from '@storybook/react';
import Button from '../components/Button';
import { ButtonProps } from '../types/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};

export const Primary = Template.bind({});

Primary.args = {
  ...Default.args,
  color: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Default.args,
  color: 'secondary',
};
