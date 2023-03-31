import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import {
  styled,
  Popper as MuiPopper,
  PopperProps,
  Paper as MuiPaper,
  ClickAwayListener,
} from '@mui/material';

import ArrowDown from '../../../svg/ArrowDown';

interface ContainerProps extends HTMLAttributes<HTMLButtonElement> {
  color?: React.CSSProperties['color'];
  bgColor?: React.CSSProperties['backgroundColor'];
  disabled?: boolean;
}

const shouldForwardProp = (propName: PropertyKey) => {
  return propName !== 'color' && propName !== 'bgColor';
};

const Container = styled('button', { shouldForwardProp })<ContainerProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  min-width: 120px;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  border-radius: 4px;
  color: ${({ color }) => color ?? '#fff'};
  padding: 0 10px 0 26px;
  background-color: ${({ bgColor, theme }) =>
    bgColor ?? theme.color.secondary.$60};
  border: none;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;

const Popper = styled(MuiPopper)`
  &.MuiPopper-root {
    z-index: 1;
  }
`;

const Paper = styled(MuiPaper)`
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    & > li {
      padding: 5px;
    }
  }
`;

interface ItemProps {
  color?: React.CSSProperties['color'];
}

const Item = styled('div')<ItemProps>`
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondary.$60};
  padding: 5.5px 8px;
  border-radius: 4px;

  &.selected {
    color: ${({ theme }) => theme.color.secondary.$100};
    pointer-events: none;
  }

  &:hover {
    color: ${({ theme }) => theme.color.secondary.$100};
    background-color: ${({ theme }) => theme.color.box_bbg};
  }

  &::before {
    display: inline-block;
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 4px;
    background-color: ${({ color, theme }) =>
      color ?? theme.color.secondary.$60};
    margin-right: 17px;
  }
`;

export interface StatusDropdownProps {
  defaultStatus?: string;
  statusMap: {
    [status: string]: {
      color?: React.CSSProperties['color'];
      bgColor?: React.CSSProperties['backgroundColor'];
      displayName: string;
    };
  };
  disabled?: boolean;
  popperProps?: PopperProps;
  onSelect?: (status: string) => void;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({
  defaultStatus,
  statusMap,
  disabled,
  popperProps,
  onSelect,
}) => {
  const entries = Object.entries(statusMap);
  const [status, setStatus] = useState(defaultStatus ?? entries[0][0]);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (defaultStatus) {
      setStatus(defaultStatus);
    }
  }, [defaultStatus]);

  return (
    <>
      <Container
        ref={buttonRef}
        color={statusMap[status].color}
        bgColor={statusMap[status].bgColor}
        onClick={() => setOpen(!open)}
        disabled={disabled}
      >
        {statusMap[status].displayName}
        <ArrowDown />
      </Container>
      <Popper
        open={open}
        anchorEl={buttonRef.current}
        placement="bottom-start"
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
          ],
        }}
        {...popperProps}
      >
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Paper>
            <ul>
              {entries.map(([key, value]) => {
                return (
                  <li
                    key={`status-item-${key}`}
                    onClick={() => {
                      setStatus(key);
                      setOpen(false);
                      onSelect?.(key);
                    }}
                  >
                    <Item
                      className={`${key === status ? 'selected' : ''}`}
                      color={value.bgColor}
                    >
                      {value.displayName}
                    </Item>
                  </li>
                );
              })}
            </ul>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default StatusDropdown;
