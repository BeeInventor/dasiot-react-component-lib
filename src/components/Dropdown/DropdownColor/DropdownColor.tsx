import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popper from '@mui/material/Popper';
import { styled } from '@mui/material/styles';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '../../Icon/Icon';
import { DropDownColorItem, DropDownColorProps } from './DropdownColor.type';

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

interface PathLabelProps {
  color: string;
}

const PathLabel = styled('span')<PathLabelProps>`
  margin: 0;
  padding: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

interface OrgLabelProps {
  color: string;
}

const OrgLabel = styled('span')<OrgLabelProps>`
  margin: 0;
  padding: 0;
  width: 6px;
  height: 14px;
  border-radius: 3px;
  background-color: ${({ color }) => color};
`;

interface ItemProps {
  selected: boolean;
}

const Item = styled(Box, { label: 'Dropdown-item' })<ItemProps>(
  ({ theme, selected }) => ({
    ...theme.typography.h3,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    lineHeight: 2.5,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, .05)',
    },
    backgroundColor: selected ? 'rgba(0, 0, 0, .05)' : 'unset',
  }),
);

const ContainerLabel = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DropdownColor: React.VFC<DropDownColorProps> = (props) => {
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
    type = 'path',
    ...otherProps
  } = props;
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<DropDownColorItem | null>(
    null,
  );
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

  const handleOnClick = (item: DropDownColorItem) => {
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
        selected={selectedItem?.id === item.id}
        {...itemProps}
      >
        <Icon className="Dropdown-icon">
          {type === 'path' ? (
            <PathLabel color={item.color} />
          ) : (
            <OrgLabel color={item.color} />
          )}
        </Icon>
        {item.name}
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
        {selectedItem?.name ? (
          <ContainerLabel>
            {type === 'path' ? (
              <PathLabel color={selectedItem?.color ?? '#000'} />
            ) : (
              <OrgLabel color={selectedItem?.color ?? '#000'} />
            )}

            {selectedItem?.name ?? placeholder}
          </ContainerLabel>
        ) : (
          selectedItem?.name ?? placeholder
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

export default DropdownColor;
