import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LanguageButton from './LanguageButton';
import { colors } from '@mui/material';

const meta: Meta<typeof LanguageButton> = {
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
};

export default meta;

type Story = StoryObj<typeof LanguageButton>;

export const Default: Story = {
  args: {
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
  },
  render: (args) => <LanguageButton {...args} />,
};

export const InitialEnglish: Story = {
  args: {
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
    language: {
      code: 'en-US',
      name: 'English',
      fullName: 'English(US)',
    },
  },
  render: (args) => <LanguageButton {...args} />,
};

export const CustomStyles: Story = {
  args: {
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
  },
  render: (args) => <LanguageButton {...args} />,
};
