import React from 'react';
import MaterialUIButton from '@material-ui/core/Button';
import { ButtonProps } from '../../types/Button';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: ({ height }: ButtonProps) => ({
      ...theme.text.Subtitle_16_Med,
      padding: '4px 32px',
      borderRadius: 16,
      textTransform: 'none',
      height: height ?? 32,
      minHeight: 32,
    }),
    contained: {
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
      '&:active': {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
      '&:disabled': {
        color: '#FFFFFF',
      },
    },
    containedPrimary: {
      color: '#FFFFFF',
      '&:hover': {
        backgroundColor: theme.color.primary.$80,
      },
      '&:active': {
        backgroundColor: theme.color.primary.$100,
      },
      '&:disabled': {
        backgroundColor: '#E6D2A1',
      },
    },
    containedSecondary: {
      color: '#FFFFFF',
      '&:hover': {
        backgroundColor: theme.color.secondary.$80,
      },
      '&:active': {
        backgroundColor: theme.color.secondary.$80,
      },
      '&:disabled': {
        backgroundColor: '#B3B3B3',
      },
    },
  }),
  { name: 'Button' },
);

const Button = ({ classes, variant, height, ...otherProps }: ButtonProps) => {
  const localClasses = useStyles({ height });
  const {
    root,
    contained,
    containedPrimary,
    containedSecondary,
    ...otherClasses
  } = classes ?? {};
  return (
    <MaterialUIButton
      classes={{
        root: `${localClasses.root}${root ? ' ' + root : ''}`,
        contained: `${localClasses.contained}${
          contained ? ' ' + contained : ''
        }`,
        containedPrimary: `${localClasses.containedPrimary}${
          containedPrimary ? ' ' + containedPrimary : ''
        }`,
        containedSecondary: `${localClasses.containedSecondary}${
          containedSecondary ? ' ' + containedSecondary : ''
        }`,
        ...otherClasses,
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
