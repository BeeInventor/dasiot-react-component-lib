import React from 'react';
import { styled } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

import theme from '../../../theme';

import StatusDropdown, { StatusDropdownProps } from './StatusDropdown';

const meta: Meta<typeof StatusDropdown> = {
  title: 'Components/Dropdown/StatusDropdown',
  component: StatusDropdown,
  argTypes: {
    onSelect: { action: 'onSelected' },
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export default meta;

type Story = StoryObj<typeof StatusDropdown>;

const Block = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > div {
    display: flex;
    gap: 8px;
  }
`;

const statusMap: StatusDropdownProps['statusMap'] = {
  open: {
    color: '#fff',
    bgColor: theme.color.green.$100,
    displayName: 'open',
  },
  inProgress: {
    color: '#fff',
    bgColor: theme.color.primary.$80,
    displayName: 'in progress',
  },
  completed: {
    color: '#fff',
    bgColor: theme.color.secondary.$100,
    displayName: 'completed',
  },
  suspend: {
    color: '#fff',
    bgColor: theme.color.secondary.$60,
    displayName: 'suspend',
  },
};

export const Default: Story = {
  args: {
    statusMap,
  },
  render: (args) => (
    <Block>
      <div>
        <StatusDropdown {...args} defaultStatus="open" />
        <StatusDropdown {...args} defaultStatus="open" disabled />
      </div>
      <div>
        <StatusDropdown {...args} defaultStatus="inProgress" />
        <StatusDropdown {...args} defaultStatus="inProgress" disabled />
      </div>
      <div>
        <StatusDropdown {...args} defaultStatus="completed" />
        <StatusDropdown {...args} defaultStatus="completed" disabled />
      </div>
      <div>
        <StatusDropdown {...args} defaultStatus="suspend" />
        <StatusDropdown {...args} defaultStatus="suspend" disabled />
      </div>
    </Block>
  ),
};
