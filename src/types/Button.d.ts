import { ButtonProps as MaterialUIButtonProps } from '@material-ui/core/Button';
import React from 'react';

export interface ButtonProps extends MaterialUIButtonProps {
  height?: React.CSSProperties['height'];
}
