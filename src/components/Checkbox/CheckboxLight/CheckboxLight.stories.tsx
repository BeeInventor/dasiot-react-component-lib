import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import CheckboxLight, { CheckboxLightProps } from './CheckboxLight';

export default {
  title: 'Components/Checkbox/CheckboxLight',
  component: CheckboxLight,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<CheckboxLightProps> = (args) => {
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
};

export const Default: Story<CheckboxLightProps> = Template.bind({});

Default.parameters = {
  backgrounds: {
    default: null,
  },
};
Default.args = {
  disabled: false,
};
