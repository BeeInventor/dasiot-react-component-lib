export interface LanguageData {
  code: string;
  name: string;
  fullName: string;
}

export interface LanguageButtonProps {
  className?: string;
  menuClassName?: string;
  itemClassName?: string;
  list: LanguageData[];
  language?: LanguageData;
  onSelect: (lang: LanguageData) => void;
}
