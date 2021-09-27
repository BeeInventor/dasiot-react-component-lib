import React from 'react';
import classnames from 'classnames';
import MUIButton from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { DialogButtonProps } from './DialogButton.types';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(
  (theme) => ({
    button: {
      ...theme.text.Subtitle_16_Med,
      minWidth: 120,
      color: '#FFF',
      paddingTop: 4,
      paddingBottom: 4,
      textTransform: 'none',
      '&:active, &:hover': {
        backgroundColor: theme.color.primary.$80,
      },
    },
    containedSecondary: {
      color: theme.color.primary.$100,
      backgroundColor: '#FFF',
      '&:active, &:hover': {
        backgroundColor: 'rgba(0, 0, 0, .05)',
      },
    },
    disabled: {
      opacity: '.3',
    },
    'disabled--primary': {
      '&$disabled': {
        color: '#FFF',
        backgroundColor: theme.color.primary.$80,
      },
    },
    'disabled--secondary': {
      '&$disabled': {
        color: theme.color.primary.$100,
        backgroundColor: '#FFF',
      },
    },
    'icon--previousIcon': {
      marginRight: 10,
    },
    'icon--nextIcon': {
      marginLeft: 10,
    },
  }),
  { name: 'DialogButton' },
);

function DialogButton(props: DialogButtonProps): JSX.Element {
  const { className, previousIcon, nextIcon, color, ...otherProps } =
    props ?? {};
  const classes = useStyles({ color });
  return (
    <MUIButton
      {...otherProps}
      className={classnames(classes.button, className)}
      classes={{
        containedSecondary: classes.containedSecondary,
        iconSizeMedium: classnames({
          [classes['icon--previousIcon']]: previousIcon,
          [classes['icon--nextIcon']]: nextIcon,
        }),
        disabled: classnames(classes.disabled, {
          [classes['disabled--primary']]: color === 'primary',
          [classes['disabled--secondary']]: color === 'secondary',
        }),
      }}
      color={color}
      startIcon={previousIcon && <ChevronLeft />}
      endIcon={nextIcon && <ChevronRight />}
    />
  );
}

export default DialogButton;
