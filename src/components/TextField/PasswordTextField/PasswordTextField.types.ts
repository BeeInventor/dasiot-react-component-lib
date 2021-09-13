import { InputHTMLAttributes } from 'react';

export interface PasswordTextFieldProps {
  externalContainerClassName?: string;
  className?: string;
  placeholder?: string;
  onChange: (password: string) => void;
  errorContainerClassName?: string;
  error?: boolean;
  errorMessage?: string;
  inputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'placeholder' | 'value' | 'onChange'
  >;
}
