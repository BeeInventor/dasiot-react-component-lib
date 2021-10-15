import { PopperProps, BoxProps } from '@mui/material';
import { Locale } from 'date-fns';

export interface DatePickerProps extends Omit<BoxProps, 'onSelect'> {
  type?: 'date' | 'range';
  placeholder?: string;
  locale?: Locale;
  startDate?: Date;
  endDate?: Date;
  limitFrom?: Date;
  limitTo?: Date;
  onSelect: (value: Date | [Date, Date]) => void;
  /**
   * Custom popper props
   */
  popperProps?: Omit<PopperProps, 'open' | 'anchorEl'>;
}
