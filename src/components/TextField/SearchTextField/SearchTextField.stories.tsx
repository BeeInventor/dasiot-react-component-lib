import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import SearchTextField from './SearchTextField';

const meta: Meta<typeof SearchTextField> = {
  title: 'Components/TextField/SearchTextField',
  component: SearchTextField,
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export default meta;

type Story = StoryObj<typeof SearchTextField>;

export const Default: Story = {
  args: {
    inputProps: {
      placeholder: 'Distributor',
    },
  },
  render: (args) => <SearchTextField {...args} />,
};

export const FullWidth: Story = {
  args: {
    inputProps: {
      placeholder: 'Distributor',
      width: '100%',
    },
  },
  render: (args) => <SearchTextField {...args} />,
};
