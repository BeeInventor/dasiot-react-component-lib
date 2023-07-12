import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import DropdownCheckbox from './DropdownCheckbox';
import { DropdownCheckboxItem } from './DropdownColor.type';

const list: DropdownCheckboxItem[] = [
  {
    id: 'all',
    value: 'all',
    name: 'All',
  },
  {
    id: 'floor-1',
    value: 'floor-1',
    name: 'Floor 1',
  },
  {
    id: 'floor-2',
    value: 'floor-2',
    name: 'Floor 2',
  },
  {
    id: 'floor-3',
    value: 'floor-3',
    name: 'Floor 3',
  },
  {
    id: 'floor-4',
    value: 'floor-4',
    name: 'Floor 4',
  },
  {
    id: 'floor-5',
    value: 'floor-5',
    name: 'Floor 5',
  },
  {
    id: 'floor-6',
    value: 'floor-6',
    name: 'Floor 6',
  },
];

const meta: Meta<typeof DropdownCheckbox> = {
  title: 'Components/Dropdown/DropdownCheckbox',
  component: DropdownCheckbox,
  argTypes: {
    onSelect: { action: 'onSelected' },
    disabled: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
    // listClassName: {
    //   control: 'text',
    // },
    // itemClassName: {
    //   control: 'text',
    // },
    // selectedId: {
    //   control: 'text',
    // },
    mode: {
      control: 'radio',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownCheckbox>;

export const Default: Story = {
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item',
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = useState<string[]>(
      list.map((d) => d.value as string),
    );
  

    return (
      <div>
        <DropdownCheckbox
          {...args}
          selectedIds={selectedIds}
          onSelect={(values) => setSelectedIds(values as string[])}
        />
      </div>
    );
  },
};
