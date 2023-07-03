import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CheckboxLight from './CheckboxLight';

const meta: Meta<typeof CheckboxLight> = {
  title: 'Components/Checkbox/CheckboxLight',
  component: CheckboxLight,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxLight>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: null,
    },
  },
  args: {
    disabled: false,
  },
  render: (args) => {
    const [checked1, setChecked1] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
      <div>
        <div>
          <CheckboxLight
            {...args}
            checked={checked1}
            onChange={(c) => setChecked1(c)}
          />
        </div>
        <div>
          <CheckboxLight
            {...args}
            checked={checked}
            label="This is checkbox light"
            onChange={(c) => setChecked(c)}
          />
        </div>
        <div>
          <CheckboxLight label="This is checkbox light with checked" checked />
        </div>
        <div>
          <CheckboxLight label="This is disabled checkbox light" disabled />
        </div>
      </div>
    );
  },
};
