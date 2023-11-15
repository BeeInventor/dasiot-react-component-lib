import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

interface Props {
  width?: number;
  height?: number;
}

const IcErrorIfo: FC<Props & Omit<SvgIconProps, keyof Props>> = (props) => {
  const {
    width = 24,
    height = 24,
    viewBox = '0 0 24 24',
    ...otherProps
  } = props;

  return (
    <SvgIcon
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      sx={{
        width,
        height,
      }}
    >
      <circle cx="12" cy="12" r="6" fill="#FF6B00" />
      <circle cx="12" cy="9" r="1" fill="white" />
      <rect x="11" y="11" width="2" height="5" rx="1" fill="white" />
    </SvgIcon>
  );
};

export default IcErrorIfo;
