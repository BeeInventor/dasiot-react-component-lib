import React, { CSSProperties, VFC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

interface Props {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

const ComponentIcPasswordDbg: VFC<Props & Omit<SvgIconProps, keyof Props>> = (
  props,
) => {
  const { viewBox = '0 0 40 40', ...otherProps } = props;

  return (
    <SvgIcon
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        width: props.width ?? 40,
        height: props.height ?? 40,
      }}
      {...otherProps}
    >
      <path
        d="M14 18H26V28H14V18Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 18V16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16V18"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
    </SvgIcon>
  );
};

export default ComponentIcPasswordDbg;
