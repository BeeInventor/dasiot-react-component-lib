import { Meta, Story } from '@storybook/react';
import Button from '.';
import { ButtonProps } from '../../types/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    height: {
      description: 'Button height',
      defaultValue: 32,
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const Default = Template.bind({});

Default.args = {
  height: 32,
  children: 'Button',
  variant: 'contained',
  fullWidth: false,
  disabled: false,
};

export const Primary = Template.bind({});

Primary.args = {
  ...Default.args,
  color: 'primary',
};
