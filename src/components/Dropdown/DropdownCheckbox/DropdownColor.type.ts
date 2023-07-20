import { PopperProps, BoxProps } from '@mui/material';

export interface DropdownCheckboxItem {
  id: string;
  name: string;
  value: string | number;
}

export interface DropdownCheckboxProps extends Omit<BoxProps, 'onSelect'> {
  /**
   * For adjustment item styles
   */
  itemProps?: BoxProps;
  /**
   * Item list
   */
  list: DropdownCheckboxItem[];
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * Specify item
   */
  selectedIds?: string[];
  /**
   * Trigger when select a item
   */
  onSelect: (values: any[]) => void;
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
  selectionId?: string;
}
