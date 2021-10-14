import { PopperProps } from '@mui/material';

export interface DropDownItem {
  id: string;
  name: string;
  value: string | number;
}

export interface DropDownProps {
  /**
   * For adjustment Dropdown styles
   */
  className?: string;
  /**
   * For adjustment item styles
   */
  itemClassName?: string;
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
