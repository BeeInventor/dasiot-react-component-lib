import React, { CSSProperties, VFC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

interface Props {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

const ComponentIcPhoneDbgBlack: VFC<Props & Omit<SvgIconProps, keyof Props>> = (
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
        d="M26 12L26 28L14 28L14 12L26 12Z"
        stroke="#3E3E3E"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="17" y="24" width="6" height="2" rx="1" fill="#3E3E3E" />
      {/* <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> */}
    </SvgIcon>
  );
};

export default ComponentIcPhoneDbgBlack;
