import { PopperProps } from '@mui/material';
import { BoxProps } from '@mui/system';

export interface LanguageData {
  code: string;
  name: string;
  fullName: string;
}

export interface LanguageButtonProps extends Omit<BoxProps, 'onSelect'> {
  list: LanguageData[];
  language?: LanguageData;
  onSelect: (lang: LanguageData) => void;
  /**
   * Custom popper props
   */
  popperProps?: Omit<PopperProps, 'open' | 'anchorEl'>;
  /**
   * Custom menu props
   */
  menuProps?: BoxProps;
  /**
   * Custom item props
   */
  itemProps?: BoxProps;
}
