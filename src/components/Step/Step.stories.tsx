import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Step from '.';
import adminSvg from '../../assets/image/svg/btn_ic_admin.svg';
import finishedSvg from '../../assets/image/svg/btn_ic_finished.svg';
import projectSvg from '../../assets/image/svg/btn_ic_project.svg';

const meta: Meta<typeof Step> = {
  title: 'Components/Step',
  component: Step,
  argTypes: {
    current: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Step>;

export const Default: Story = {
  args: {
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
  },
  render: (args) => <Step {...args} />,
};

export const CustomStyle: Story = {
  args: {
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
  },
  render: (args) => <Step {...args} />,
};
