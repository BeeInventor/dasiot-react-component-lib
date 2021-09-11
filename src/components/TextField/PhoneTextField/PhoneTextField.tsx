import React, { VFC, useState, useEffect, ChangeEvent, useRef } from 'react';
import Popper from '@material-ui/core/Popper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import classnames from 'classnames';
import { PhoneTextFieldProps } from './PhoneTextField.types';
import { Theme } from '@material-ui/core';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ComponentIcPhoneDbg from '../../../svg/ComponentIcPhoneDbg';
import IcErrorIfo from '../../../svg/IcErrorIfo';
import { CountryCodeData } from '../../../Theme.types';

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
    code: {
      display: 'flex',
      cursor: 'pointer',
    },
    input: {
      ...theme.text.Body_16_Reg,
      flex: 1,
      color: 'white',
      backgroundColor: 'transparent',
      outline: 'none',
      border: 'none',
      '&::placeholder': {
        color: '#9C9C9C',
      },
    },
    separator: {
      width: 2,
      height: '100%',
      border: '1px solid #FFFFFF',
      borderRadius: 1,
      margin: '0 16px 0 12px',
    },
    'dropdown-menu': {
      minWidth: DEFAULT_WIDTH,
      maxHeight: 410,
      backgroundColor: '#F5F5F5',
      borderRadius: 4,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      overflow: 'auto',
      padding: 18,
      margin: '8px auto',
    },
    item: {
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
    },
    'error-container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...theme.text.Caption_12_Reg,
      color: theme.color.highlight,
    },
  }),
  { name: 'PhoneTextField' },
);

const PhoneTextField: VFC<PhoneTextFieldProps> = (props) => {
  const {
    externalContainerClassName,
    className,
    inputProps = {},
    placeholder,
    value,
    countryCodeList,
    countryCode,
    onChange,
    errorContainerClassName,
    error,
    errorMessage,
  } = props;
  const localClasses = useStyles();
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
      <div
        key={`country-code-item-code-${d.code}-country-${d.name}`}
        className={localClasses.item}
        onClick={() => handleOnSelectCountryCodeItem(d)}
      >
        <img src={d.src} alt={d.name} />
        {d.name}
        <span className="code">{`+${d.code}`}</span>
      </div>
    );
  });

  return (
    <div
      className={classnames(
        localClasses['external-container'],
        externalContainerClassName,
      )}
    >
      <div
        ref={containerDOM}
        className={classnames(localClasses.container, className, {
          [localClasses['container--error']]: error,
        })}
      >
        <ComponentIcPhoneDbg style={{ marginRight: 6 }} />
        <div className={localClasses.code}>
          <span onClick={() => setShowMenu(!showMenu)}>+{selectedCode}</span>
          {showMenu ? (
            <KeyboardArrowUp style={{ marginLeft: 8 }} />
          ) : (
            <KeyboardArrowDownIcon style={{ marginLeft: 8 }} />
          )}
        </div>
        <div className={localClasses.separator} />
        <input
          className={localClasses.input}
          type="tel"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputOnChange}
          {...inputProps}
        />
      </div>
      {showMenu && (
        <Popper
          open={showMenu}
          anchorEl={containerDOM.current}
          placement="bottom-start"
        >
          <div className={localClasses['dropdown-menu']}>
            {countryCodeItems}
          </div>
        </Popper>
      )}
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

PhoneTextField.defaultProps = {
  error: false,
};

export default PhoneTextField;
