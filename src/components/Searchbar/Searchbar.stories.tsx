import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, colors } from '@mui/material';
import Searchbar from './Searchbar';
import { SearchbarProps } from './Searchbar.types';
import historySVG from '../../assets/image/svg/btn_ic_history.svg';
import avatarSVG from '../../assets/image/svg/btn_ic_avatar.svg';

export default {
  title: 'Components/Searchbar',
  component: Searchbar,
  argTypes: {
    onChange: { action: 'search-input-onchange' },
    LanguageButtonProps: {
      description: 'LanguageButton props',
    },
    onSelect: {
      description: 'Trigger when select a language',
      action: 'trigger onSelect',
    },
  },
} as Meta;

const Template: Story<SearchbarProps> = (args) => <Searchbar {...args} />;

export const Default: Story<SearchbarProps> = Template.bind({});

Default.args = {
  LanguageButtonProps: {
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
};

export const AddIcon: Story<SearchbarProps> = Template.bind({});

AddIcon.args = {
  ...Default.args,
  operationNode: (
    <>
      <Box
        sx={{
          display: 'flex',
          width: 74,
          height: 74,
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0, .08)',
          },
        }}
      >
        <img src={historySVG} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: 74,
          height: 74,
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0, .08)',
          },
        }}
      >
        <img src={avatarSVG} />
      </Box>
    </>
  ),
};

export const CustomStyle: Story<SearchbarProps> = (args) => {
  return <Searchbar {...args} />;
};

CustomStyle.args = {
  ...AddIcon.args,
  sx: {
    border: `1px solid ${colors.blue['300']}`,
  },
  inputContainerProps: {
    sx: {
      backgroundColor: colors.red['100'],
    },
  },
};
