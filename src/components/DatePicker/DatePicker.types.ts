import { Locale } from 'date-fns';

export interface DatePickerProps {
  locale?: Locale;
  startDate: Date;
  endDate: Date;
}
