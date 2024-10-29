import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { styled } from '@mui/material';

import DialogButton from './DialogButton';
import { DialogButtonProps } from './DialogButton.types';

const Title = styled('h2')`
  color: white;
  text-shadow: 0 0 2px black;
`;

const Block = styled('div')`
  margin-bottom: 8px;
  & > button {
    margin: 0 8px;
  }
`;

const meta: Meta<typeof DialogButton> = {
  title: 'Components/Button/DialogButton',
  component: DialogButton,
  argTypes: {
    mode: {
      control: {
        type: 'radio',
        options: ['dark', 'light'],
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    previousIcon: {
      control: {
        type: 'boolean',
      },
    },
    nextIcon: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DialogButton>;

const renderFn = (args: DialogButtonProps) => {
  return (
    <>
      <Title>variant="text"</Title>
      <Block>
        <DialogButton color="primary" variant="text" {...args}>
          Primary
        </DialogButton>
        <DialogButton color="secondary" variant="text" {...args}>
          Secondary
        </DialogButton>
        <DialogButton color="success" variant="text" {...args}>
          Success
        </DialogButton>
        <DialogButton color="warning" variant="text" {...args}>
          Warning
        </DialogButton>
        <DialogButton color="info" variant="text" {...args}>
          info
        </DialogButton>
        <DialogButton color="error" variant="text" {...args}>
          Error
        </DialogButton>
      </Block>
      <Title>variant="contained"</Title>
      <Block>
        <DialogButton color="primary" variant="contained" {...args}>
          Primary
        </DialogButton>
        <DialogButton color="secondary" variant="contained" {...args}>
          Secondary
        </DialogButton>
        <DialogButton color="success" variant="contained" {...args}>
          Success
        </DialogButton>
        <DialogButton color="warning" variant="contained" {...args}>
          Warning
        </DialogButton>
        <DialogButton color="info" variant="contained" {...args}>
          info
        </DialogButton>
        <DialogButton color="error" variant="contained" {...args}>
          Error
        </DialogButton>
      </Block>
      <Title>variant="outlined"</Title>
      <Block>
        <DialogButton color="primary" variant="outlined" {...args}>
          Primary
        </DialogButton>
        <DialogButton color="secondary" variant="outlined" {...args}>
          Secondary
        </DialogButton>
        <DialogButton color="success" variant="outlined" {...args}>
          Success
        </DialogButton>
        <DialogButton color="warning" variant="outlined" {...args}>
          Warning
        </DialogButton>
        <DialogButton color="info" variant="outlined" {...args}>
          info
        </DialogButton>
        <DialogButton color="error" variant="outlined" {...args}>
          Error
        </DialogButton>
      </Block>
    </>
  );
};

export const Default: Story = {
  args: {
    mode: 'dark',
    fullWidth: false,
    disabled: false,
    previousIcon: false,
    nextIcon: false,
  },
  render: renderFn,
};

export const DefaultLight: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    mode: 'light',
    fullWidth: false,
    disabled: false,
    previousIcon: false,
    nextIcon: false,
  },
  render: renderFn,
};

export const WithIcon: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    mode: 'light',
    fullWidth: false,
    disabled: false,
    previousIcon: true,
    nextIcon: false,
  },
  render: renderFn,
};
