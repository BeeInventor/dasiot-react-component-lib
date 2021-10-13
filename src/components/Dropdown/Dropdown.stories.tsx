// import React from 'react';
// import { Meta, Story } from '@storybook/react';
// import makeStyles from '@material-ui/core/styles/makeStyles';
// import Dropdown from './Dropdown';
// import { DropDownItem, DropDownProps } from './Dropdown.type';
// import { Theme } from '@material-ui/core';

// const useStyles = makeStyles(
//   (theme: Theme) => {
//     return {
//       dialogDropdownExample: {
//         background: theme.color.box_bbg,
//         boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
//       },
//     };
//   },
//   {
//     name: 'Dropdown',
//   },
// );

// const list: DropDownItem[] = [
//   {
//     id: 'A001',
//     name: 'Distributor',
//     value: 'Distributor',
//   },
//   {
//     id: 'A002',
//     name: 'Distributor A',
//     value: 'Distributor-A',
//   },
//   {
//     id: 'A003',
//     name: 'Distributor B',
//     value: 'Distributor-B',
//   },
//   {
//     id: 'A004',
//     name: 'Distributor C',
//     value: 'Distributor-C',
//   },
// ];

// export default {
//   title: 'Components/Dropdown',
//   component: Dropdown,
//   argTypes: {
//     onSelect: { action: 'onSelected' },
//     disabled: {
//       control: 'boolean',
//     },
//   },
// } as Meta;

// const Template: Story<DropDownProps> = (args) => <Dropdown {...args} />;

// export const Default: Story<DropDownProps> = Template.bind({});

// Default.args = {
//   placeholder: 'Select',
//   list,
// };

// export const Selected: Story<DropDownProps> = Template.bind({});

// Selected.args = {
//   ...Default.args,
//   selectedId: 'A004',
// };

// export const DialogStyle: Story<DropDownProps> = (args) => {
//   const classes = useStyles();
//   return <Dropdown className={classes.dialogDropdownExample} {...args} />;
// };

// DialogStyle.args = {
//   ...Default.args,
// };
