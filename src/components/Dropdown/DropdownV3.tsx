import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { Popper as MuIPopper } from '@mui/material';
import { DropDownItem, DropDownProps } from './Dropdown.type';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Icon from '../Icon/Icon';
import CheckSvg from '../../assets/image/svg/check.svg';

const Root = styled(Box)(({ theme }) => ({
  fontFamily: '"Noto Sans TC", "Noto Sans"',
  fontSize: '0.875rem',
  lineHeight: 1.5,
  minWidth: 220,
  height: 40,
  userSelect: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: theme.color.secondary.$80,
  backgroundColor: '#FFF',
  padding: '8px 0px 8px 16px',
  borderRadius: 4,
  // Ellipsis for selected text
  '.Dropdown-selected-text': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    flex: 1,
    minWidth: 0,
    marginRight: 8,
    display: 'block',
    fontFamily: '"Noto Sans TC", "Noto Sans"',
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
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

const Popper = styled(MuIPopper)(({ theme }) => ({
  maxHeight: '200px',
  overflow: 'auto',
}));

const Item = styled(Box, { label: 'Dropdown-item' })(({ theme }) => ({
  fontFamily: '"Noto Sans TC", "Noto Sans"',
  fontSize: '0.875rem',
  lineHeight: 1.5,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',

  width: '100%', // Ensure item fills parent width
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, .05)',
  },

  '.Dropdown-icon': {
    width: 24,
    minWidth: 24,
    maxWidth: 24,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  '.Dropdown-item-text': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    flex: 1,
    minWidth: 0,
    width: '100%', // Ensure text fills available space
    fontFamily: '"Noto Sans TC", "Noto Sans"',
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
}));

const DropdownV3: React.FC<DropDownProps> = (props) => {
  const {
    list,
    itemProps,
    placeholder,
    selectedId,
    disabled,
    onSelect,
    popperProps,
    selectionId,
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
    onSelect(item.value, item);
  };

  const items = list
    .filter((item) => item.id !== selectionId)
    .map((item) => (
      <Item
        key={`dropdown-item-${item.id}`}
        className="Dropdown-item"
        onClick={() => handleOnClick(item)}
        {...itemProps}
      >
        <Icon className="Dropdown-icon">
          {selectedItem?.id === item.id && <img src={CheckSvg} />}
        </Icon>
        <span className="Dropdown-item-text">{item.name}</span>
      </Item>
    ));

  return (
    <>
      <Root
        ref={selectRef}
        className={classNames(
          'Dropdown-root',
          {
            'Dropdown-empty': !selectedId,
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
        <span className="Dropdown-selected-text">
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
        className="Dropdown-popper"
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

export default DropdownV3;
