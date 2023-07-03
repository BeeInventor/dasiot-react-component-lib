import React, { useState } from 'react';
import { colors } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PhoneTextField from '.';
import Button from '../../Button';
import TaiwanSvg from '../../../assets/image/svg/flag_Taiwan.svg';
const countryCodeList = [
  {
    src: TaiwanSvg,
    code: '886',
    name: 'Taiwan',
  },
  {
    src: TaiwanSvg,
    code: '852',
    name: 'Hong Kong',
  },
  {
    src: TaiwanSvg,
    code: '44',
    name: 'United kingdom',
  },
  {
    src: TaiwanSvg,
    code: '1',
    name: 'United States of America',
  },
  {
    src: TaiwanSvg,
    code: '1',
    name: 'Canada',
  },
  {
    src: TaiwanSvg,
    code: '61',
    name: 'Australia',
  },
  {
    src: TaiwanSvg,
    code: '81',
    name: 'Japan',
  },
  {
    src: TaiwanSvg,
    code: '65',
    name: 'Sigapore',
  },
  {
    src: TaiwanSvg,
    code: '60',
    name: 'Malaysia',
  },
  {
    src: TaiwanSvg,
    code: '66',
    name: 'Thailand',
  },
];

const meta: Meta<typeof PhoneTextField> = {
  title: 'Components/TextField/PhoneTextField',
  component: PhoneTextField,
  argTypes: {
    value: {
      description: 'PhoneTextField value',
    },
    placeholder: {
      description: 'Placeholder',
    },
    onChange: {
      action: 'onChange',
      description: 'Trigger when select a country code',
    },
    countryCodeList: {
      description: 'Country Code List (required)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PhoneTextField>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList,
  },
  render: (args) => <PhoneTextField {...args} />,
};

export const ModeLight: Story = {
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList,
    mode: 'light',
  },
  render: (args) => <PhoneTextField {...args} />,
};

export const Error: Story = {
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList,
    error: true,
    errorMessage: 'Invalid Phone',
  },
  render: (args) => <PhoneTextField {...args} />,
};

export const HasValue: Story = {
  args: {
    value: '0990000001',
    placeholder: 'Phone Number',
    countryCodeList,
    countryCode: '1',
  },
  render: (args) => <PhoneTextField {...args} />,
};

export const WithDialog: Story = {
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList,
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
          <DialogContent sx={{ height: 300 }}>
            <PhoneTextField {...args} />
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const CustomStyle: Story = {
  args: {
    value: '0990000001',
    sx: {
      backgroundColor: 'black',
    },
    rootProps: {
      sx: {
        border: `1px solid ${colors.blue['300']}`,
      },
    },
    inputProps: {
      sx: {
        color: 'pink',
        '&::placeholder': {
          color: 'pink',
        },
      },
    },
  },
  render: (args) => <PhoneTextField {...args} />,
};
