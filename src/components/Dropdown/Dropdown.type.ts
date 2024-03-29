import { PopperProps, BoxProps } from '@mui/material';
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
   * Contain Exceptance
   */
  isExceptance?: boolean;
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
  mode?: 'dark' | 'light';
  /**
   * filter the list out of this id
   */
  selectionIds?: string[];
}
