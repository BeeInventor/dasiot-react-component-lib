import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropDownItem, DropDownProps } from './Dropdown.type';

const list: DropDownItem[] = [
  {
    id: 'A001',
    name: 'Distributor',
    value: 'Distributor',
  },
  {
    id: 'A002',
    name: 'Distributor A',
    value: 'Distributor-A',
  },
  {
    id: 'A003',
    name: 'Distributor B',
    value: 'Distributor-B',
  },
  {
    id: 'A004',
    name: 'Distributor C',
    value: 'Distributor-C',
  },
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    onSelect: { action: 'onSelected' },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<DropDownProps> = (args) => <Dropdown {...args} />;

export const Default: Story<DropDownProps> = Template.bind({});

Default.args = {
  placeholder: 'Select',
  list,
};

export const Selected: Story<DropDownProps> = Template.bind({});

Selected.args = {
  ...Default.args,
  selectedId: 'A004',
};
