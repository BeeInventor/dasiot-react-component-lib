import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const CheckboxSvgIcon = (props: SvgIconProps) => (
  <SvgIcon
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width="24" height="24" rx="4" fill="#E6A600" />
    <path
      d="M7 12.6951L10.3049 16L17.5 9"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default CheckboxSvgIcon;
