import { BoxProps } from '@mui/system';

export interface StepItem {
  id: string;
  src: string;
}

export interface StepProps extends BoxProps {
  current: number;
  list: Array<StepItem>;
}
