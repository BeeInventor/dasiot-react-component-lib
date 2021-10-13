// import React, { useState } from 'react';
// import { Meta, Story } from '@storybook/react';
// import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
// import makeStyles from '@material-ui/core/styles/makeStyles';
// import PhoneTextField from '.';
// import { PhoneTextFieldProps } from './PhoneTextField.types';
// import TaiwanSvg from '../../../assets/image/svg/flag_Taiwan.svg';
// import Button from '../../Button';

// const useStyles = makeStyles(() => ({
//   dialogContent: {
//     height: 600,
//   },
//   popper: {
//     zIndex: 1400,
//   },
// }));

// const countryCodeList = [
//   {
//     src: TaiwanSvg,
//     code: '886',
//     name: 'Taiwan',
//   },
//   {
//     src: TaiwanSvg,
//     code: '852',
//     name: 'Hong Kong',
//   },
//   {
//     src: TaiwanSvg,
//     code: '44',
//     name: 'United kingdom',
//   },
//   {
//     src: TaiwanSvg,
//     code: '1',
//     name: 'United States of America',
//   },
//   {
//     src: TaiwanSvg,
//     code: '1',
//     name: 'Canada',
//   },
//   {
//     src: TaiwanSvg,
//     code: '61',
//     name: 'Australia',
//   },
//   {
//     src: TaiwanSvg,
//     code: '81',
//     name: 'Japan',
//   },
//   {
//     src: TaiwanSvg,
//     code: '65',
//     name: 'Sigapore',
//   },
//   {
//     src: TaiwanSvg,
//     code: '60',
//     name: 'Malaysia',
//   },
//   {
//     src: TaiwanSvg,
//     code: '66',
//     name: 'Thailand',
//   },
// ];

// export default {
//   title: 'Components/TextField/PhoneTextField',
//   component: PhoneTextField,
//   argTypes: {
//     value: {
//       description: 'PhoneTextField value',
//       table: {
//         defaultValue: {
//           summary: '',
//         },
//       },
//     },
//     placeholder: {
//       description: 'Placeholder',
//       table: {
//         defaultValue: {
//           summary: 'undefined',
//         },
//       },
//     },
//     onChange: {
//       action: 'onChange',
//       description: 'Trigger when select a country code',
//       type: {
//         require: true,
//       },
//       table: {
//         defaultValue: {
//           summary: 'undefined',
//         },
//       },
//     },
//     countryCodeList: {
//       description: 'Country Code List (required)',
//       type: {
//         require: true,
//       },
//       table: {
//         defaultValue: {
//           summary: '[]',
//         },
//       },
//     },
//   },
// } as Meta;

// const Template: Story<PhoneTextFieldProps> = (args) => (
//   <PhoneTextField {...args} />
// );

// export const Default: Story<PhoneTextFieldProps> = Template.bind({});

// Default.args = {
//   value: '',
//   placeholder: 'Phone Number',
//   countryCodeList,
// };

// export const Error: Story<PhoneTextFieldProps> = Template.bind({});

// Error.args = {
//   ...Default.args,
//   error: true,
//   errorMessage: 'Invalid Phone',
// };

// export const HasValue: Story<PhoneTextFieldProps> = Template.bind({});

// HasValue.args = {
//   ...Default.args,
//   countryCode: '1',
//   value: '0990000001',
// };

// export const WithDialog: Story<PhoneTextFieldProps> = (args) => {
//   const classes = useStyles();
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
//         Open Dialog
//       </Button>
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogContent className={classes.dialogContent}>
//           <PhoneTextField {...args} menuClassName={classes.popper} />
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// WithDialog.args = {
//   ...Default.args,
// };
