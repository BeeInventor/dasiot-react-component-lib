import { ButtonProps } from '@mui/material';

export type DialogButtonProps = ButtonProps & {
  mode?: 'dark' | 'light';
  previousIcon?: boolean;
  nextIcon?: boolean;
};
