import React, { CSSProperties, VFC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

interface Props {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

const BtnIcCalendar: VFC<Props & Omit<SvgIconProps, keyof Props>> = (props) => {
  const { viewBox = '0 0 24 26', sx, ...otherProps } = props;

  return (
    <SvgIcon
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        width: props.width ?? 24,
        height: props.height ?? 26,
        color: '#606060',
        ...sx,
      }}
      {...otherProps}
    >
      <path
        d="M19.9996 3.85712H3.99958C2.73722 3.85712 1.71387 4.88047 1.71387 6.14283V22.1428C1.71387 23.4052 2.73722 24.4285 3.99958 24.4285H19.9996C21.2619 24.4285 22.2853 23.4052 22.2853 22.1428V6.14283C22.2853 4.88047 21.2619 3.85712 19.9996 3.85712Z"
        fill="transparent"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5713 1.57141V6.14284"
        fill="transparent"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.42773 1.57141V6.14284"
        fill="transparent"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.71387 10.7142H22.2853"
        fill="transparent"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default BtnIcCalendar;
