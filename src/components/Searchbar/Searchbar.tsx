import React, { useState, useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { SearchbarProps } from './Searchbar.types';
import classnames from 'classnames';
import BtnIcSearch from '../../svg/BtnIcSearch';
import LanguageButton from '../Button/LanguageButton';
import { LanguageData } from 'components/Button/LanguageButton/LanguageButton.types';

const useStyles = makeStyles(
  (theme) => ({
    container: {
      display: 'flex',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))',
      backgroundColor: '#FFF',
    },
    searchInputContainer: {
      flex: 1,
      display: 'flex',
      padding: '17px 48px',
    },
    searchInput: {
      ...theme.text.Subtitle_16_Med,
      display: 'block',
      width: '100%',
      height: '100%',
      color: theme.color.secondary.$100,
      border: 'none',
      outline: 'none',
      marginLeft: 16,
      '&::placeholder': {
        color: theme.color.secondary.$60,
      },
    },
    operationContainer: {
      display: 'flex',
    },
  }),
  { name: 'Searchbar' },
);

const Searchbar: React.VFC<SearchbarProps> = ({
  operationNode,
  className,
  inputContainerClassName,
  InputProps,
  LanguageButtonProps,
  value,
  onChange,
  onSelect,
}) => {
  const classes = useStyles();
  const { className: inputClassName, ...otherInputProps } = InputProps || {};
  const [inputValue, setInputValue] = useState<string | undefined>('');

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleOnSelect = (lang: LanguageData) => {
    if (onSelect) {
      onSelect(lang);
    }
  };

  return (
    <div className={classnames(classes.container, className)}>
      <div
        className={classnames(
          classes.searchInputContainer,
          inputContainerClassName,
        )}
      >
        <BtnIcSearch
          color={(inputValue ?? '') === '' ? '#A1A1A1' : '#3E3E3E'}
        />
        <input
          className={classnames(classes.searchInput, inputClassName)}
          value={inputValue}
          onChange={handleOnChange}
          {...otherInputProps}
        />
      </div>
      <div className={classes.operationContainer}>
        {operationNode}
        <LanguageButton {...LanguageButtonProps} onSelect={handleOnSelect} />
      </div>
    </div>
  );
};

Searchbar.defaultProps = {
  operationNode: undefined,
  inputContainerClassName: '',
  InputProps: undefined,
  value: '',
};

export default Searchbar;
