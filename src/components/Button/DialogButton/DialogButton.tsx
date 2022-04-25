import classnames from 'classnames';
import React from 'react';
import MUIButton from '@mui/material/Button';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';

import { Mode } from 'components/main.types';
import { DialogButtonProps } from './DialogButton.types';

interface ButtonProps {
  mode?: Mode;
}

const Button = styled(MUIButton)<ButtonProps>`
  min-width: 120px;
  color: white;
  font-weight: bold;
  padding: 4px 0;
  text-transform: none;
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }

  &.Mui-disabled {
    opacity: 0.3;
  }

  & .MuiButton-startIcon {
    margin-right: 10px;
  }

  & .MuiButton-endIcon {
    margin-left: 10px;
  }

  ${({ theme }) => ({
    ...theme.typography.body2,
    '&.MuiButton-containedPrimary': {
      '&:hover': {
        backgroundColor: theme.color.primary.$80,
      },
      '&.loading': {
        pointerEvents: 'none',
        border: `1px solid ${theme.color.primary.$100}`,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      '&.Mui-disabled': {
        color: 'white',
        backgroundColor: theme.color.primary.$80,
      },
    },

    '&.MuiButton-containedSecondary': {
      backgroundColor: theme.color.secondary.$80,
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      '&.Mui-disabled': {
        color: 'white',
        backgroundColor: theme.color.secondary.$80,
      },
    },

    '&.MuiButton-containedSuccess': {
      border: `1px solid ${theme.color.green.$100}`,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      '&.Mui-disabled': {
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    },

    '&.MuiButton-outlined': {
      '&[mode="light"]': {
        color: theme.color.secondary.$60,
        '&:hover': {
          color: theme.color.secondary.$100,
        },
      },
    },

    '&.MuiButton-outlinedSecondary': {
      borderColor: `1px solid ${theme.color.secondary.$60}`,
      '&:hover': {
        borderColor: theme.color.secondary.$100,
      },
    },
  })}
`;

const DialogButton: React.VFC<DialogButtonProps> = ({
  className,
  mode = 'dark',
  previousIcon,
  nextIcon,
  isLoading = false,
  ...props
}) => {
  return (
    <Button
      mode={mode}
      className={classnames({
        className,
        loading: isLoading,
      })}
      startIcon={previousIcon && <ChevronLeft />}
      endIcon={nextIcon && <ChevronRight />}
      {...props}
    />
  );
};

export default DialogButton;
