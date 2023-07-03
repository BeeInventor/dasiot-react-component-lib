import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PasswordTextField from '.';
import { colors } from '@mui/material';

const meta: Meta<typeof PasswordTextField> = {
  title: 'Components/TextField/PasswordTextField',
  component: PasswordTextField,
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordTextField>;

export const Default: Story = {
  args: {
    placeholder: 'Password',
  },
  render: (args) => <PasswordTextField {...args} />,
};

export const Error: Story = {
  args: {
    placeholder: 'Password',
    error: true,
    errorMessage: 'Password length at least 8 characters',
  },
  render: (args) => <PasswordTextField {...args} />,
};

export const CustomStyle: Story = {
  args: {
    placeholder: 'Password',
    error: true,
    errorMessage: 'Password length at least 8 characters',
    sx: {
      backgroundColor: 'black',
    },
    rootProps: {
      sx: {
        border: `1px solid ${colors.blue['300']}`,
      },
    },
    inputProps: {
      sx: {
        color: 'pink',
        '&::placeholder': {
          color: 'pink',
        },
      },
    },
  },
  render: (args) => <PasswordTextField {...args} />,
};
