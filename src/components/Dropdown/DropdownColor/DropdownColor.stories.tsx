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

const listOrg: DropDownColorItem[] = [
  {
    id: 'org-a',
    value: 'org-a',
    name: 'Organization A',
    color: '#58B99E',
  },
  {
    id: 'org-b',
    value: 'org-b',
    name: 'Organization B',
    color: '#FF6B00',
  },
  {
    id: 'org-c',
    value: 'org-c',
    name: 'Organization C',
    color: '#EF8C34',
  },
  {
    id: 'org-d',
    value: 'org-d',
    name: 'Organization D',
    color: '#5296D5',
  },
  {
    id: 'org-e',
    value: 'org-e',
    name: 'Organization E',
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

export const DropdownColorPath: Story<DropDownColorProps> = (args) => {
  const [selectedId, setSelectedId] = useState<string | undefined>('path-a');

  return (
    <div>
      <DropdownColor
        {...args}
        selectedId={selectedId}
        onSelect={(value) => setSelectedId(value as string)}
        type="path"
      />
    </div>
  );
};

DropdownColorPath.args = {
  mode: 'dark',
  list,
  placeholder: 'Please Select Item',
};

export const DropdownColorOrg: Story<DropDownColorProps> = (args) => {
  const [selectedId, setSelectedId] = useState<string | undefined>('path-a');

  return (
    <div>
      <DropdownColor
        {...args}
        selectedId={selectedId}
        onSelect={(value) => setSelectedId(value as string)}
        type="org"
      />
    </div>
  );
};

DropdownColorOrg.args = {
  mode: 'dark',
  list: listOrg,
  placeholder: 'Please Select Item',
};
