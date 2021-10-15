import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PhoneTextField from '.';
import { PhoneTextFieldProps } from './PhoneTextField.types';
import TaiwanSvg from '../../../assets/image/svg/flag_Taiwan.svg';
import { colors } from '@mui/material';
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

export default {
  title: 'Components/TextField/PhoneTextField',
  component: PhoneTextField,
  argTypes: {
    value: {
      description: 'PhoneTextField value',
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    placeholder: {
      description: 'Placeholder',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    onChange: {
      action: 'onChange',
      description: 'Trigger when select a country code',
      type: {
        require: true,
      },
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    countryCodeList: {
      description: 'Country Code List (required)',
      type: {
        require: true,
      },
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
    },
  },
} as Meta;

const Template: Story<PhoneTextFieldProps> = (args) => (
  <PhoneTextField {...args} />
);

export const Default: Story<PhoneTextFieldProps> = Template.bind({});

Default.args = {
  value: '',
  placeholder: 'Phone Number',
  countryCodeList,
};

export const Error: Story<PhoneTextFieldProps> = Template.bind({});

Error.args = {
  ...Default.args,
  error: true,
  errorMessage: 'Invalid Phone',
};

export const HasValue: Story<PhoneTextFieldProps> = Template.bind({});

HasValue.args = {
  ...Default.args,
  countryCode: '1',
  value: '0990000001',
};

export const WithDialog: Story<PhoneTextFieldProps> = (args) => {
  return (
    <Dialog open>
      <DialogContent sx={{ height: 300 }}>
        <PhoneTextField {...args} />
      </DialogContent>
    </Dialog>
  );
};

WithDialog.args = {
  ...Default.args,
  popperProps: {
    disablePortal: true,
  },
};

export const CustomStyle: Story<PhoneTextFieldProps> = (args) => (
  <PhoneTextField {...args} />
);

CustomStyle.args = {
  ...Default.args,
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
};
