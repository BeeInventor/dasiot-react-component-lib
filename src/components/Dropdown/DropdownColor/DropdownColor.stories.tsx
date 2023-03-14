import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import DropdownColor from './DropdownColor';
import { DropDownColorItem, DropDownColorProps } from './DropdownColor.type';

const list: DropDownColorItem[] = [
  {
    id: 'path-a',
    value: 'path-a',
    name: 'Path A',
    color: '#58B99E',
  },
  {
    id: 'path-b',
    value: 'path-b',
    name: 'Path B',
    color: '#FF6B00',
  },
  {
    id: 'path-c',
    value: 'path-c',
    name: 'Path C',
    color: '#EF8C34',
  },
  {
    id: 'path-d',
    value: 'path-d',
    name: 'Path D',
    color: '#5296D5',
  },
  {
    id: 'path-e',
    value: 'path-e',
    name: 'Path E',
    color: '#B152C6',
  },
];

export default {
  title: 'Components/DropdownColor',
  component: DropdownColor,
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

export const DropdownColorDefault: Story<DropDownColorProps> = (args) => {
  const [selectedId, setSelectedId] = useState<string | undefined>('path-a');

  return (
    <div>
      <DropdownColor
        {...args}
        selectedId={selectedId}
        onSelect={(value) => setSelectedId(value as string)}
      />
    </div>
  );
};

DropdownColorDefault.args = {
  mode: 'dark',
  list,
  placeholder: 'Please Select Item',
};
