import { PopperProps } from '@mui/material';
import { BoxProps } from '@mui/system';

export interface DropDownItem {
  id: string;
  name: string;
  value: string | number;
}

export interface DropDownProps extends Omit<BoxProps, 'onSelect'> {
  /**
   * For adjustment item styles
   */
  itemProps?: BoxProps;
  /**
   * Item list
   */
  list: DropDownItem[];
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * Specify item
   */
  selectedId?: string;
  /**
   * Trigger when select a item
   */
  onSelect: (value: DropDownItem['value'], item: DropDownItem) => void;
  /**
   * Disable dropdown
   */
  disabled?: boolean;
  /**
   * Custom popper props
   */
  popperProps?: Omit<PopperProps, 'open' | 'anchorEl'>;
}
