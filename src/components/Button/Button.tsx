import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { Mode } from '../main.types';

interface StyledButtonProps {
  mode?: Mode;
}

const StyledButton = styled(MuiButton)<StyledButtonProps>(({ theme }) => ({
  ...theme.text.Subtitle_16_Med,
  padding: '4px 32px',
  borderRadius: 90000,
  textTransform: 'none',
  minHeight: 32,

  '&.Mui-disabled': {
    opacity: 0.3,
  },

  '&.MuiButton-textPrimary': {
    color: theme.palette.primary.main,
  },

  '&.MuiButton-textSecondary': {
    '&[mode="dark"]': {
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgba(101, 101, 101, 0.1)',
      },
    },
  },

  '&.MuiButton-textSuccess': {
    color: theme.palette.success.main,
  },

  '&.MuiButton-textWarning': {
    color: theme.palette.warning.main,
  },

  '&.MuiButton-textInfo': {
    color: theme.palette.info.main,
  },

  '&.MuiButton-textError': {
    color: theme.palette.error.main,
  },

  '&.MuiButton-contained': {
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
  },

  '&.MuiButton-containedPrimary': {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.color.primary.$80,
    },
  },

  '&.MuiButton-containedSecondary': {
    backgroundColor: theme.color.secondary.$80,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },

  '&.MuiButton-containedSuccess': {
    '&.Mui-disabled': {
      backgroundColor: theme.palette.success.main,
    },
  },

  '&.MuiButton-containedWarning': {
    '&.Mui-disabled': {
      backgroundColor: theme.palette.warning.main,
    },
  },

  '&.MuiButton-containedInfo': {
    '&.Mui-disabled': {
      backgroundColor: theme.palette.info.main,
    },
  },

  '&.MuiButton-containedError': {
    '&.Mui-disabled': {
      backgroundColor: theme.palette.error.main,
    },
  },

  '&.MuiButton-outlinedPrimary': {
    '&.Mui-disabled': {
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },

  '&.MuiButton-outlinedSecondary': {
    '&[mode="dark"]': {
      color: 'white',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      '&:hover': {
        borderColor: 'rgba(255, 255, 255, 1)',
      },
    },
  },

  '&.MuiButton-outlinedSuccess': {
    '&.Mui-disabled': {
      color: theme.palette.success.main,
      border: `1px solid ${theme.palette.success.main}`,
    },
  },

  '&.MuiButton-outlinedWarning': {
    '&.Mui-disabled': {
      color: theme.palette.warning.main,
      border: `1px solid ${theme.palette.warning.main}`,
    },
  },

  '&.MuiButton-outlinedInfo': {
    '&.Mui-disabled': {
      color: theme.palette.info.main,
      border: `1px solid ${theme.palette.info.main}`,
    },
  },

  '&.MuiButton-outlinedError': {
    '&.Mui-disabled': {
      color: theme.palette.error.main,
      border: `1px solid ${theme.palette.error.main}`,
    },
  },
}));

export interface ButtonProps extends MuiButtonProps {
  mode?: Mode;
}

const Button: React.VFC<ButtonProps> = ({ mode = 'dark', ...props }) => {
  return <StyledButton mode={mode} {...props} />;
};

export default Button;
