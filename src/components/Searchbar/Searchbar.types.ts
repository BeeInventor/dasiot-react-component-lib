import {
  LanguageButtonProps,
  LanguageData,
} from '../Button/LanguageButton/LanguageButton.types';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface SearchbarProps {
  className?: string;
  operationNode?: ReactNode;
  inputContainerClassName?: string;
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onSelect?: (lang: LanguageData) => void;
  InputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  >;
  LanguageButtonProps: Omit<LanguageButtonProps, 'onSelect'>;
}
