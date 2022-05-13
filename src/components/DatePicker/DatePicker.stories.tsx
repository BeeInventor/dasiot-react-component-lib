import React, { useState } from 'react';
import localZhTw from 'date-fns/locale/zh-TW';
import { styled } from '@mui/material/styles';
import { Meta, Story } from '@storybook/react';
import { Dialog, DialogContent } from '@mui/material';

import DatePicker from './DatePicker';
import { DatePickerProps } from './DatePicker.types';
import Button from '../Button';

export default {
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
} as Meta;

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;

export const Default: Story<DatePickerProps> = Template.bind({});

Default.args = {
  placeholder: 'Time',
};

export const DefaultDark: Story<DatePickerProps> = Template.bind({});

DefaultDark.parameters = {
  backgrounds: {
    default: 'light',
  },
};
DefaultDark.args = {
  placeholder: 'Time',
  mode: 'dark',
};

export const ZhTW: Story<DatePickerProps> = Template.bind({});

ZhTW.args = {
  ...Default.args,
  locale: localZhTw,
};

export const RangeDefault: Story<DatePickerProps> = Template.bind({});

RangeDefault.args = {
  type: 'range',
  placeholder: 'Time',
};

export const Range: Story<DatePickerProps> = Template.bind({});

Range.args = {
  ...RangeDefault.args,
  startDate: new Date('2021-09-15T00:00:00+08:00'),
  endDate: new Date('2021-10-10T23:59:59+08:00'),
};

export const RangeWithLimit: Story<DatePickerProps> = Template.bind({});

RangeWithLimit.args = {
  type: 'range',
  placeholder: 'Time',
  limitFrom: new Date('2020-12-31T00:00:00+08:00'),
  limitTo: new Date('2022-01-01T00:00:00+08:00'),
};

export const WithDialog: Story<DatePickerProps> = (args) => {
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
};

WithDialog.args = {
  ...RangeWithLimit.args,
  popperProps: {
    disablePortal: true,
  },
};

export const ExternalReset: Story<DatePickerProps> = (args) => {
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
};

ExternalReset.args = {
  ...Default.args,
};

const StyledDatePicker = styled(DatePicker)(() => ({
  width: '100%',
}));

export const FullWidth: Story<DatePickerProps> = (args) => {
  return <StyledDatePicker {...args} />;
};

FullWidth.args = {
  dateFormat: 'yyyy-MM-dd',
  startDate: new Date('2021-09-15T00:00:00+08:00'),
};
