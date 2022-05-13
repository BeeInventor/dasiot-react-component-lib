import { PopperProps, BoxProps } from '@mui/material';
import { Mode } from 'components/main.types';
import { Locale } from 'date-fns';

export interface StyledRootProps {
  disabled?: boolean;
  mode?: Mode;
}

export interface StyledMode {
  mode?: Mode;
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
  mode?: Mode;
  onSelect: (
    value: Date | undefined | [Date | undefined, Date | undefined],
  ) => void;
  /**
   * Custom popper props
   */
  popperProps?: Omit<PopperProps, 'open' | 'anchorEl'>;
}
