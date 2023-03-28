import React from 'react';
import { Meta, Story } from '@storybook/react';

import { SearchTextFieldProps } from './SearchTextField.type';
import SearchTextField from './SearchTextField';

export default {
  title: 'Components/TextField/SearchTextField',
  component: SearchTextField,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as Meta;

const Template: Story<SearchTextFieldProps> = (args) => (
  <SearchTextField {...args} />
);

export const Default: Story<SearchTextFieldProps> = Template.bind({});

Default.args = {
  inputProps: {
    placeholder: 'Distributor',
  },
};

export const FullWidth: Story<SearchTextFieldProps> = Template.bind({});

FullWidth.args = {
  ...Default.args,
  width: '100%',
};
