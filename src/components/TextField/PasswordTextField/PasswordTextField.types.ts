import { InputBaseProps, BoxProps } from '@mui/material';

export interface PasswordTextFieldProps extends Omit<BoxProps, 'onChange'> {
  rootProps?: BoxProps;
  errorProps?: BoxProps;
  className?: string;
  placeholder?: string;
  onChange: (password: string) => void;
  error?: boolean;
  errorMessage?: string;
  inputProps?: InputBaseProps;
}
