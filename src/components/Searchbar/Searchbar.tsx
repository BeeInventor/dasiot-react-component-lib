import React, { useState, useEffect, ChangeEvent } from 'react';
import { SearchbarProps } from './Searchbar.types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import BtnIcSearch from '../../svg/BtnIcSearch';
import LanguageButton from '../Button/LanguageButton';
import { LanguageData } from '../Button/LanguageButton/LanguageButton.types';

const Root = styled(Box)(({}) => ({
  display: 'flex',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))',
  backgroundColor: '#FFF',
}));

const SearchInputContainer = styled(Box)(({}) => ({
  flex: 1,
  display: 'flex',
  padding: '17px 48px',
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  ...theme.typography.h3,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  color: theme.color.secondary.$100,
  border: 'none',
  outline: 'none',
  marginLeft: 16,
  '&::placeholder': {
    color: theme.color.secondary.$60,
  },
}));

const Operation = styled(Box)(({}) => ({
  display: 'flex',
}));

const Searchbar: React.FC<SearchbarProps> = (props) => {
  const {
    operationNode,
    LanguageButtonProps,
    value,
    onChange,
    onSelect,
    inputContainerProps,
    ...otherProps
  } = props;
  const [inputValue, setInputValue] = useState<string | undefined>('');

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
    <Root {...otherProps}>
      <SearchInputContainer {...inputContainerProps}>
        <BtnIcSearch
          color={(inputValue ?? '') === '' ? '#A1A1A1' : '#3E3E3E'}
        />
        <SearchInput value={inputValue} onChange={handleOnChange} />
      </SearchInputContainer>
      <Operation>
        {operationNode}
        <LanguageButton
          list={[]}
          {...LanguageButtonProps}
          onSelect={handleOnSelect}
        />
      </Operation>
    </Root>
  );
};

Searchbar.defaultProps = {
  operationNode: undefined,
  value: '',
};

export default Searchbar;
