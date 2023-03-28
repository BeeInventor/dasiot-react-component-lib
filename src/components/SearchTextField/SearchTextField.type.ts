import { BoxProps } from '@mui/material';
import { InputHTMLAttributes } from 'react';

export interface SearchTextFieldProps extends BoxProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
}
