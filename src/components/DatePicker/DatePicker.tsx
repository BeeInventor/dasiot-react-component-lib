import React, { useState, VFC, useMemo, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  addMonths,
  isAfter,
  isBefore,
  isEqual,
  endOfDay,
  addSeconds,
} from 'date-fns';
import { styled } from '@mui/material/styles';
import { DatePickerProps } from './DatePicker.types';
import calendarSVG from '../../assets/image/svg/btn_ic_calendar.svg';
import arrowLeftSVG from '../../assets/image/svg/arrow-left.svg';
import arrowRightSVG from '../../assets/image/svg/arrow-right.svg';
import endOfMonth from 'date-fns/endOfMonth';
import Icon from '../Icon/Icon';

const Root = styled(Box)(({ theme }) => ({
  ...theme.text.Subtitle_16_Med,
  cursor: 'pointer',
  display: 'inline-flex',
  minWidth: 156,
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#FFF',
  paddingLeft: 16,
  borderRadius: 4,
}));

const Placeholder = styled('span')(({ theme }) => ({
  color: theme.color.secondary.$60,
}));

const Calendar = styled(Box, { label: 'Calendar' })(({}) => ({
  userSelect: 'none',
  display: 'inline-block',
  backgroundColor: '#FFF',
  padding: 32,
  borderRadius: 8,
  margin: '8px auto',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
}));

const Operation = styled(Box)(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
  '& > img': {
    cursor: 'pointer',
    '&.notAllowed': {
      cursor: 'not-allowed',
    },
  },
}));

const GridContainer = styled(Box)(({}) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 32px)',
  gridTemplateRows: 'repeat(6, 32px)',
  rowGap: 10,
}));

