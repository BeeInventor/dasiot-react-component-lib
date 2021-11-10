import React, { VFC, useState, useEffect, ChangeEvent, useRef } from 'react';
import Popper from '@mui/material/Popper';
import classnames from 'classnames';
import { PhoneTextFieldProps } from './PhoneTextField.types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CountryCodeData } from '../../../Theme.types';
import ComponentIcPhoneDbg from '../../../svg/ComponentIcPhoneDbg';
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

const PhoneCode = styled(Box)(({}) => ({
  display: 'flex',
  cursor: 'pointer',
  width: 75,
  height: '100%',
  margin: '0 16px 0 0',
  userSelect: 'none',
  '& .code-text': {
    flex: 1,
  },
}));

const Input = styled(InputBase)(({ theme }) => ({
  ...theme.text.Body_16_Reg,
  flex: 1,
  color: 'white',
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  '&::placeholder': {
    color: '#9C9C9C',
  },
}));

const Separator = styled(Box)(({}) => ({
  width: 2,
  height: '100%',
  border: '1px solid #FFFFFF',
  borderRadius: 1,
}));

const Menu = styled(Box)(({}) => ({
  minWidth: DEFAULT_WIDTH,
  maxHeight: 410,
  backgroundColor: '#F5F5F5',
  borderRadius: 4,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  overflow: 'auto',
  padding: 18,
  margin: '8px auto',
}));

const Item = styled(Box)(({ theme }) => ({
  ...theme.text.Body_14_Reg,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  color: theme.color.secondary.$100,
  padding: 8,
  '&:hover': {
    backgroundColor: '#D9D9D9',
  },
  '& > img': {
    width: 32,
    height: 24,
    objectFit: 'contain',
    marginRight: 16,
  },
  '& > .code': {
    color: theme.color.secondary.$60,
    marginLeft: 8,
  },
}));

const ErrorMessage = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.text.Caption_12_Reg,
  color: theme.color.highlight,
}));

const PhoneTextField: VFC<PhoneTextFieldProps> = (props) => {
  const {
    rootProps,
    menuProps,
    inputProps,
    placeholder,
    value,
    countryCodeList,
    countryCode,
    onChange,
    errorProps,
    error,
    errorMessage,
    popperProps,
    ...otherProps
  } = props;
  const containerDOM = useRef<HTMLDivElement>(null);
  const [selectedCode, setSelectedCode] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (countryCodeList.length > 0) {
      let code = '';
      if (countryCode !== undefined) {
        code = countryCode;
      } else {
        code = countryCodeList[0].code;
      }
      setSelectedCode(code);
    }
  }, [countryCodeList, countryCode]);

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    callOnchange({ phone: e.target.value });
  };

  const handleOnSelectCountryCodeItem = (item: CountryCodeData) => {
    setShowMenu(false);
    setSelectedCode(item.code);
    callOnchange({ code: item.code });
  };

  const callOnchange = (options?: { code?: string; phone?: string }) => {
    const { code, phone } = options ?? {};
    onChange({
      code: code !== undefined ? code : selectedCode,
      phone: phone !== undefined ? phone : inputValue,
    });
  };

  const countryCodeItems = countryCodeList.map((d) => {
    return (
      <Item
        key={`country-code-item-code-${d.code}-country-${d.name}`}
        onClick={() => handleOnSelectCountryCodeItem(d)}
      >
        <img src={d.src} alt={d.name} />
        {d.name}
        <span className="code">{`+${d.code}`}</span>
      </Item>
    );
  });

  return (
    <Root {...rootProps}>
      <TextField
        ref={containerDOM}
        className={classnames({
          'container--error': error,
        })}
        {...otherProps}
      >
        <ComponentIcPhoneDbg style={{ marginRight: 6 }} />
        <PhoneCode onClick={() => setShowMenu(!showMenu)}>
          <span className="code-text">{`+${selectedCode}`}</span>
          {showMenu ? (
            <KeyboardArrowUp style={{ margin: '0 6px' }} />
          ) : (
            <KeyboardArrowDownIcon style={{ margin: '0 6px' }} />
          )}
          <Separator />
        </PhoneCode>
        <Input
          type="tel"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputOnChange}
          {...inputProps}
        />
      </TextField>
      {showMenu && (
        <Popper
          open={showMenu}
          anchorEl={containerDOM.current}
          placement="bottom-start"
          {...popperProps}
        >
          <ClickAwayListener
            onClickAway={() => {
              setShowMenu(false);
            }}
          >
            <Menu {...menuProps}>{countryCodeItems}</Menu>
          </ClickAwayListener>
        </Popper>
      )}
      {error && (
        <ErrorMessage {...errorProps}>
          <IcErrorIfo /> {errorMessage}
        </ErrorMessage>
      )}
    </Root>
  );
};

PhoneTextField.defaultProps = {
  error: false,
};

export default PhoneTextField;
