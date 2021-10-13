import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonProps } from '@mui/material/Button';
import Button from '.';

export default {
  title: 'Components/Button/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['contained', 'outlined', 'text', 'string'],
      control: { type: 'radio' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default: Story<ButtonProps> = Template.bind({});

Default.args = {
  color: 'primary',
  children: 'Button',
  variant: 'contained',
  fullWidth: false,
  disabled: false,
};
