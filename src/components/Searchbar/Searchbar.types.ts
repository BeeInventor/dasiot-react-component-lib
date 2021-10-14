import {
  LanguageButtonProps,
  LanguageData,
} from '../Button/LanguageButton/LanguageButton.types';
import { ChangeEvent, ReactNode } from 'react';
import { BoxProps } from '@mui/material';

export interface SearchbarProps
  extends Omit<BoxProps, 'onChange' | 'onSelect'> {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelect?: (lang: LanguageData) => void;
  operationNode?: ReactNode;
  inputContainerProps: BoxProps;
  LanguageButtonProps: Omit<LanguageButtonProps, 'onSelect'>;
}
