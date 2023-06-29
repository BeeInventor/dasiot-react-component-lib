import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import DropdownCheckbox from './DropdownCheckbox';
import {
  DropdownCheckboxItem,
  DropdownCheckboxProps,
} from './DropdownColor.type';

const list: DropdownCheckboxItem[] = [
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
];

export default {
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
    listClassName: {
      control: 'text',
    },
    itemClassName: {
      control: 'text',
    },
    selectedId: {
      control: 'text',
    },
    mode: {
      control: 'radio',
      options: ['dark', 'light'],
    },
  },
} as Meta;

export const Default: Story<DropdownCheckboxProps> = (args) => {
  const [selectedIds, setSelectedIds] = useState<string[]>();

  return (
    <div>
      <DropdownCheckbox
        {...args}
        selectedIds={selectedIds}
        onSelect={(values) => setSelectedIds(values as string[])}
      />
    </div>
  );
};

Default.args = {
  mode: 'dark',
  list,
  placeholder: 'Please Select Item',
};
