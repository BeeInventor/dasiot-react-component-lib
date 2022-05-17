import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Dialog, DialogContent } from '@mui/material';
import { DropDownItem, DropDownProps } from './Dropdown.type';
import Dropdown from './Dropdown';
import Button from '../Button';

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
      defaultValue: false,
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
      defaultValue: 'light',
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

export const Selection: Story<DropDownProps> = Template.bind({});

Selection.args = {
  ...Default.args,
  selectedId: 'A004',
  selectionId: 'A003',
};

export const WithDialog: Story<DropDownProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogContent sx={{ height: 300, backgroundColor: '#eee' }}>
          <Dropdown {...args} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

WithDialog.args = {
  ...Default.args,
  popperProps: {
    disablePortal: true,
  },
};

export const DarkMode: Story<DropDownProps> = Template.bind({});

DarkMode.args = {
  mode: 'dark',
  list,
  selectedId: 'A001',
};

DarkMode.parameters = {
  backgrounds: {
    default: 'secondary80',
  },
};
