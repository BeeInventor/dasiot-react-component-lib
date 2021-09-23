import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '.';
import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Button/Button',
  component: Button,
  argTypes: {
    height: {
      description: 'Button height',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const Default: Story<ButtonProps> = Template.bind({});

Default.args = {
  height: 32,
  children: 'Button',
  variant: 'contained',
  fullWidth: false,
  disabled: false,
};

export const Primary: Story<ButtonProps> = Template.bind({});

Primary.args = {
  ...Default.args,
  color: 'primary',
};
