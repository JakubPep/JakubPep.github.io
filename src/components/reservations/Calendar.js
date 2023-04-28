import React, { useEffect, useState } from 'react';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from 'date-fns';
import {
  CalendarComponent,
  ControlBtns,
  ConfirmBtn
} from '../../styledComponents/reservations/calendar';
import pl from 'date-fns/locale/pl';
import Loader from './Loader';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [saveTerm, setTerm] = useState({});
  const [postData, setPostData] = useState(false);

  useEffect(() => {
    setTerm({
      ...saveTerm,
      ['dzień']: selectedDay,
      ['month']: format(currentMonth, 'MMMM', { locale: pl })
    });
  }, [selectedDay]);

  const postDataHandler = () => {
    if(saveTerm.dzień !== null) {
      setPostData(true);
    } else {
      setPostData(false);
    }
  }

  const renderDays = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

    const selectedDayHandler = (e) => {
      setSelectedDay(e.target.innerText);
      setSelectedMonth(currentMonth);
    };

    return days.map((day) => (
      <button onClick={selectedDayHandler} key={day} className={`calendar-day`}>
        <span className="day-number">{format(day, 'd')}</span>
        <span className="day-name">{format(day, 'eeee', { locale: pl })}</span>
      </button>
    ));
  };

  const prevMonth = () => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  return (
    <>
      <CalendarComponent className="App">
        {selectedDay && (
          <p>{`wybrany termin to: ${selectedDay} ${format(
            selectedMonth,
            'MMMM',
            {
              locale: pl,
            }
          )}`}</p>
        )}
        <ControlBtns>
          <button
            onClick={(e) => {
              e.preventDefault();
              prevMonth();
            }}
          >
            Poprzedni
          </button>
          <p>{format(currentMonth, 'LLLL, y', { locale: pl })}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              nextMonth();
            }}
          >
            Następny
          </button>
        </ControlBtns>
        <div className="calendar-grid">{renderDays()}</div>
      </CalendarComponent>
      <ConfirmBtn
        onClick={(e) => {
          e.preventDefault();
          postDataHandler();
        }}
      >
        potwierdź
      </ConfirmBtn>
      {postData && <Loader />}
    </>
  );
};

export default Calendar;
