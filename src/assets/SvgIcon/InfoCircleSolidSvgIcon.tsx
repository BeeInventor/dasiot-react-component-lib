import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const InfoCircleSolidSvgIcon = (props: SvgIconProps) => (
  <SvgIcon
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V12Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default InfoCircleSolidSvgIcon;
