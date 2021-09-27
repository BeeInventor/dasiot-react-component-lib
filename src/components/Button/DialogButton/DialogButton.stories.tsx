import React from 'react';
import { Meta, Story } from '@storybook/react';
import DialogButton from './DialogButton';
import { DialogButtonProps } from './DialogButton.types';

export default {
  title: 'Components/Button/DialogButton',
  component: DialogButton,
  argTypes: {},
} as Meta;

const Template: Story<DialogButtonProps> = (args) => <DialogButton {...args} />;

const Default: Story<DialogButtonProps> = Template.bind({});

Default.args = {
  variant: 'contained',
  fullWidth: false,
  disabled: false,
};

export const Primary: Story<DialogButtonProps> = Template.bind({});

Primary.args = {
  ...Default.args,
  children: 'Back',
  color: 'primary',
};

export const PrimaryWithIcon: Story<DialogButtonProps> = Template.bind({});

PrimaryWithIcon.args = {
  ...Primary.args,
  previousIcon: true,
  nextIcon: false,
};
