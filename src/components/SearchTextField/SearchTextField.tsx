import { Box, styled } from '@mui/material';
import React from 'react';

import { SearchTextFieldProps } from './SearchTextField.type';
import SearchSvgIcon from '../../svg/SearchSvgIcon';

const Container = styled(Box)`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  min-width: 220px;
  min-height: 40px;
  color: ${({ theme }) => theme.color.secondary.$80};
  background: #ffffff;
  border-radius: 4px;

  & > input {
    display: inline-block;
    font: inherit;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    border: none;
    outline: none;
    margin-left: 16px;

    &::placeholder {
      color: ${({ theme }) => theme.color.secondary.$60};
    }
  }
`;

const SearchTextField: React.FC<SearchTextFieldProps> = ({
  inputProps,
  onChange,
  ...otherProps
}) => {
  return (
    <Container {...otherProps}>
      <input type="text" onChange={onChange} {...inputProps} />
      <SearchSvgIcon />
    </Container>
  );
};

export default SearchTextField;
