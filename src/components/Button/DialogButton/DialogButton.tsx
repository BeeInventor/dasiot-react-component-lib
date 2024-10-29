import React from 'react';
import MUIButton from '@mui/material/Button';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';

import { Mode } from 'components/main.types';
import { DialogButtonProps } from './DialogButton.types';

interface ButtonProps extends MuiButtonProps {
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
    '&.MuiButton-text': {
      '&[mode="light"]': {
        color: theme.color.secondary.$60,
      },
    },

    '&.Mui-disabled': {
      color: 'white',
      '&[mode="light"]': {
        color: theme.color.secondary.$100,
      },
    },

    '&.MuiButton-contained': {
      '&[mode="light"]': {
        color: 'white',
      },
    },

    '&.MuiButton-containedPrimary': {
      '&:hover': {
        backgroundColor: theme.color.primary.$80,
      },
      '&.Mui-disabled': {
        backgroundColor: theme.color.primary.$80,
      },
    },

    '&.MuiButton-containedSecondary': {
      backgroundColor: theme.color.secondary.$80,
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      '&.Mui-disabled': {
        backgroundColor: theme.color.secondary.$80,
      },
    },

    '&.MuiButton-containedSuccess': {
      '&.Mui-disabled': {
        backgroundColor: theme.palette.success.dark,
      },
    },

    '&.MuiButton-containedWarning': {
      '&.Mui-disabled': {
        backgroundColor: theme.palette.warning.dark,
      },
    },

    '&.MuiButton-containedInfo': {
      '&.Mui-disabled': {
        backgroundColor: theme.palette.info.dark,
      },
    },

    '&.MuiButton-containedError': {
      '&.Mui-disabled': {
        backgroundColor: theme.palette.error.dark,
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

    '&.MuiButton-outlinedPrimary': {
      '&.Mui-disabled': {
        border: `1px solid ${theme.palette.primary.dark}`,
      },
    },

    '&.MuiButton-outlinedSecondary': {
      '&[mode="dark"]': {
        borderColor: 'white',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },

    '&.MuiButton-outlinedSuccess': {
      '&.Mui-disabled': {
        border: `1px solid ${theme.palette.success.dark}`,
      },
    },

    '&.MuiButton-outlinedWarning': {
      '&.Mui-disabled': {
        border: `1px solid ${theme.palette.warning.dark}`,
      },
    },

    '&.MuiButton-outlinedInfo': {
      '&.Mui-disabled': {
        border: `1px solid ${theme.palette.info.dark}`,
      },
    },

    '&.MuiButton-outlinedError': {
      '&.Mui-disabled': {
        border: `1px solid ${theme.palette.error.dark}`,
      },
    },
  })}
`;

const DialogButton: React.FC<DialogButtonProps> = ({
  mode = 'dark',
  previousIcon,
  nextIcon,
  ...props
}) => {
  return (
    <Button
      mode={mode}
      startIcon={previousIcon && <ChevronLeft />}
      endIcon={nextIcon && <ChevronRight />}
      {...props}
    />
  );
};

export default DialogButton;
