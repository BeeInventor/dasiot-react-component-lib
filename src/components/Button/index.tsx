import React from 'react';
import MaterialUIButton from '@material-ui/core/Button';
import { ButtonProps } from '../../types/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      fontSize: '1rem',
      padding: '4px 32px',
      lineHeight: 1.5,
      borderRadius: 16,
    },
  }),
  { name: 'Button' },
);

const Button: React.VFC<ButtonProps> = ({
  classes,
  variant,
  ...otherProps
}) => {
  const localClasses = useStyles();
  return (
    <MaterialUIButton
      classes={{
        root: localClasses.root,
        ...classes,
      }}
      variant={variant}
      {...otherProps}
    />
  );
};

Button.defaultProps = {
  variant: 'contained',
};

export default Button;
