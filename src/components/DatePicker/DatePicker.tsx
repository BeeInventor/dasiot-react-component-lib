import React, { useState, VFC, useMemo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  addMonths,
  isAfter,
  isBefore,
} from 'date-fns';
import { DatePickerProps } from './DatePicker.types';
import calendarSVG from '../../assets/image/svg/btn_ic_calendar.svg';
import arrowLeftSVG from '../../assets/image/svg/arrow-left.svg';
import arrowRightSVG from '../../assets/image/svg/arrow-right.svg';
import { Theme } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      ...theme.text.Subtitle_16_Med,
      cursor: 'pointer',
      display: 'inline-flex',
      minWidth: 200,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFF',
      paddingLeft: 16,
      borderRadius: 4,
    },
    icon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
    },
    calendar: {
      userSelect: 'none',
      display: 'inline-block',
      backgroundColor: '#FFF',
      padding: 32,
      borderRadius: 8,
      margin: 8,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    },
    operation: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      '& > img': {
        cursor: 'pointer',
      },
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 32px)',
      // columnGap: 8,
      gridTemplateRows: 'repeat(6, 32px)',
      rowGap: 10,
    },
    extenalItem: {
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
    },
    item: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 32,
      height: 32,
      color: '#404040',
    },
    week: {
      color: '#727272',
      fontSize: 10,
      fontFamily: '"Noto Sans Mono", monospace',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
    },
    day: {
      cursor: 'pointer',
      borderRadius: '50%',
      '&.start, &.end': {
        backgroundColor: 'rgba(255, 193, 31)',
      },
    },
    thisMounth: {
      color: '#808080',
    },
  }),
  {
    name: 'DatePicker',
  },
);

const DatePicker: VFC<DatePickerProps> = (props) => {
  const { locale, startDate, endDate } = props;
  const classes = useStyles();
  const [tempDate, setTempDate] = useState(startDate);

  const handlePrevious = () => {
    setTempDate(startOfMonth(addMonths(tempDate, -1)));
  };

  const handleNextMonth = () => {
    setTempDate(startOfMonth(addMonths(tempDate, 1)));
  };

  const weekStrings = useMemo(() => {
    const week = [];
    for (let i = 0; i < 7; i += 1) {
      week.push(
        <div
          key={`week-string-${i}`}
          className={classNames(classes.item, classes.week)}
        >
          {format(addDays(startOfWeek(new Date()), i), 'iii', {
            locale,
          })}
        </div>,
      );
    }
    return week;
  }, []);

  const days = useMemo(() => {
    const localStartDate = startOfWeek(startOfMonth(tempDate));
    const monthEndDate = endOfMonth(tempDate);
    const days = [];
    const startDateRegex = new RegExp(format(startDate, 'yyyy-MM-d'));
    const endDateRegex = new RegExp(format(endDate, 'yyyy-MM-d'));
    const nextDateOfendDateRegex = new RegExp(
      format(addDays(endDate, 1), 'yyyy-MM-d'),
    );

    let isSelected = false;
    let prefix = format(localStartDate, 'yyyy-MM');

    if (localStartDate.getMonth() !== tempDate.getMonth()) {
      if (
        isAfter(localStartDate, startDate) &&
        isBefore(localStartDate, endDate)
      )
        isSelected = true;
      for (
        let i = localStartDate.getDate();
        i <= endOfMonth(localStartDate).getDate();
        i += 1
      ) {
        if (startDateRegex.test(`${prefix}-${i}`)) isSelected = true;
        if (nextDateOfendDateRegex.test(`${prefix}-${i}`)) isSelected = false;
        days.push(
          <div
            key={`day-${localStartDate.getMonth()}-${i}-${Math.random().toString(
              16,
            )}`}
            className={classNames(classes.extenalItem, {
              start: startDateRegex.test(`${prefix}-${i}`),
              end: endDateRegex.test(`${prefix}-${i}`),
              selected: isSelected,
            })}
          >
            <div
              className={classNames(classes.item, classes.day, {
                start: startDateRegex.test(`${prefix}-${i}`),
                end: endDateRegex.test(`${prefix}-${i}`),
              })}
            >
              {i}
            </div>
          </div>,
        );
      }
    }

    prefix = format(tempDate, 'yyyy-MM');
    for (let i = 1; i <= monthEndDate.getDate(); i += 1) {
      if (startDateRegex.test(`${prefix}-${i}`)) isSelected = true;
      if (nextDateOfendDateRegex.test(`${prefix}-${i}`)) isSelected = false;
      days.push(
        <div
          key={`day-${tempDate.getMonth()}-${i}-${Math.random().toString(16)}`}
          className={classNames(classes.extenalItem, {
            start: startDateRegex.test(`${prefix}-${i}`),
            end: endDateRegex.test(`${prefix}-${i}`),
            selected: isSelected,
          })}
        >
          <div
            className={classNames(
              classes.item,
              classes.day,
              classes.thisMounth,
              {
                start: startDateRegex.test(`${prefix}-${i}`),
                end: endDateRegex.test(`${prefix}-${i}`),
              },
            )}
          >
            {i}
          </div>
        </div>,
      );
    }

    const len = days.length;
    const nextMonth = addMonths(tempDate, 1);
    prefix = format(nextMonth, 'yyyy-MM');

    for (let i = 1; i <= 42 - len; i += 1) {
      if (startDateRegex.test(`${prefix}-${i}`)) isSelected = true;
      if (nextDateOfendDateRegex.test(`${prefix}-${i}`)) isSelected = false;
      days.push(
        <div
          key={`day-${nextMonth.getMonth()}-${i}-${Math.random().toString(16)}`}
          className={classNames(classes.extenalItem, {
            start: startDateRegex.test(`${prefix}-${i}`),
            end: endDateRegex.test(`${prefix}-${i}`),
            selected: isSelected,
          })}
        >
          <div
            className={classNames(classes.item, classes.day, {
              start: startDateRegex.test(`${prefix}-${i}`),
              end: endDateRegex.test(`${prefix}-${i}`),
            })}
          >
            {i}
          </div>
        </div>,
      );
    }

    return days;
  }, [tempDate]);

  return (
    <>
      <div className={classes.container}>
        {format(startDate, 'MM/dd', {
          locale,
        })}
        {' - '}
        {format(endDate, 'MM/dd', {
          locale,
        })}
        <div className={classes.icon}>
          <img src={calendarSVG} />
        </div>
      </div>
      <div className={classes.calendar}>
        <div className={classes.operation}>
          <img src={arrowLeftSVG} onClick={handlePrevious} />
          {format(tempDate, 'MMMM yyyy', {
            locale,
          })}
          <img src={arrowRightSVG} onClick={handleNextMonth} />
        </div>
        <div className={classes.gridContainer}>
          {weekStrings}
          {days}
        </div>
      </div>
    </>
  );
};

export default DatePicker;
