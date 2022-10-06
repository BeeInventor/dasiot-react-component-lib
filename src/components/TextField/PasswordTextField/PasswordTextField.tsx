import React, { VFC, ChangeEvent, useState } from 'react';
import classnames from 'classnames';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { PasswordTextFieldProps } from './PasswordTextField.types';
import ComponentIcPasswordDbg from '../../../svg/ComponentIcPasswordDbg';
import IcErrorIfo from '../../../svg/IcErrorIfo';

const DEFAULT_WIDTH = 320;
const DEFAULT_HEIGHT = 50;

const Root = styled(Box)(({}) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const TextField = styled(Box)(({ theme }) => ({
  ...theme.text.Body_16_Reg,
  display: 'flex',
  alignItems: 'center',
  minWidth: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  minHeight: DEFAULT_HEIGHT,
  color: '#FFFFFF',
  backgroundColor: 'rgba(0, 0, 0, .5)',
  borderRadius: 4,
  padding: '13px 24px',
  '&.container--error': {
    border: `1px solid ${theme.color.highlight}`,
  },
}));

const Input = styled(InputBase)`
  ${({ theme }) => ({ ...theme.text.Body_16_Reg })};
  flex: 1;
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  input[data-autocompleted] {
    background-color: transparent !important;
  }
`;

const ErrorMessage = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.text.Caption_12_Reg,
  color: theme.color.highlight,
}));

const PasswordTextField: VFC<PasswordTextFieldProps> = (props) => {
  const {
    rootProps,
    inputProps,
    errorProps,
    placeholder,
    onChange,
    error,
    errorMessage,
    ...otherProps
  } = props;
  const [inputValue, setInputValue] = useState('');

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setInputValue(v);
    onChange(v);
  };

  return (
    <Root {...rootProps}>
      <TextField
        className={classnames({
          'container--error': error,
        })}
        {...otherProps}
      >
        <ComponentIcPasswordDbg style={{ marginRight: 6 }} />
        <Input
          type="password"
          name="password"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputOnChange}
          {...inputProps}
        />
      </TextField>
      {error && (
        <ErrorMessage {...errorProps}>
          <IcErrorIfo /> {errorMessage}
        </ErrorMessage>
      )}
    </Root>
  );
};

export default PasswordTextField;
