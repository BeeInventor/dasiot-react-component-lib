import React from 'react';
import { Meta, Story } from '@storybook/react';
import PasswordTextField from '.';
import { PasswordTextFieldProps } from './PasswordTextField.types';
import { colors } from '@mui/material';

export default {
  title: 'Components/TextField/PasswordTextField',
  component: PasswordTextField,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as Meta;

const Template: Story<PasswordTextFieldProps> = (args) => (
  <PasswordTextField {...args} />
);

export const Default: Story<PasswordTextFieldProps> = Template.bind({});

Default.args = {
  placeholder: 'Password',
};

export const Error: Story<PasswordTextFieldProps> = Template.bind({});

Error.args = {
  ...Default.args,
  error: true,
  errorMessage: 'Password length at least 8 characters',
};

export const CustomStyle: Story<PasswordTextFieldProps> = Template.bind({});

CustomStyle.args = {
  ...Default.args,
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
};
