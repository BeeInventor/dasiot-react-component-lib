import { BoxProps, InputBaseProps, PopperProps } from '@mui/material';
import { Mode } from '../../main.types';
import { CountryCodeData } from '../../../Theme.types';

export interface phoneData {
  code: string;
  phone: string;
}

export interface PhoneTextFieldProps extends Omit<BoxProps, 'onChange'> {
  rootProps?: BoxProps;
  menuProps?: BoxProps;
  errorProps?: BoxProps;
  placeholder?: string;
  countryCode?: string;
  value?: string;
  onChange: (data: phoneData) => void;
  countryCodeList: CountryCodeData[];
  error?: boolean;
  errorMessage?: string;
  inputProps?: InputBaseProps;
  popperProps?: Omit<PopperProps, 'open' | 'anchorEl'>;
  mode?: Mode;
}
