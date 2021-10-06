import React from 'react';
import { Meta, Story } from '@storybook/react';
import DatePicker from '.';
import { DatePickerProps } from './DatePicker.types';
import localZhTw from 'date-fns/locale/zh-TW';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {},
} as Meta;

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;

export const Default: Story<DatePickerProps> = Template.bind({});

Default.args = {
  startDate: new Date('2021-09-15T00:00:00+08:00'),
  // endDate: new Date('2021-09-26T23:59:59+08:00'),
  // endDate: new Date('2021-10-08T23:59:59+08:00'),
  endDate: new Date('2021-10-10T23:59:59+08:00'),
};

export const zhTW: Story<DatePickerProps> = Template.bind({});

zhTW.args = {
  ...Default.args,
  locale: localZhTw,
};