const ExternalItem = styled(Box)(({}) => ({
  '&.start': {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  '&.end': {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
  '&:nth-child(7n + 1)': {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  '&:nth-child(7n)': {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
  '&.selected': {
    '& > div': {
      color: '#936A00',
    },
    backgroundColor: 'rgba(255, 193, 31, .2)',
  },
}));

const Item = styled(Box)(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 32,
  height: 32,
  color: '#404040',
  '&.week': {
    color: '#727272',
    fontSize: 10,
    fontFamily: '"Noto Sans Mono", monospace',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
  '&.day': {
    cursor: 'pointer',
    borderRadius: '50%',
    '&.start, &.end': {
      backgroundColor: 'rgba(255, 193, 31)',
    },
  },
  '&.currentMonth': {
    color: '#808080',
  },
  '&.outOfRange': {
    cursor: 'not-allowed',
    color: 'rgba(128, 128, 128, 0.3)',
  },
}));

const DatePicker: VFC<DatePickerProps> = (props) => {
  const {
    type,
    locale,
    startDate,
    endDate,
    placeholder,
    onSelect,
    limitFrom,
    limitTo,
    popperProps,
    ...otherProps
  } = props;
  const containerRef = useRef(null);
  const [localStartDate, setLocalStartDate] = useState(startDate || new Date());
  const [localEndDate, setLocalEndDate] = useState(endDate || new Date());
  const [referenceDate, setReferenceDate] = useState(startDate || new Date());
  const [clickCount, setClickCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (startDate && !isEqual(startDate, localStartDate)) {
      setLocalStartDate(startDate);
      setReferenceDate(startDate);
    }
    if (endDate && !isEqual(endDate, localEndDate)) {
      setLocalEndDate(endDate);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (startDate || endDate) setIsDirty(true);
  }, [startDate, endDate]);

  const handlePrevious = () => {
    const date = startOfMonth(addMonths(referenceDate, -1));
    if (limitFrom && isAfter(date, limitFrom)) {
      setReferenceDate(date);
    } else if (!limitFrom) {
      setReferenceDate(date);
    }
  };

  const handleNextMonth = () => {
    const date = startOfMonth(addMonths(referenceDate, 1));
    if (limitTo && isBefore(date, limitTo)) {
      setReferenceDate(date);
    } else if (!limitTo) {
      setReferenceDate(date);
    }
  };

  const handleClosePopper = () => {
    setIsOpen(false);
    setClickCount(0);
  };

  const weekStrings = useMemo(() => {
    const week = [];
    for (let i = 0; i < 7; i += 1) {
      week.push(
        <Item key={`week-string-${i}`} className="week">
          {format(addDays(startOfWeek(new Date()), i), 'iii', {
            locale,
          })}
        </Item>,
      );
    }
    return week;
  }, []);

  const days = useMemo(() => {
    const days = [];
    const beginDate = startOfWeek(startOfMonth(referenceDate));
    const localStartDateString = format(localStartDate, 'yyyy-MM-dd');
    const localEndDateString = format(localEndDate, 'yyyy-MM-dd');

    const handleOnSelectDate = (date: Date) => {
      if (limitFrom && (isBefore(date, limitFrom) || isEqual(date, limitFrom)))
        return;
      if (limitTo && (isAfter(date, limitTo) || isEqual(date, limitTo))) return;

      setIsDirty(true);
      if (type === 'date') {
        setLocalStartDate(date);
        setLocalEndDate(date);
        onSelect(date);
      } else {
        if (clickCount === 0) {
          setLocalStartDate(date);
          onSelect([date, localEndDate]);
        } else {
          const end = endOfDay(date);
          setLocalEndDate(end);
          onSelect([localStartDate, end]);
        }
        setClickCount((clickCount + 1) % 2);
      }
    };

    const endOfPreviousMonth = addSeconds(startOfMonth(referenceDate), -1);
    const endOfCurrentMonth = endOfMonth(referenceDate);

    for (let i = 0; i < 42; i += 1) {
      const day = addDays(beginDate, i);
      const equalLocalStartDate =
        format(day, 'yyyy-MM-dd') === localStartDateString;
      const equalLocalEndDate =
        format(day, 'yyyy-MM-dd') === localEndDateString;

      days.push(
        <ExternalItem
          key={`day-${day.getMonth()}-${day.getDate()}`}
          className={classNames({
            start: equalLocalStartDate,
            end: equalLocalEndDate,
            selected:
              equalLocalStartDate ||
              (isAfter(day, localStartDate) && isBefore(day, localEndDate)) ||
              equalLocalEndDate,
          })}
        >
          <Item
            className={classNames('day', {
              start: equalLocalStartDate,
              end: equalLocalEndDate,
              outOfRange:
                (limitFrom
                  ? isBefore(day, limitFrom) || isEqual(day, limitFrom)
                  : false) ||
                (limitTo
                  ? isAfter(day, limitTo) || isEqual(day, limitTo)
                  : false),
              currentMonth:
                isAfter(day, endOfPreviousMonth) &&
                isBefore(day, endOfCurrentMonth),
            })}
            onClick={() => handleOnSelectDate(day)}
          >
            {day.getDate()}
          </Item>
        </ExternalItem>,
      );
    }

    return days;
  }, [
    referenceDate,
    localStartDate,
    localEndDate,
    clickCount,
    limitFrom,
    limitTo,
  ]);

  return (
    <>
      <Root ref={containerRef} onClick={() => setIsOpen(true)} {...otherProps}>
        {!isDirty ? (
          <Placeholder>
            {type === 'date' ? placeholder : `${placeholder} - ${placeholder}`}
          </Placeholder>
        ) : (
          <>
            {format(localStartDate, 'MM/dd', {
              locale,
            })}
            {type === 'range' && (
              <>
                {' - '}
                {format(localEndDate, 'MM/dd', {
                  locale,
                })}
              </>
            )}
          </>
        )}
        <Icon>
          <img src={calendarSVG} />
        </Icon>
      </Root>
      <Popper
        open={isOpen}
        anchorEl={containerRef.current}
        placement="bottom-start"
        {...popperProps}
      >
        <ClickAwayListener onClickAway={handleClosePopper}>
          <Calendar>
            <Operation>
              <img
                className={classNames({
                  notAllowed: limitFrom
                    ? isBefore(
                        addMonths(startOfMonth(referenceDate), -1),
                        limitFrom,
                      ) ||
                      isEqual(
                        addMonths(startOfMonth(referenceDate), -1),
                        limitFrom,
                      )
                    : false,
                })}
                src={arrowLeftSVG}
                onClick={handlePrevious}
              />
              {format(referenceDate, 'MMMM yyyy', {
                locale,
              })}
              <img
                className={classNames({
                  notAllowed: limitTo
                    ? isAfter(
                        addMonths(startOfMonth(referenceDate), 1),
                        limitTo,
                      ) ||
                      isEqual(
                        addMonths(startOfMonth(referenceDate), 1),
                        limitTo,
                      )
                    : false,
                })}
                src={arrowRightSVG}
                onClick={handleNextMonth}
              />
            </Operation>
            <GridContainer>
              {weekStrings}
              {days}
            </GridContainer>
          </Calendar>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

DatePicker.defaultProps = {
  type: 'date',
};

export default DatePicker;
