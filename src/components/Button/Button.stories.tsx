import React from 'react';
import { Meta, Story } from '@storybook/react';
import { styled } from '@mui/material';

import Button from '.';
import { ButtonProps } from './Button';

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

export default {
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
} as Meta;

const Template: Story<ButtonProps> = (args) => (
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

export const Default: Story<ButtonProps> = Template.bind({});

Default.args = {
  fullWidth: false,
  disabled: false,
};

export const DefaultLight: Story<ButtonProps> = Template.bind({});

DefaultLight.parameters = {
  backgrounds: {
    default: 'light',
  },
};

DefaultLight.args = {
  ...Default.args,
  mode: 'light',
};
