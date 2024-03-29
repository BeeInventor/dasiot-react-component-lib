import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import Popper from '@mui/material/Popper';
import { DropDownItem, DropDownProps } from './Dropdown.type';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Icon from '../Icon/Icon';
import CheckSvg from '../../assets/image/svg/check.svg';

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

  '& .selected-name': {
    minWidth: 0,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
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
  isExceptance?: boolean;
}

const Item = styled(Box, {
  label: 'Dropdown-item',
  shouldForwardProp: (prop) => prop !== 'isExceptance',
})<ItemProps>(({ theme, isExceptance }) => ({
  ...theme.typography.h3,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  lineHeight: 2.5,
  position: 'relative',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, .05)',
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '1px',
    width: '90%',
    margin: 'auto',
    borderBottom: isExceptance
      ? `1px solid ${theme.color.secondary.$40}`
      : 'none',
  },
}));

const Dropdown: React.FC<DropDownProps> = (props) => {
  const {
    list,
    isExceptance,
    itemProps,
    placeholder,
    selectedId,
    disabled,
    onSelect,
    popperProps,
    selectionIds,
    mode = 'light',
    ...otherProps
  } = props;
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<DropDownItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedId && selectedId !== selectedItem?.id) {
      for (let i = 0; i < list.length; i++) {
        if (selectedId === list[i].id) {
          setSelectedItem(list[i]);
          break;
        }
      }
    } else if (selectedId === undefined) {
      setSelectedItem(null);
    }
  }, [selectedId]);

  useEffect(() => {
    for (let i = 0; i < list.length; i++) {
      if (selectedId === list[i].id) {
        setSelectedItem(list[i]);
        break;
      }
    }
  }, [list]);

  const handleOnClickSelect = () => {
    setIsOpen(true);
  };

  const handleOnClickAway = () => {
    setIsOpen(false);
  };

  const handleOnClick = (item: DropDownItem) => {
    setIsOpen(false);
    setSelectedItem(item);
    onSelect(item.value, item);
  };

  const items = list
    .filter((item) => !selectionIds?.includes(item.id))
    .map((item, i) => (
      <Item
        key={`dropdown-item-${item.id}`}
        className="Dropdown-item"
        onClick={() => handleOnClick(item)}
        isExceptance={isExceptance && i === 0}
        {...itemProps}
      >
        <Icon className="Dropdown-icon">
          {selectedItem?.id === item.id && <img src={CheckSvg} />}
        </Icon>
        <span title={item.name}>{item.name}</span>
      </Item>
    ));

  return (
    <>
      <Root
        ref={selectRef}
        className={classNames(
          'Dropdown-root',
          {
            'Dropdown-empty': !selectedItem,
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
        <span
          className="selected-name"
          title={selectedItem?.name ?? placeholder}
        >
          {selectedItem?.name ?? placeholder}
        </span>
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

export default Dropdown;
