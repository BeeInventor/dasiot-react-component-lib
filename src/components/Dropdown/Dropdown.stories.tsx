import { Dialog, DialogContent } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Button from '../Button';
import Dropdown from './Dropdown';
import { DropDownItem } from './Dropdown.type';
import DropdownV2 from './DropdownV2';
import DropdownV3 from './DropdownV3';

const list: DropDownItem[] = [
  { id: 'A001', value: 'A001', name: 'Distributor 1' },
  { id: 'A002', value: 'A002', name: 'Distributor 2' },
  { id: 'A003', value: 'A003', name: 'Distributor 3' },
  { id: 'A004', value: 'A004', name: 'Distributor 4' },
  { id: 'A005', value: 'A005', name: 'Distributor 5' },
  { id: 'A006', value: 'A006', name: 'Distributor 6' },
  { id: 'A007', value: 'A007', name: 'Distributor 7' },
  { id: 'A008', value: 'A008', name: 'Distributor 8' },
  { id: 'A009', value: 'A009', name: 'Distributor 9' },
  { id: 'A010', value: 'A010', name: 'Distributor 10' },
  { id: 'A011', value: 'A011', name: 'Distributor 11' },
  { id: 'A012', value: 'A012', name: 'Distributor 12' },
  { id: 'A013', value: 'A013', name: 'Distributor 13' },
  { id: 'A014', value: 'A014', name: 'Distributor 14' },
  { id: 'A015', value: 'A015', name: 'Distributor 15' },
  { id: 'A016', value: 'A016', name: 'Distributor 16' },
  { id: 'A017', value: 'A017', name: 'Distributor 17' },
  { id: 'A018', value: 'A018', name: 'Distributor 18' },
  { id: 'A019', value: 'A019', name: 'Distributor 19' },
  {
    id: 'A020',
    value: 'A020',
    name: 'Very long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long',
  },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown/Dropdown',
  component: Dropdown,
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
    selectedId: {
      control: 'text',
    },
    mode: {
      control: 'radio',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => <Dropdown list={list} onSelect={() => {}} />,
};

export const FixItemTooLong: Story = {
  render: () => (
    <Dropdown
      list={list}
      onSelect={() => {}}
      popperProps={{
        sx: {
          '& .Dropdown-icon': {
            flexShrink: 0,
          },
          '& .Dropdown-item': {
            '> span': {
              minWidth: 0,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            },
          },
        },
      }}
    />
  ),
};

export const Exceptance: Story = {
  render: () => (
    <Dropdown
      placeholder="Select"
      list={list}
      isExceptance
      onSelect={() => {}}
    />
  ),
};

export const Selected: Story = {
  render: () => (
    <Dropdown
      placeholder="Select"
      list={list}
      selectedId="A004"
      onSelect={() => {}}
    />
  ),
};

export const Selection: Story = {
  render: () => {
    const [selectionIds, setSelectionIds] = useState<string[]>([]);
    const [selectedId, setSelectedId] = useState<string>();

    const onChange = (value: string | number) => {
      const updateValue = [...selectionIds];
      if (selectionIds.includes(value as string)) {
        updateValue.splice(updateValue.indexOf(value as string), 1);
      } else {
        updateValue.push(value as string);
      }
      setSelectionIds(updateValue);
      setSelectedId(value as string);
    };

    return (
      <Dropdown
        placeholder="Select"
        selectedId={selectedId}
        list={list}
        selectionIds={selectionIds}
        onSelect={onChange}
      />
    );
  },
};

export const WithDialog: Story = {
  args: {
    list,
    popperProps: {
      disablePortal: true,
    },
  },
  render: (args) => {
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
  },
};

export const Reset: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item',
  },
  render: (args) => {
    const [selectedId, setSelectedId] = useState<string | undefined>();
    const handleUnselect = () => {
      setSelectedId(undefined);
    };
    return (
      <div>
        <Button
          variant="contained"
          onClick={handleUnselect}
          sx={{ marginBottom: '10px' }}
        >
          Reset All
        </Button>
        <Dropdown
          {...args}
          selectedId={selectedId}
          onSelect={(value) => setSelectedId(value as string)}
        />
      </div>
    );
  },
};

export const DarkMode: Story = {
  args: {
    mode: 'dark',
    list,
    selectedId: 'A001',
  },
  render: (args) => <Dropdown {...args} />,
};

export const Version2: Story = {
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item',
  },
  render: (args) => {
    const [selectedId, setSelectedId] = useState<string | undefined>();

    return (
      <div>
        <DropdownV2
          {...args}
          selectedId={selectedId}
          onSelect={(value) => setSelectedId(value as string)}
        />
      </div>
    );
  },
};

export const Version3: Story = {
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item',
  },
  render: (args) => {
    const [selectedId, setSelectedId] = useState<string | undefined>();

    return (
      <div>
        <DropdownV3
          {...args}
          selectedId={selectedId}
          onSelect={(value) => setSelectedId(value as string)}
        />
      </div>
    );
  },
};
