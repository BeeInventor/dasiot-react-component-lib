// import React from 'react';
// import { Meta, Story } from '@storybook/react';
// import makeStyles from '@material-ui/core/styles/makeStyles';
// import Searchbar from './Searchbar';
// import { SearchbarProps } from './Searchbar.types';
// import historySVG from '../../assets/image/svg/btn_ic_history.svg';
// import avatarSVG from '../../assets/image/svg/btn_ic_avatar.svg';

// const useStyles = makeStyles(
//   () => ({
//     icon: ({ size = 74 }: { size?: number }) => ({
//       display: 'flex',
//       width: size,
//       height: size,
//       justifyContent: 'center',
//       alignItems: 'center',
//       '&:hover': {
//         backgroundColor: 'rgba(0,0,0, .08)',
//       },
//     }),
//     borderRed: {
//       border: '1px solid red',
//     },
//     menu: {
//       zIndex: 1,
//     },
//   }),
//   {
//     name: 'SearchbarStorybook',
//   },
// );

// const Icon: React.VFC<{
//   size: number;
//   image: any;
// }> = (props) => {
//   const classes = useStyles(props);
//   return (
//     <div className={classes.icon}>
//       <img src={props.image} />
//     </div>
//   );
// };

// export default {
//   title: 'Components/Searchbar',
//   component: Searchbar,
//   argTypes: {
//     InputProps: {
//       description: 'Input props',
//       table: {
//         defaultValue: {
//           summary: 'undefined',
//         },
//       },
//     },
//     LanguageButtonProps: {
//       description: 'LanguageButton props',
//       type: {
//         require: true,
//       },
//       table: {
//         defaultValue: {
//           summary: 'undefined',
//         },
//       },
//     },
//     onSelect: {
//       description: 'Trigger when select a language',
//       table: {
//         defaultValue: {
//           summary: 'undefined',
//         },
//       },
//       action: 'trigger onSelect',
//     },
//   },
// } as Meta;

// const Template: Story<SearchbarProps> = (args) => <Searchbar {...args} />;

// export const Default: Story<SearchbarProps> = Template.bind({});

// Default.args = {
//   InputProps: {
//     placeholder: '搜尋',
//   },
//   LanguageButtonProps: {
//     list: [
//       {
//         code: 'zh-TW',
//         name: '繁中',
//         fullName: '繁體中文',
//       },
//       {
//         code: 'en-US',
//         name: 'English',
//         fullName: 'English(US)',
//       },
//     ],
//   },
// };

// export const AddIcon: Story<SearchbarProps> = Template.bind({});

// AddIcon.args = {
//   ...Default.args,
//   operationNode: (
//     <>
//       <Icon image={historySVG} size={74} />
//       <Icon image={avatarSVG} size={74} />
//     </>
//   ),
// };

// export const AdjustMenuStyle: Story<SearchbarProps> = (args) => {
//   const classes = useStyles({});
//   return (
//     <Searchbar
//       {...args}
//       LanguageButtonProps={{
//         ...args.LanguageButtonProps,
//         menuClassName: classes.menu,
//       }}
//     />
//   );
// };

// AdjustMenuStyle.args = {
//   ...AddIcon.args,
// };

// export const AdjustClassName: Story<SearchbarProps> = (args) => {
//   const classes = useStyles({});
//   return (
//     <Searchbar
//       {...args}
//       inputContainerClassName={classes.borderRed}
//       className={classes.borderRed}
//     />
//   );
// };

// AdjustClassName.args = {
//   ...AddIcon.args,
// };
