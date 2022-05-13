import { BoxProps, PopperProps } from '@mui/material';
import { Locale } from 'date-fns';

export interface StyledRootProps {
  disabled?: boolean;
  mode?: 'dark' | 'light';
}

export interface StyledMode {
  mode?: 'dark' | 'light';
}

export interface DatePickerProps extends Omit<BoxProps, 'onSelect'> {
  className?: string;
  type?: 'date' | 'range';
  placeholder?: string;
  locale?: Locale;
  startDate?: Date;
  endDate?: Date;
  limitFrom?: Date;
  limitTo?: Date;
  disabled?: boolean;
  dateFormat?: string;
  mode?: 'dark' | 'light';
  onSelect: (
    value: Date | undefined | [Date | undefined, Date | undefined],
  ) => void;
  /**
   * Custom popper props
   */
  popperProps?: Omit<PopperProps, 'open' | 'anchorEl'>;
}
