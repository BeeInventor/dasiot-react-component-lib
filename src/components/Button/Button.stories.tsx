import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { styled } from '@mui/material';

import Button from '.';
import { ButtonProps } from './Button';

// eslint-disable-next-line storybook/story-exports
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

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Button',
  component: Button,
  argTypes: {
    fullWidth: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const renderFn = (args: ButtonProps) => {
  return (
    <>
      <Block>
        <Title>variant="text"</Title>
        <Button variant="text" color="primary" {...args}>
          Primary
        </Button>
        <Button variant="text" color="secondary" {...args}>
          Secondary
        </Button>
        <Button variant="text" color="success" {...args}>
          Success
        </Button>
        <Button variant="text" color="warning" {...args}>
          Warning
        </Button>
        <Button variant="text" color="info" {...args}>
          Info
        </Button>
        <Button variant="text" color="error" {...args}>
          Error
        </Button>
      </Block>
      <Block>
        <Title>variant="contained"</Title>
        <Button variant="contained" color="primary" {...args}>
          Primary
        </Button>
        <Button variant="contained" color="secondary" {...args}>
          Secondary
        </Button>
        <Button variant="contained" color="success" {...args}>
          Success
        </Button>
        <Button variant="contained" color="warning" {...args}>
          Warning
        </Button>
        <Button variant="contained" color="info" {...args}>
          Info
        </Button>
        <Button variant="contained" color="error" {...args}>
          Error
        </Button>
      </Block>
      <Block>
        <Title>variant="outlined"</Title>
        <Button variant="outlined" color="primary" {...args}>
          Primary
        </Button>
        <Button variant="outlined" color="secondary" {...args}>
          Secondary
        </Button>
        <Button variant="outlined" color="success" {...args}>
          Success
        </Button>
        <Button variant="outlined" color="warning" {...args}>
          Warning
        </Button>
        <Button variant="outlined" color="info" {...args}>
          Info
        </Button>
        <Button variant="outlined" color="error" {...args}>
          Error
        </Button>
      </Block>
    </>
  );
};

export const Default: Story = {
  args: {
    fullWidth: false,
    disabled: false,
  },
  render: renderFn,
};

export const Light: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    fullWidth: false,
    disabled: false,
    mode: 'light',
  },
  render: renderFn,
};
