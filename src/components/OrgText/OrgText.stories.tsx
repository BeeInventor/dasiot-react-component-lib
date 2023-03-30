import React from 'react';
import { Meta, Story } from '@storybook/react';

import OrgText, { OrgTextProps } from './OrgText';

export default {
  title: 'Components/OrgText',
  component: OrgText,
  argTypes: {},
  parameters: {
    backgrounds: { default: 'light' },
  },
} as Meta;

const Template: Story<OrgTextProps> = (args) => <OrgText {...args} />;

export const Default: Story<OrgTextProps> = Template.bind({});

Default.args = {
  orgName: 'BeeInventor',
};

export const SpecificColor: Story<OrgTextProps> = Template.bind({});

SpecificColor.args = {
  ...Default.args,
  orgColor: '#58B99E',
};
