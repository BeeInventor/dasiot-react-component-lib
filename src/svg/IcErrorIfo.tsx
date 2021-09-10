import React, { CSSProperties, VFC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

interface Props {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

const useStyles = makeStyles(() => ({
  root: (props: Props) => ({
    width: props.width ?? 24,
    height: props.height ?? 24,
  }),
}));

const IcErrorIfo: VFC<Props & Omit<SvgIconProps, keyof Props>> = (props) => {
  const localClasses = useStyles(props);
  const { viewBox = '0 0 24 24', ...otherProps } = props;

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
      <circle cx="12" cy="12" r="6" fill="#FF6B00" />
      <circle cx="12" cy="9" r="1" fill="white" />
      <rect x="11" y="11" width="2" height="5" rx="1" fill="white" />
    </SvgIcon>
  );
};

export default IcErrorIfo;
