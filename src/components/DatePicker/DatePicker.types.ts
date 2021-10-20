import { PopperProps, BoxProps } from '@mui/material';
import { Locale } from 'date-fns';

export interface StyledRootProps {
  disabled?: boolean;
}

export interface DatePickerProps extends Omit<BoxProps, 'onSelect'> {
  type?: 'date' | 'range';
  placeholder?: string;
  locale?: Locale;
  startDate?: Date;
  endDate?: Date;
  limitFrom?: Date;
  limitTo?: Date;
  disabled?: boolean;
  onSelect: (
    value: Date | undefined | [Date | undefined, Date | undefined],
  ) => void;
  /**
   * Custom popper props
   */
  popperProps?: Omit<PopperProps, 'open' | 'anchorEl'>;
}
