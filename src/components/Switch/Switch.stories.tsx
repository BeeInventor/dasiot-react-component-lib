import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {
    checked: false,
  },
  render: (args) => <Switch checked={args.checked} />,
};
