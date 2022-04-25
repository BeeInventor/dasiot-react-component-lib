import React from 'react';
import { Meta, Story } from '@storybook/react';
import DialogButton from './DialogButton';
import { DialogButtonProps } from './DialogButton.types';

export default {
  title: 'Components/Button/DialogButton',
  component: DialogButton,
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
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    previousIcon: {
      control: {
        type: 'boolean',
      },
    },
    nextIcon: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<DialogButtonProps> = (args) => <DialogButton {...args} />;

export const Default: Story<DialogButtonProps> = Template.bind({});

Default.args = {
  color: 'primary',
  variant: 'contained',
  children: 'Back',
  fullWidth: false,
  disabled: false,
  previousIcon: false,
  nextIcon: false,
};

export const DefaultLight: Story<DialogButtonProps> = Template.bind({});

DefaultLight.parameters = {
  backgrounds: {
    default: 'light',
  },
};
DefaultLight.args = {
  ...Default.args,
  mode: 'light',
  color: 'secondary',
  variant: 'outlined',
};

export const Loading: Story<DialogButtonProps> = Template.bind({});

Loading.args = {
  ...Default.args,
  isLoading: true,
};

export const WithIcon: Story<DialogButtonProps> = Template.bind({});

WithIcon.args = {
  ...Default.args,
  previousIcon: true,
  nextIcon: false,
};
