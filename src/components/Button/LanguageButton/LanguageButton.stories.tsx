import React from 'react';
import { Meta, Story } from '@storybook/react';
import LanguageButton from './LanguageButton';
import { LanguageButtonProps } from './LanguageButton.types';
import { colors } from '@mui/material';

export default {
  title: 'Components/Button/LanguageButton',
  component: LanguageButton,
  argTypes: {
    list: {
      description: 'Language list',
    },
    onSelect: {
      action: 'onSelect',
      description: 'Trigger when select a language',
    },
  },
} as Meta;

const Template: Story<LanguageButtonProps> = (args) => (
  <LanguageButton {...args} />
);

export const Default: Story<LanguageButtonProps> = Template.bind({});

Default.args = {
  list: [
    {
      code: 'zh-TW',
      name: '繁中',
      fullName: '繁體中文',
    },
    {
      code: 'en-US',
      name: 'English',
      fullName: 'English(US)',
    },
  ],
};

export const InitialEnglish: Story<LanguageButtonProps> = Template.bind({});

InitialEnglish.args = {
  ...Default.args,
  language: {
    code: 'en-US',
    name: 'English',
    fullName: 'English(US)',
  },
};

export const CustomStyles: Story<LanguageButtonProps> = (args) => {
  return <LanguageButton {...args} />;
};

CustomStyles.args = {
  ...Default.args,
  sx: {
    color: 'white',
    backgroundColor: colors.blue['500'],
  },
  menuProps: {
    sx: {
      backgroundColor: colors.blue['500'],
    },
  },
  itemProps: {
    sx: {
      color: 'white',
    },
  },
};
