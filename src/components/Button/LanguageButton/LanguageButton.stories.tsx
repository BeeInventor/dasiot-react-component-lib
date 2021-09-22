import React from 'react';
import { Meta, Story } from '@storybook/react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LanguageButton from './LanguageButton';
import { LanguageButtonProps } from './LanguageButton.types';

const useStyles = makeStyles(
  () => ({
    borderRed: {
      border: '1px solid red',
    },
    borderGreen: {
      border: '1px solid green',
    },
    borderBlue: {
      border: '1px solid blue',
    },
  }),
  { name: 'LanguageButtonStorybook' },
);

export default {
  title: 'Components/Button/LanguageButton',
  component: LanguageButton,
  argTypes: {
    onSelect: { action: 'onSelect' },
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

export const AdjustStyles: Story<LanguageButtonProps> = (args) => {
  const classes = useStyles();
  return (
    <LanguageButton
      {...args}
      className={classes.borderRed}
      menuClassName={classes.borderGreen}
      itemClassName={classes.borderBlue}
    />
  );
};

AdjustStyles.args = {
  ...Default.args,
};
