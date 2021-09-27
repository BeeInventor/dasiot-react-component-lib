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
   * Item list
   */
  list: DropDownItem[];
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * For adjustment list styles
   */
  listClassName?: string;
  /**
   * For adjustment item styles
   */
  itemClassName?: string;
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
}
