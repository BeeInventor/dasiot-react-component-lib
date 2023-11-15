import { Dialog, DialogContent } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Button from '../Button';
import Dropdown from './Dropdown';
import { DropDownItem } from './Dropdown.type';
import DropdownV2 from './DropdownV2';

const list: DropDownItem[] = [
  {
    id: 'A001',
    value: 'A001',
    name: 'Distributor',
  },
  {
    id: 'A002',
    value: 'A002',
    name: 'Distributor A',
  },
  {
    id: 'A003',
    value: 'A003',
    name: 'Distributor B',
  },
  {
    id: 'A004',
    value: 'A004',
    name: 'Distributor C',
  },
  {
    id: 'A004',
    value: 'A004',
    name: 'Very long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long',
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
