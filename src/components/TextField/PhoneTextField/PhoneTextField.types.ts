import { InputHTMLAttributes } from 'react';
import { CountryCodeData } from '../../../Theme.types';

export interface phoneData {
  code: string;
  phone: string;
}

export interface PhoneTextFieldProps {
  externalContainerClassName?: string;
  className?: string;
  placeholder?: string;
  countryCode?: string;
  value?: string;
  onChange: (data: phoneData) => void;
  countryCodeList: CountryCodeData[];
  errorContainerClassName?: string;
  error?: boolean;
  errorMessage?: string;
  inputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'placeholder' | 'value' | 'onChange'
  >;
}
