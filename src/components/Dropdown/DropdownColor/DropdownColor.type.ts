import { PopperProps, BoxProps } from '@mui/material';

export interface DropDownColorItem {
  id: string;
  name: string;
  value: string | number;
  color: string;
}

export interface DropDownColorProps extends Omit<BoxProps, 'onSelect'> {
  /**
   * For adjustment item styles
   */
  itemProps?: BoxProps;
  /**
   * Item list
   */
  list: DropDownColorItem[];
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
  onSelect: (
    value: DropDownColorItem['value'],
    item: DropDownColorItem,
  ) => void;
  /**
   * Disable dropdown
   */
  disabled?: boolean;
  /**
   * Custom popper props
   */
  popperProps?: Omit<PopperProps, 'open' | 'anchorEl'>;
  mode?: 'dark' | 'light';
  type?: 'path' | 'org';
  /**
   * filter the list out of this id
   */
  selectionId?: string;
}
