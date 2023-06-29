import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popper from '@mui/material/Popper';
import { styled } from '@mui/material/styles';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '../../Icon/Icon';
import CheckboxLight from './CheckboxLight';
import { DropdownCheckboxProps } from './DropdownColor.type';

const Root = styled(Box)(({ theme }) => ({
  ...theme.typography.h3,
  minWidth: 220,
  userSelect: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: theme.color.secondary.$80,
  backgroundColor: '#FFF',
  padding: '8px 0px 8px 16px',
  borderRadius: 4,
  '&.dark': {
    color: 'white',
    backgroundColor: 'rgba(0, 0 ,0, 0.2)',
  },
  '&.Dropdown-empty': {
    color: theme.color.secondary.$60,
    '&.dark': {
      color: theme.color.secondary.$80,
    },
  },
  '&.Dropdown--disabled': {
    opacity: 0.3,
    pointerEvents: 'none',
  },
}));

const List = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFF',
  margin: '8px auto',
  borderRadius: 4,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  '&.dark': {
    color: 'white',
    backgroundColor: theme.color.secondary.$100,
  },
}));

interface ItemProps {
  selected: boolean;
}

const Item = styled(Box, { label: 'Dropdown-item' })<ItemProps>(
  ({ theme, selected }) => ({
    ...theme.typography.h3,
    cursor: 'pointer',
    // display: 'flex',
    // alignItems: 'center',
    // lineHeight: 2.5,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, .05)',
    },
    backgroundColor: selected ? 'rgba(0, 0, 0, .05)' : 'unset',
  }),
);

const ContainerLabel = styled('div')`
  display: flex;
  align-items: center;
  max-width: 320px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  gap: 10px;
`;

const DropdownCheckbox: React.VFC<DropdownCheckboxProps> = (props) => {
  const {
    list,
    itemProps,
    placeholder,
    selectedIds,
    disabled,
    onSelect,
    popperProps,
    selectionId,
    mode = 'light',
    ...otherProps
  } = props;
  const selectRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [itemChecked, setItemChecked] = useState<string[]>([]);

  const handleOnClickSelect = () => {
    setIsOpen(true);
  };

  const handleOnClickAway = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (itemChecked.length > 0) {
      onSelect(itemChecked);
    }
  }, [itemChecked]);

  useEffect(() => {
    if (selectedIds === undefined || selectedIds.length === 0) {
      setItemChecked([]);
    } else {
      setItemChecked(selectedIds);
    }
  }, [selectedIds]);

  const onChangeCheckbox = (value: any) => {
    const newValue = value;
    const updateValue = [...itemChecked];
    if (itemChecked.includes(newValue)) {
      updateValue.splice(updateValue.indexOf(newValue), 1);
    } else {
      updateValue.push(newValue);
    }
    setItemChecked(updateValue);
  };

  const items = list
    .filter((item) => item.id !== selectionId)
    .map((item) => (
      <Item
        key={`dropdown-item-${item.id}`}
        // className="Dropdown-item"
        selected={itemChecked.includes(item.value as string)}
        {...itemProps}
      >
        <CheckboxLight
          checked={itemChecked.includes(item.value as string)}
          label={item.name}
          value={item.value}
          onChange={onChangeCheckbox}
        />
      </Item>
    ));

  return (
    <>
      <Root
        ref={selectRef}
        className={classNames(
          'Dropdown-root',
          {
            'Dropdown-empty': !selectedIds,
          },
          {
            'Dropdown--disabled': disabled,
          },
          {
            dark: mode === 'dark',
            light: mode === 'light',
          },
        )}
        onClick={handleOnClickSelect}
        {...otherProps}
      >
        {itemChecked && itemChecked.length > 0 ? (
          <ContainerLabel>
            {list
              .filter((t) => itemChecked.includes(t.value as string))
              .map((d) => d.name)
              .join(', ')}
          </ContainerLabel>
        ) : (
          placeholder
        )}

        <Icon className="Dropdown-icon">
          {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </Icon>
      </Root>
      <Popper
        anchorEl={selectRef.current}
        open={isOpen}
        placement="bottom"
        {...popperProps}
      >
        <ClickAwayListener onClickAway={handleOnClickAway}>
          <List
            className={classNames({
              dark: mode === 'dark',
              light: mode === 'light',
            })}
            style={{ width: selectRef.current?.offsetWidth ?? 'auto' }}
          >
            {items}
          </List>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default DropdownCheckbox;
