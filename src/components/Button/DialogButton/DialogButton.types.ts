import { ButtonProps } from '@mui/material';

export interface DialogButtonProps extends ButtonProps {
  mode?: 'dark' | 'light';
  previousIcon?: boolean;
  nextIcon?: boolean;
}
