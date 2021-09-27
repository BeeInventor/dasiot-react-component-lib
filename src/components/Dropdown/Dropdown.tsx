import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Popper from '@material-ui/core/Popper';
import { DropDownItem, DropDownProps } from './Dropdown.type';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CheckSvg from '../../assets/image/svg/check.svg';

const useStyles = makeStyles(
  (theme) => ({
    select: {
      ...theme.text.Subtitle_16_Med,
      userSelect: 'none',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: theme.color.secondary.$80,
      backgroundColor: '#FFF',
      padding: '8px 0px 8px 16px',
      borderRadius: 4,
    },
    'select-empty': {
      color: theme.color.secondary.$60,
    },
    'select--disabled': {
      opacity: 0.3,
      pointerEvents: 'none',
    },
    icon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 24,
    },
    list: {
      backgroundColor: '#FFF',
      margin: '8px auto',
      borderRadius: 4,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    },
    item: {
      ...theme.text.Subtitle_16_Med,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      lineHeight: 2.5,
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, .05)',
      },
    },
    itemIcon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
    },
  }),
  { name: 'Dropdown' },
);

function Dropdown({
  className,
  list,
  listClassName,
  itemClassName,
  placeholder,
  selectedId,
  disabled,
  onSelect,
}: DropDownProps): JSX.Element {
  const selectRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();
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
    }
  }, [selectedId]);

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

  const items = list.map((item) => (
    <div
      key={`dropdown-item-${item.id}`}
      className={classnames(classes.item, itemClassName)}
      onClick={() => handleOnClick(item)}
    >
      <div className={classes.itemIcon}>
        {selectedItem?.id === item.id && <img src={CheckSvg} />}
      </div>
      {item.name}
    </div>
  ));

  return (
    <>
      <div
        ref={selectRef}
        className={classnames(
          classes.select,
          {
            [classes['select-empty']]: !selectedItem,
          },
          className,
          {
            [classes['select--disabled']]: disabled,
          },
        )}
        onClick={handleOnClickSelect}
      >
        {selectedItem?.name ?? placeholder}
        <div className={classes.icon}>
          {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </div>
      </div>
      <Popper
        anchorEl={selectRef.current}
        open={isOpen}
        placement="bottom"
        popperRef={(ref) => {
          if (listClassName) {
            ref?.popper.classList.add(classnames(listClassName));
          }
        }}
      >
        <ClickAwayListener onClickAway={handleOnClickAway}>
          <div
            className={classes.list}
            style={{ width: selectRef.current?.offsetWidth ?? 'auto' }}
          >
            {items}
          </div>
        </ClickAwayListener>
      </Popper>
    </>
  );
}

export default Dropdown;
