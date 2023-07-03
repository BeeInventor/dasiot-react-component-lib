import React, { useState } from 'react';
import localZhTw from 'date-fns/locale/zh-TW';
import { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogContent, styled } from '@mui/material';

import DatePicker from './DatePicker';
import Button from '../Button';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    type: {
      options: ['date', 'range'],
      control: {
        type: 'select',
        labels: {
          date: 'date',
          range: 'range',
        },
      },
    },
    onSelect: { action: 'onSelect' },
    limitFrom: {
      description: 'limit selectable start date (no contain limitFrom)',
      control: {
        type: 'date',
      },
    },
    limitTo: {
      description: 'limit selectable end date (no contain limitTo)',
      control: {
        type: 'date',
      },
    },
    disabled: {
      description: 'Disable DatePicker',
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    placeholder: 'Time',
    disabled: false,
  },
  render: (args) => {
    return <DatePicker {...args} />;
  },
};

export const DefaultDark: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    placeholder: 'Time',
    mode: 'dark',
    disabled: false,
  },
  render: (args) => {
    return <DatePicker {...args} />;
  },
};

export const ZhTW: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    placeholder: 'Time',
    mode: 'dark',
    disabled: false,
    locale: localZhTw,
  },
  render: (args) => {
    return <DatePicker {...args} />;
  },
};

export const RangeDefault: Story = {
  args: {
    type: 'range',
    placeholder: 'Time',
  },
  render: (args) => {
    return <DatePicker {...args} />;
  },
};

export const Range: Story = {
  args: {
    type: 'range',
    placeholder: 'Time',
    startDate: new Date('2021-09-15T00:00:00+08:00'),
    endDate: new Date('2021-10-10T23:59:59+08:00'),
  },
  render: (args) => {
    return <DatePicker {...args} />;
  },
};

export const RangeWithLimit: Story = {
  args: {
    type: 'range',
    placeholder: 'Time',
    startDate: new Date('2021-09-15T00:00:00+08:00'),
    endDate: new Date('2021-10-10T23:59:59+08:00'),
  },
  render: (args) => {
    return <DatePicker {...args} />;
  },
};

export const WithDialog: Story = {
  args: {
    type: 'range',
    placeholder: 'Time',
    startDate: new Date('2021-09-15T00:00:00+08:00'),
    endDate: new Date('2021-10-10T23:59:59+08:00'),
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
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#eee',
            },
          }}
        >
          <DialogContent
            sx={{
              minWidth: 400,
              minHeight: 300,
            }}
          >
            <DatePicker {...args} />
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const ExternalReset: Story = {
  args: {
    type: 'range',
    placeholder: 'Time',
    startDate: new Date('2021-09-15T00:00:00+08:00'),
    endDate: new Date('2021-10-10T23:59:59+08:00'),
    popperProps: {
      disablePortal: true,
    },
  },
  render: (args) => {
    const [date, setDate] = useState<Date>();
    return (
      <div>
        <DatePicker
          {...args}
          startDate={date}
          onSelect={(date) => {
            setDate(date as Date);
          }}
        />
        <Button
          variant="contained"
          sx={{ ml: '8px' }}
          onClick={() => setDate(undefined)}
        >
          Reset
        </Button>
      </div>
    );
  },
};

const StyledDatePicker = styled(DatePicker)(() => ({
  width: '100%',
}));

export const FullWidth: Story = {
  args: {
    type: 'range',
    placeholder: 'Time',
    startDate: new Date('2021-09-15T00:00:00+08:00'),
    endDate: new Date('2021-10-10T23:59:59+08:00'),
    popperProps: {
      disablePortal: true,
    },
  },
  render: (args) => {
    return <StyledDatePicker {...args} />;
  },
};
