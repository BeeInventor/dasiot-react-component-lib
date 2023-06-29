import React, { useRef } from 'react';
import { styled, Box, BoxProps } from '@mui/material';

import CheckBoxSvgIcon from '../../../svg/CheckboxSvgIcon';

interface ContainerProps {
  disabled: boolean;
  isSelected: boolean;
  selectType: 'none' | 'one' | 'partial' | 'all';
}

const Container = styled(Box, {
  shouldForwardProp: (prop) => {
    switch (prop) {
      case 'isSelected':
      case 'selectType':
      case 'sx':
        return false;
      default:
        return true;
    }
  },
})<ContainerProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    & > .checkbox {
      border-color: ${({ theme }) => theme.color.primary.$60};
    }
  }

  & > .checkbox {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid ${({ theme }) => theme.color.secondary.$40};
    border-radius: 4px;
    margin: 8px;
    background: ${({ disabled, theme }) =>
      disabled ? theme.color.secondary.$40 : '#fff'};
    color: ${({ theme }) => theme.color.primary.$100};
    opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};

    ${({ isSelected, selectType }) => {
      if (isSelected && selectType !== 'partial') {
        return {
          border: 'none',
        };
      }
      return undefined;
    }}

    ${({ theme, isSelected, selectType }) => {
      if (isSelected) {
        if (selectType === 'partial') {
          return {
            padding: '4px',
            '&:before': {
              display: 'block',
              content: '""',
              width: '100%',
              height: '100%',
              background: theme.color.primary.$100,
              borderRadius: '1px',
            },
          };
        }
      }
      return undefined;
    }};
  }

  & > label {
    cursor: pointer;
    display: inline-block;
    margin-left: 8px;
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  }
`;

export interface CheckboxLightProps extends Omit<BoxProps, 'onChange'> {
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  selectType?: 'none' | 'one' | 'partial' | 'all';
  value?: any;
  onChange?: (value: any, checked: boolean) => void;
}

const CheckboxLight: React.FC<CheckboxLightProps> = ({
  name,
  label,
  sx,
  value,
  checked = false,
  disabled = false,
  selectType = 'none',
  onChange,
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  return (
    <Container
      ref={checkboxRef}
      sx={sx}
      isSelected={checked}
      disabled={disabled}
      selectType={selectType}
      onClick={() => {
        onChange?.(value, !checked);
      }}
      data-cy={`checkbox-list-device-item${disabled ? 'disabled' : ''}`}
    >
      <div className="checkbox">
        {checked && selectType !== 'partial' && (
          <CheckBoxSvgIcon sx={{ width: '1.5rem', height: '1.5rem' }} />
        )}
      </div>
      {label && <label htmlFor={name}>{label}</label>}
    </Container>
  );
};

export default CheckboxLight;
