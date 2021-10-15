import React from 'react';
import { Meta, Story } from '@storybook/react';
// import makeStyles from '@mui/material/styles/makeStyles';
import LanguageButton from './LanguageButton';
import { LanguageButtonProps } from './LanguageButton.types';
import { colors } from '@mui/material';

// const useStyles = makeStyles(
//   () => ({
//     borderRed: {
//       border: '1px solid red',
//     },
//     borderGreen: {
//       border: '1px solid green',
//     },
//     borderBlue: {
//       border: '1px solid blue',
//     },
//   }),
//   { name: 'LanguageButtonStorybook' },
// );

export default {
  title: 'Components/Button/LanguageButton',
  component: LanguageButton,
  argTypes: {
    list: {
      description: 'Language list',
      type: {
        require: true,
      },
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
    },
    onSelect: {
      action: 'onSelect',
      description: 'Trigger when select a language',
      table: {
        defaultValue: {
          summary: '(lang: LanguageData) => void',
        },
      },
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
