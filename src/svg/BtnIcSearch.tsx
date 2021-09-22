import React, { CSSProperties, VFC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

interface Props {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  color?: string;
}

const useStyles = makeStyles(() => ({
  root: (props: Props) => ({
    width: props.width ?? 40,
    height: props.height ?? 40,
  }),
}));

const BtnIcSearch: VFC<Props & Omit<SvgIconProps, keyof Props>> = (props) => {
  const localClasses = useStyles(props);
  const { viewBox = '0 0 40 40', color = '#606060', ...otherProps } = props;

  return (
    <SvgIcon
      classes={{
        root: localClasses.root,
      }}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.1623 18.0812C23.1623 20.8874 20.8874 23.1623 18.0812 23.1623C15.2749 23.1623 13 20.8874 13 18.0812C13 15.2749 15.2749 13 18.0812 13C20.8874 13 23.1623 15.2749 23.1623 18.0812ZM22.636 24.7573C21.3391 25.6438 19.7707 26.1623 18.0812 26.1623C13.6181 26.1623 10 22.5443 10 18.0812C10 13.6181 13.6181 10 18.0812 10C22.5443 10 26.1623 13.6181 26.1623 18.0812C26.1623 19.7707 25.6438 21.3391 24.7573 22.636L29.5332 27.4118C30.1189 27.9976 30.1189 28.9473 29.5331 29.5331C28.9474 30.1189 27.9976 30.1189 27.4118 29.5331L22.636 24.7573Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default BtnIcSearch;
