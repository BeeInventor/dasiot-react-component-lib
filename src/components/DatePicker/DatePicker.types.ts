import { Locale } from 'date-fns';

export interface DatePickerProps {
  type?: 'date' | 'range';
  placeholder?: string;
  locale?: Locale;
  startDate?: Date;
  endDate?: Date;
  limitFrom?: Date;
  limitTo?: Date;
  onSelect: (value: Date | [Date, Date]) => void;
  calendarClassName?: string;
}
