import React, { VFC, ChangeEvent, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import classnames from 'classnames';
import { Theme } from '@material-ui/core';
import { PasswordTextFieldProps } from './PasswordTextField.types';
import ComponentIcPasswordDbg from '../../../svg/ComponentIcPasswordDbg';
import IcErrorIfo from '../../../svg/IcErrorIfo';

const DEFAULT_WIDTH = 320;
const DEFAULT_HEIGHT = 50;

const useStyles = makeStyles(
  (theme: Theme) => ({
    'external-container': {
      display: 'flex',
      flexDirection: 'column',
    },
    container: {
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
    },
    'container--error': {
      border: `1px solid ${theme.color.highlight}`,
    },
    input: {
      ...theme.text.Subtitle_16_Med,
      flex: 1,
      color: 'white',
      backgroundColor: 'transparent',
      outline: 'none',
      border: 'none',
      '&::placeholder': {
        color: '#9C9C9C',
      },
    },
    'error-container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...theme.text.Caption_12_Reg,
      color: theme.color.highlight,
    },
  }),
  { name: 'PasswordTextField' },
);

const PasswordTextField: VFC<PasswordTextFieldProps> = (props) => {
  const {
    externalContainerClassName,
    className,
    inputProps = {},
    placeholder,
    onChange,
    errorContainerClassName,
    error,
    errorMessage,
  } = props;
  const localClasses = useStyles();
  const [inputValue, setInputValue] = useState('');

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setInputValue(v);
    onChange(v);
  };

  return (
    <div
      className={classnames(
        localClasses['external-container'],
        externalContainerClassName,
      )}
    >
      <div
        className={classnames(localClasses.container, className, {
          [localClasses['container--error']]: error,
        })}
      >
        <ComponentIcPasswordDbg style={{ marginRight: 6 }} />
        <input
          className={localClasses.input}
          type="password"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputOnChange}
          {...inputProps}
        />
      </div>
      {error && (
        <div
          className={classnames(
            localClasses['error-container'],
            errorContainerClassName,
          )}
        >
          <IcErrorIfo /> {errorMessage}
        </div>
      )}
    </div>
  );
};

export default PasswordTextField;
