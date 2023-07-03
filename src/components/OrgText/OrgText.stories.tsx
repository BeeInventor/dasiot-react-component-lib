import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import OrgText from './OrgText';

const meta: Meta<typeof OrgText> = {
  title: 'Components/OrgText',
  component: OrgText,
  argTypes: {},
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export default meta;

type Story = StoryObj<typeof OrgText>;

export const Default: Story = {
  args: {
    orgName: 'BeeInventor',
  },
  render: (args) => <OrgText {...args} />,
};

export const SpecificColor: Story = {
  args: {
    orgName: 'BeeInventor',
    orgColor: '#58B99E',
  },
  render: (args) => <OrgText {...args} />,
};
