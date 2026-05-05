import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TooltipIcon from './TooltipIcon';

const meta: Meta<typeof TooltipIcon> = {
  title: 'Components/TooltipIcon',
  component: TooltipIcon,
};

export default meta;

type Story = StoryObj<typeof TooltipIcon>;
export const Default: Story = {
  render: () => (
    <TooltipIcon
      title="TLorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia ipsam nobis modi nihil iusto ea nam voluptates error velit aliquid ex dolorum rerum reiciendis quaerat omnis, sint doloribus. Illo."
      text="Tooltip text"
    />
  ),
};
