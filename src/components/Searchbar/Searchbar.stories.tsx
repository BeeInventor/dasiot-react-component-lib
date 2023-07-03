import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, colors } from '@mui/material';
import Searchbar from './Searchbar';
import historySVG from '../../assets/image/svg/btn_ic_history.svg';
import avatarSVG from '../../assets/image/svg/btn_ic_avatar.svg';

const meta: Meta<typeof Searchbar> = {
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
};

export default meta;

type Story = StoryObj<typeof Searchbar>;

export const Default: Story = {
  args: {
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
  },
  render: (args) => <Searchbar {...args} />,
};

export const AddIcon: Story = {
  args: {
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
  },
  render: (args) => <Searchbar {...args} />,
};

export const CustomStyle: Story = {
  args: {
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
    sx: {
      border: `1px solid ${colors.blue['300']}`,
    },
    inputContainerProps: {
      sx: {
        backgroundColor: colors.red['100'],
      },
    },
  },
  render: (args) => <Searchbar {...args} />,
};
