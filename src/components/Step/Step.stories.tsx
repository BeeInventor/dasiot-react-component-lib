import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StepProps } from './Step.types';
import Step from '.';
import adminSvg from '../../assets/image/svg/btn_ic_admin.svg';
import finishedSvg from '../../assets/image/svg/btn_ic_finished.svg';
import projectSvg from '../../assets/image/svg/btn_ic_project.svg';

export default {
  title: 'Components/Step',
  component: Step,
  argTypes: {
    current: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta;

const Template: Story<StepProps> = (args) => <Step {...args} />;

export const Default: Story<StepProps> = Template.bind({});

Default.args = {
  list: [
    {
      id: 'project',
      src: projectSvg,
    },
    {
      id: 'admin',
      src: adminSvg,
    },
    {
      id: 'finished',
      src: finishedSvg,
    },
  ],
  current: 0,
};

export const CustomStyle: Story<StepProps> = Template.bind({});

CustomStyle.args = {
  ...Default.args,
  sx: {
    '& .Step-box': {
      width: 50,
      height: 50,
      '& img': {
        width: 50,
        height: 50,
      },
    },
    '& .Step-bar': {
      width: 50,
      height: 5,
    },
  },
};
