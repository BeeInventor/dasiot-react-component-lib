import { BoxProps } from '@mui/material';

export interface StepItem {
  id: string;
  src: string;
}

export interface StepProps extends BoxProps {
  current: number;
  list: Array<StepItem>;
  className?: string;
}
