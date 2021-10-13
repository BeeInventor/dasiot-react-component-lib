import React from 'react';
import MUIButton from '@mui/material/Button';
import { DialogButtonProps } from './DialogButton.types';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';

const Styled = styled(MUIButton)(({ theme }) => ({
  ...theme.text.Subtitle_16_Med,
  minWidth: 120,
  color: '#FFF',
  paddingTop: 4,
  paddingBottom: 4,
  textTransform: 'none',
  boxShadow: 'none',
  '&:active, &:hover': {
    backgroundColor: theme.color.primary.$80,
  },
  '&.MuiButton-containedSecondary': {
    color: theme.color.primary.$100,
    backgroundColor: '#FFF',
    '&:active, &:hover': {
      backgroundColor: 'rgba(0, 0, 0, .05)',
    },
  },
  '&.Mui-disabled': {
    opacity: '.3',
    '&.MuiButton-containedPrimary': {
      color: '#FFF',
      backgroundColor: theme.color.primary.$80,
    },
  },
  '& .MuiButton-startIcon': { marginRight: '10px' },
  '& .MuiButton-endIcon': { marginLeft: '10px' },
}));

function DialogButton(props: DialogButtonProps): JSX.Element {
  const { className, previousIcon, nextIcon, color, ...otherProps } =
    props ?? {};
  return (
    <Styled
      className={className}
      color={color}
      startIcon={previousIcon && <ChevronLeft />}
      endIcon={nextIcon && <ChevronRight />}
      {...otherProps}
    />
  );
}

export default DialogButton;
